import { useEffect, useRef, useState } from "react";
import { AnchorLogo, Ship, Wanderer } from "./art";
import { BIOMES } from "./data";
import { DeepSea, HiddenChest, Harbor, Islands, OpenSea } from "./biomes-sea";
import { Campfireside, Cave, CompassPeak, Horizon, Island, Village } from "./biomes-land";
import { Icon, ToastProvider, useReduced, useScrollY } from "./ui";

const SKY: [string, string][] = [
  ["#5bb8e8", "#d8f0fb"],
  ["#2E9BD6", "#1B4F9C"],
  ["#1B4F9C", "#0B1D33"],
  ["#3a6fae", "#2E9BD6"],
  ["#0B1D33", "#1B4F9C"],
  ["#1B4F9C", "#FF6B8A"],
  ["#13294a", "#b8547a"],
  ["#0B1D33", "#1B4F9C"],
  ["#050f1c", "#0B1D33"],
  ["#FF6B8A", "#FFD93D"],
];
const STARS = [0, 0, 0.2, 0, 0.4, 0.5, 0.6, 0.8, 1, 0.1];

const hex = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const mix = (a: string, b: string, t: number) => {
  const A = hex(a), B = hex(b);
  return `rgb(${A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(",")})`;
};

// indeks bioma pecahan berdasarkan posisi tengah layar
function biomeIndex() {
  const mid = window.scrollY + window.innerHeight / 2;
  let idx = 0;
  for (let i = 0; i < BIOMES.length; i++) {
    const el = document.getElementById(BIOMES[i].id);
    if (!el) continue;
    if (mid >= el.offsetTop) idx = i + Math.min(1, (mid - el.offsetTop) / el.offsetHeight);
  }
  return Math.min(BIOMES.length - 1, Math.max(0, idx - 0.5));
}
const progress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return max > 0 ? Math.min(1, window.scrollY / max) : 0;
};

// tiga lapis kedalaman: makin dekat, makin cepat bergerak → kesan turun/menyelam
const svg = (b: string) => `url("data:image/svg+xml,${encodeURIComponent(b)}")`;
const DEPTH = [
  { speed: 0.06, size: "180px 220px", img: svg(`<svg xmlns="http://www.w3.org/2000/svg" width="180" height="220"><g fill="#fff"><circle cx="20" cy="30" r="1.2"/><circle cx="120" cy="80" r="1"/><circle cx="70" cy="160" r="1.4"/><circle cx="160" cy="190" r="1"/></g></svg>`), o: 0.5 },
  { speed: 0.18, size: "420px 520px", img: svg(`<svg xmlns="http://www.w3.org/2000/svg" width="420" height="520"><g fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="3 7" stroke-linecap="round"><path d="M-20 120 C 80 60 160 180 260 110 S 400 90 440 140"/><path d="M-20 390 C 90 330 200 450 300 380 S 410 360 440 400"/></g><path d="M330 250 l6 6 m0 -6 l-6 6" stroke="#fff" stroke-width="2"/></svg>`), o: 0.14 },
  { speed: 0.42, size: "600px 900px", img: svg(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="900"><g fill="none" stroke="#fff" stroke-width="2.5"><circle cx="80" cy="140" r="9"/><circle cx="520" cy="420" r="14"/><circle cx="260" cy="760" r="7"/></g><g fill="#fff"><circle cx="440" cy="90" r="3"/><circle cx="150" cy="560" r="4"/></g></svg>`), o: 0.18 },
];

function Sky() {
  const y = useScrollY();
  const reduced = useReduced();
  const f = typeof document !== "undefined" ? biomeIndex() : 0;
  const i = Math.floor(f), t = f - i, j = Math.min(SKY.length - 1, i + 1);
  const top = mix(SKY[i][0], SKY[j][0], t), bot = mix(SKY[i][1], SKY[j][1], t);
  const stars = STARS[i] + (STARS[j] - STARS[i]) * t;
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" style={{ background: `linear-gradient(${top}, ${bot})` }} aria-hidden="true">
      <div className={`absolute inset-0 transition-opacity ${stars < 0.05 ? "paused" : ""}`} style={{ opacity: stars }}>
        {Array.from({ length: 25 }).map((_, k) => (
          <span
            key={k}
            className="absolute rounded-full bg-white"
            style={{ left: `${(k * 61) % 100}%`, top: `${(k * 29) % 70}%`, width: k % 5 ? 2 : 3, height: k % 5 ? 2 : 3, animation: `twinkle ${2 + (k % 4)}s ease-in-out ${k * 0.13}s infinite` }}
          />
        ))}
      </div>
      {!reduced && DEPTH.map((d, k) => (
        <div key={k} className="absolute inset-0" style={{ backgroundImage: d.img, backgroundSize: d.size, backgroundPosition: `${k * 70}px ${-y * d.speed}px`, opacity: d.o }} />
      ))}
    </div>
  );
}

function Nav({ found }: { found: number }) {
  const y = useScrollY();
  const [menu, setMenu] = useState(false);
  const solid = y > 40;
  const links = [
    ["#pelabuhan", "Pelabuhan Asal"], ["#misi", "Apa itu Sambandha"], ["#rute", "Jalur masuk"], ["#jadwal-snpmb", "Jadwal SNPMB"], ["#jalur-alternatif", "Kedinasan & alternatif"],
    ["#bekal", "Beasiswa & UKT"], ["#kompas", "Tes minat & tips jurusan"], ["#navigator", "Direktori alumni"], ["#belajar", "Rekomendasi belajar"], ["#menfess", "Menfess"], ["#faq", "FAQ"], ["#terhubung", "Terhubung"],
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${solid ? "bg-navy/80 py-2 backdrop-blur-md" : "py-4"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
        <div className="hidden flex-1 gap-6 md:flex">
          {[["#misi", "Misi"], ["#rute", "Rute"]].map(([h, l]) => (
            <a key={h} href={h} className={`font-display text-sm font-black tracking-widest uppercase hover:text-coral ${solid ? "text-white" : "text-navy"}`}>{l}</a>
          ))}
        </div>
        <a href="#top" className={`flex items-center gap-2 ${solid ? "text-white" : "text-navy"}`}>
          <AnchorLogo className="h-10 w-10" />
          <span className="leading-none">
            <span className="block font-display text-base font-black tracking-wider">SAMBANDHA</span>
            <span className="block font-mono text-[10px] opacity-70">-7.4974° S, 110.2573° E</span>
          </span>
        </a>
        <div className="flex flex-1 items-center justify-end gap-6">
          {[["#navigator", "Navigator"], ["#terhubung", "Terhubung"]].map(([h, l]) => (
            <a key={h} href={h} className={`hidden font-display text-sm font-black tracking-widest uppercase hover:text-coral md:inline ${solid ? "text-white" : "text-navy"}`}>{l}</a>
          ))}
          <span className="hidden rounded-full border-2 border-navy bg-paper px-3 py-1 text-xs font-bold whitespace-nowrap text-navy sm:inline" title="Cari 3 peti tersembunyi di peta">
            🗝 {found}/3
          </span>
          <div className="relative">
            <button onClick={() => setMenu(!menu)} aria-expanded={menu} className="rounded-full border-3 border-navy bg-sun px-4 py-1.5 font-display text-xs font-black tracking-wider text-navy uppercase">
              Semua Lokasi
            </button>
            {menu && (
              <ul className="paper chunky absolute top-12 right-0 w-64 rounded-2xl border-4 border-navy p-2 text-navy">
                {links.map(([h, l]) => (
                  <li key={h}>
                    <a href={h} onClick={() => setMenu(false)} className="block rounded-lg px-3 py-2 font-semibold hover:bg-sun">{l}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

function Rail() {
  useScrollY();
  const f = typeof document !== "undefined" ? biomeIndex() : 0;
  const sea = BIOMES[Math.round(f)].sea;
  return (
    <>
      <div className="fixed bottom-3 left-3 z-40 flex items-center gap-2 rounded-full border-3 border-navy bg-paper/95 py-1 pr-3 pl-1 lg:hidden text-navy shadow-lg">
        <Wanderer mode={sea ? "boat" : "walk"} className="h-9 w-9" />
        <span className="leading-tight">
          <span className="block text-[10px] font-semibold tracking-wider uppercase opacity-70">Lokasi</span>
          <span className="block font-display text-sm font-black">{BIOMES[Math.round(f)].name}</span>
        </span>
      </div>
    </>
  );
}

function Passport({ visited }: { visited: Set<string> }) {
  const [open, setOpen] = useState(false);
  const [last, setLast] = useState<string | null>(null);
  const prev = useRef(0);
  useEffect(() => {
    if (visited.size > prev.current && prev.current > 0) {
      const id = [...visited].pop()!;
      setLast(id);
      const t = setTimeout(() => setLast(null), 1400);
      prev.current = visited.size;
      return () => clearTimeout(t);
    }
    prev.current = visited.size;
  }, [visited]);
  return (
    <div className="fixed right-3 bottom-3 z-40">
      {last && (
        <div className="pointer-events-none absolute right-2 bottom-20 rounded-lg border-4 border-coral bg-paper/90 px-3 py-1 font-display font-black text-coral" style={{ animation: "stamp-in .5s ease forwards" }}>
          DUK! {BIOMES.find((b) => b.id === last)?.name}
        </div>
      )}
      {open && (
        <div className="paper chunky absolute right-0 bottom-20 w-72 rounded-2xl border-4 border-navy p-4 text-navy" style={{ animation: "rise .3s ease" }}>
          <p className="font-display text-xs font-black tracking-[.25em] text-royal uppercase">Paspor Pengembara</p>
          <p className="font-hand text-xl">{visited.size}/{BIOMES.length} lokasi dikunjungi</p>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {BIOMES.map((b) => {
              const v = visited.has(b.id);
              return (
                <li key={b.id}>
                  <a href={`#${b.id}`} className={`block rounded-lg border-2 p-2 text-center text-[11px] leading-tight font-bold ${v ? "-rotate-3 border-coral text-coral" : "border-dashed border-navy/30 text-navy/60"}`}>
                    {v ? "✓ " : "? "}{b.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Buka paspor digital" className="relative grid h-12 w-12 place-items-center rounded-2xl lg:h-14 lg:w-14 border-4 border-navy bg-royal text-sun shadow-lg transition hover:-rotate-6">
        <Icon name="passport" className="h-8 w-8" />
        <span className="absolute -top-2 -right-2 grid h-7 w-7 place-items-center rounded-full border-2 border-navy bg-coral text-xs font-black text-white">{visited.size}</span>
      </button>
    </div>
  );
}

function Confetti() {
  const c = ["#FF6B8A", "#FFD93D", "#2E9BD6", "#1B4F9C", "#fff"];
  return (
    <div className="pointer-events-none fixed inset-0 z-[90] overflow-hidden" aria-hidden="true">
      {Array.from({ length: 90 }).map((_, i) => (
        <span key={i} className="absolute -top-4 h-3 w-2" style={{ left: `${(i * 23) % 100}%`, background: c[i % 5], animation: `confetti ${2.5 + (i % 7) * 0.3}s linear ${(i % 10) * 0.1}s forwards` }} />
      ))}
    </div>
  );
}

function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-navy" style={{ animation: "rise .3s ease reverse 1.3s forwards" }}>
      <div className="w-full overflow-hidden text-center">
        <div className="w-40" style={{ animation: "sail-across 1.6s linear" }}>
          <Ship className="w-full" />
        </div>
        <p className="mt-4 font-display font-black tracking-[.3em] text-white uppercase">Mengangkat jangkar…</p>
      </div>
    </div>
  );
}

const SECRETS = [
  ["Sofiana · Poltekkes Semarang", "believe in your journey"],
  ["Naufal · UNY", "Jangan takut gagal; semisal kamu gagal, teruslah mencoba. Ingat, kamu masih muda dan jalanmu masih panjang. Enjoy your life."],
  ["Doni · UGM", "Hidup cuma sekali, tidak bisa diulangi."],
];

export default function App() {
  const reduced = useReduced();
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const [found, setFound] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem("sambandha_keys");
      const parsed: unknown = saved ? JSON.parse(saved) : [];
      // buang nilai yang tidak valid (misalnya data lama atau rusak di localStorage)
      return Array.isArray(parsed) ? parsed.filter((n): n is number => typeof n === "number" && n >= 0 && n < 3) : [];
    } catch {
      return [];
    }
  });
  const [secret, setSecret] = useState(false);

  useEffect(() => {
    // jeda animasi dekoratif di bagian yang tidak terlihat
    const vis = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle("offscreen", !e.isIntersecting)), { rootMargin: "100px" });
    document.querySelectorAll("main > section").forEach((s) => vis.observe(s));
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setVisited((v) => (v.has(e.target.id) ? v : new Set(v).add(e.target.id)))),
      { threshold: 0.25 },
    );
    BIOMES.forEach((b) => {
      const el = document.getElementById(b.id);
      if (el) io.observe(el);
    });
    return () => {
      io.disconnect();
      vis.disconnect();
    };
  }, []);

  const find = (id: number) => {
    if (found.includes(id)) return;
    const n = [...found, id];
    setFound(n);
    try {
      localStorage.setItem("sambandha_keys", JSON.stringify(n));
    } catch {}
    if (n.length === 3) setSecret(true);
  };
  const chest = (id: number, cls: string) => <HiddenChest id={id} found={found.includes(id)} onFind={find} className={cls} />;

  return (
    <ToastProvider>
      <div id="top" className="relative">
        {!reduced && <Loader />}
        <Sky />
        <Nav found={found.length} />
        <Rail />
        <Passport visited={visited} />
        <main className="pb-20 lg:pb-0">
          <Harbor />
          <OpenSea />
          <DeepSea chest={chest(1, "right-10 bottom-24")} />
          <Islands />
          <Cave chest={chest(2, "bottom-4 right-5")} />
          <CompassPeak />
          <Village />
          <Island />
          <Campfireside chest={chest(3, "-top-[38px] right-8")} />
          <Horizon />
        </main>
        {secret && (
          <>
            {!reduced && <Confetti />}
            <div className="fixed inset-0 z-[85] grid place-items-center bg-navy/70 p-4" role="dialog" aria-modal="true" aria-label="Pesan rahasia">
              <div className="paper chunky relative w-full max-w-lg rounded-3xl border-4 border-navy p-8 text-navy" style={{ animation: "rise .4s ease" }}>
                <span className="washi absolute -top-3 left-10 h-6 w-24 -rotate-6" />
                <p className="font-display text-xs font-black tracking-[.3em] text-coral uppercase">3/3 peti ditemukan!</p>
                <h3 className="mt-1 font-display text-3xl font-black uppercase">Pesan rahasia alumni</h3>
                <div className="mt-5 space-y-4">
                  {SECRETS.map(([w, m]) => (
                    <blockquote key={w}>
                      <p className="font-hand text-3xl leading-tight text-royal">“{m}”</p>
                      <cite className="text-sm font-bold not-italic">— {w}</cite>
                    </blockquote>
                  ))}
                </div>
                <button onClick={() => setSecret(false)} className="mt-6 rounded-full border-3 border-navy bg-coral px-6 py-2 font-display text-sm font-black text-white uppercase">
                  Lanjut berlayar
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </ToastProvider>
  );
}
