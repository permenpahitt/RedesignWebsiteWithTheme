import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type FormEvent, type ReactNode } from "react";
import { Bottle, Campfire, Chest, CompassRose, Lantern, Mountains, Observatory, Pin } from "./art";
import {
  ALUMNI, BOOKS, BOOK_NOTE, CAMPUSES, FAQ, MENFESS_NORMS, OFFICIAL, OFFLINE, PRACTICE, PRACTICE_INTRO, SCHOLARSHIPS, SCHOLARSHIP_INTRO, SCHOLARSHIP_NOTE,
  SHARE_URL, SUPA_KEY, SUPA_URL, TESTS, TEST_NOTE, TIPS, TIPS_INTRO, UKT, campusOf, type Alumnus,
} from "./data";
import { BiomeTitle, ExtLink, Hand, Icon, Reveal, linkPill, rich, useReduced, useScrollY, useToast } from "./ui";

/* ───────── 5 · GUA HARTA (bekal) ───────── */
export function Cave({ chest }: { chest: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <section id="bekal" data-biome="bekal" className="relative overflow-hidden px-5 py-28 sm:px-8">
      <span id="beasiswa" />
      {/* stalaktit */}
      <svg className="pointer-events-none absolute top-0 left-0 h-32 w-full" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0H1000V30L960 90L930 30L880 110L840 30L790 70L740 25L690 100L650 30L600 60L560 20L500 115L460 30L410 80L360 25L300 95L260 30L210 70L160 20L110 105L70 30L30 75L0 30Z" fill="#0b1d33" />
      </svg>
      {[8, 22, 78, 90].map((l, i) => (
        <svg key={l} className="anim-glow pointer-events-none absolute w-16" style={{ left: `${l}%`, top: `${30 + (i % 2) * 40}%`, animationDelay: `${i * 0.6}s` }} viewBox="0 0 40 60" aria-hidden="true">
          <path d="M20 2L34 22L26 58H14L6 22Z" fill={i % 2 ? "#2e9bd6" : "#ff6b8a"} stroke="#0b1d33" strokeWidth="3" />
          <path d="M20 2L26 22L20 58Z" fill="#fff" opacity=".35" />
        </svg>
      ))}
      <div className="relative mx-auto max-w-7xl">
        <BiomeTitle kicker="Pos 04 · Gua Harta" title={<>Bekal<br />Perjalanan</>} sub={SCHOLARSHIP_INTRO} />

        <div className="relative mt-12 flex flex-col items-center">
          <div className="absolute -top-6 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,217,61,.45),transparent_65%)]" />
          <button onClick={() => setOpen((o) => !o)} className="relative w-56 transition hover:scale-105 sm:w-72" aria-expanded={open} aria-controls="tiket-beasiswa">
            <Chest open={open} className="w-full drop-shadow-[0_16px_0_rgba(0,0,0,.35)]" />
            <span className="sr-only">{open ? "Tutup peti beasiswa" : "Buka peti beasiswa"}</span>
          </button>
          <Hand className="mt-2 -rotate-2 text-sun [text-shadow:0_2px_0_#0b1d33]">{open ? "isi peti: 5 tiket beasiswa ↓" : "klik petinya! ada isinya…"}</Hand>
        </div>

        <div id="tiket-beasiswa" className={`grid gap-6 transition-all duration-700 md:grid-cols-2 ${open ? "mt-12 opacity-100" : "pointer-events-none mt-0 max-h-0 overflow-hidden opacity-0"}`}>
          {SCHOLARSHIPS.map((s, i) => (
            <article
              key={s.id}
              className={`ticket paper relative grid grid-cols-[1fr_auto] text-navy ${i === 0 ? "md:col-span-2" : ""}`}
              style={open ? { animation: `rise .6s ease ${i * 0.1}s both` } : undefined}
            >
              <div className="p-6 sm:p-8">
                <p className="font-display text-[11px] font-extrabold tracking-[.25em] text-coral uppercase">{s.kicker}</p>
                <h3 className="mt-1 font-display text-2xl font-black uppercase sm:text-3xl">{s.title}</h3>
                <p className="mt-2">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {s.details.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-royal" />
                      <span>{rich(d)}</span>
                    </li>
                  ))}
                </ul>
                {s.link && (
                  <ExtLink href={s.link.href} className={`${linkPill} mt-4`}>
                    {s.link.label}
                  </ExtLink>
                )}
              </div>
              <div className="flex w-16 flex-col items-center justify-between border-l-4 border-dashed border-navy/30 py-6">
                <span className="font-display text-xs font-black text-royal [writing-mode:vertical-rl]">ADMIT ONE · No.0{i + 1}</span>
                <span className="barcode h-16 w-6" />
              </div>
            </article>
          ))}
        </div>

        <div className="relative mt-16 grid gap-6 lg:grid-cols-[1.3fr_.7fr]">
          <Reveal>
            <div className="paper chunky rounded-[2rem] border-4 border-navy p-6 text-navy sm:p-9">
              <p className="font-display text-xs font-extrabold tracking-[.3em] text-coral uppercase">Peta biaya</p>
              <h3 className="mt-1 font-display text-3xl font-black uppercase">Apa itu UKT?</h3>
              <div className="mt-4 space-y-3">
                {UKT.map((u) => (
                  <p key={u}>{rich(u)}</p>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative h-full rotate-1 rounded-[2rem] border-4 border-navy bg-sun p-6 pb-16 text-navy chunky">
              <span className="washi absolute -top-3 left-8 h-6 w-20 -rotate-6" />
              <Hand className="text-3xl">catatan navigator:</Hand>
              <p className="mt-3 text-sm">{rich(SCHOLARSHIP_NOTE)}</p>
              {chest}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────── 6 · PUNCAK KOMPAS ───────── */
const FORTUNES = [
  { dir: "R", name: "Utara", type: "Sang Pembangun", code: "Realistic", text: "Bintang utara menuntun tangan yang suka merakit dan memperbaiki. Teknik mesin, sipil, pertanian, kehutanan, dan vokasi teknik bisa jadi pelabuhanmu.", test: 0 },
  { dir: "I", name: "Timur Laut", type: "Sang Penyelidik", code: "Investigative", text: "Angin timur laut untuk jiwa yang suka bertanya ‘kenapa?’. Sains, kedokteran, farmasi, riset, dan informatika menunggumu.", test: 0 },
  { dir: "A", name: "Tenggara", type: "Sang Pencipta", code: "Artistic", text: "Matahari terbit untuk para pembuat. Desain, sastra, arsitektur, film, dan seni menunggumu di cakrawala.", test: 0 },
  { dir: "S", name: "Selatan", type: "Sang Penolong", code: "Social", text: "Angin selatan membawa kehangatan. Pendidikan, keperawatan, psikologi, dan kesehatan masyarakat cocok untuk hati yang suka menolong.", test: 0 },
  { dir: "E", name: "Barat Daya", type: "Sang Penggerak", code: "Enterprising", text: "Senja barat daya untuk pemimpin dan perayu ulung. Manajemen, bisnis, hukum, komunikasi, dan hubungan internasional bisa jadi rute kapalmu.", test: 0 },
  { dir: "C", name: "Barat Laut", type: "Sang Perapi", code: "Conventional", text: "Barat laut untuk navigator yang teliti dan rapi. Akuntansi, statistik, administrasi, perpajakan, dan perbankan cocok dengan ketelitianmu.", test: 0 },
];

export function CompassPeak() {
  const y = useScrollY();
  const reduced = useReduced();
  const ref = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [top, setTop] = useState(0);
  useEffect(() => {
    const el = document.getElementById("kompas");
    if (el) setTop(el.offsetTop);
  }, [y]);
  useEffect(() => {
    if (reduced || !window.matchMedia("(pointer: fine)").matches) return;
    const move = (e: MouseEvent) => {
      if (pick !== null || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      setAngle((Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180) / Math.PI + 90);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [pick, reduced]);
  const rel = reduced ? 0 : y - top;
  const choose = (i: number) => {
    setPick(i);
    setAngle(i * 60);
  };
  const f = pick !== null ? FORTUNES[pick] : null;
  const dirPos = (i: number) => {
    const r = (i * 60 * Math.PI) / 180;
    return { left: `${50 + 50 * Math.sin(r)}%`, top: `${50 - 50 * Math.cos(r)}%` };
  };

  return (
    <section id="kompas" data-biome="kompas" className="relative overflow-hidden px-5 pt-28 pb-28 sm:px-8">
      <span id="tes-minat" />
      <span id="tips-jurusan" />
      {/* bintang awal & gunung parallax */}
      <div className="pointer-events-none absolute inset-x-0 top-[22rem] h-[28rem]">
        <Mountains className="absolute bottom-0 w-[160%] -translate-x-[10%] opacity-50" style={{ transform: `translate(-10%, ${rel * 0.25}px)` }} />
        <Mountains className="absolute -bottom-10 w-[130%] -translate-x-[5%] opacity-80" style={{ transform: `translate(-5%, ${rel * 0.12}px) scaleX(-1)` }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative">
          <BiomeTitle kicker="Pos 05 · Puncak Kompas" title={<>Kenali<br />Arahmu</>} sub="Sebelum memilih rute, kenali dulu kompas di dalam dirimu." />
          <Observatory className="absolute -top-6 right-0 hidden w-48 lg:block" />
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div ref={ref} className="relative mx-auto aspect-square w-[min(80vw,420px)]">
            <div className="absolute inset-0 rounded-full border-[10px] border-navy bg-gradient-to-br from-sun via-[#e7b93a] to-[#b98a22] chunky" />
            <div className="absolute inset-6 rounded-full border-4 border-navy bg-paper" />
            <CompassRose className="absolute inset-10 text-royal/30" />
            <div className="absolute inset-0 transition-transform duration-300 ease-out" style={{ transform: `rotate(${angle}deg)` }}>
              <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
                <path d="M50 14 L57 50 L50 56 L43 50Z" fill="#ff6b8a" stroke="#0b1d33" strokeWidth="2" />
                <path d="M50 86 L57 50 L50 44 L43 50Z" fill="#fff" stroke="#0b1d33" strokeWidth="2" />
                <circle cx="50" cy="50" r="5" fill="#ffd93d" stroke="#0b1d33" strokeWidth="2" />
              </svg>
            </div>
            {FORTUNES.map((d, i) => (
              <button
                key={d.dir}
                onClick={() => choose(i)}
                aria-pressed={pick === i}
                aria-label={`Arah ${d.name}: ${d.type} (${d.code})`}
                style={dirPos(i)}
                className={`absolute grid h-12 w-12 sm:h-14 sm:w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-navy font-display text-xl font-black transition hover:scale-110 ${pick === i ? "bg-coral text-white" : "bg-white text-navy"}`}
              >
                {d.dir}
              </button>
            ))}
          </div>

          <div className="paper chunky relative min-h-[300px] rounded-[2rem] border-4 border-navy p-7 text-navy sm:p-10" aria-live="polite">
            <span className="washi-blue absolute -top-3 right-10 h-6 w-24 rotate-6" />
            {f ? (
              <div key={f.dir} style={{ animation: "rise .5s ease" }}>
                <p className="font-display text-xs font-extrabold tracking-[.3em] text-coral uppercase">
                  Ramalan perjalanan · {f.name}
                </p>
                <h3 className="mt-2 font-display text-4xl font-black uppercase">{f.type}</h3>
                <p className="font-hand text-2xl text-royal">tipe RIASEC: {f.code}</p>
                <p className="mt-4 text-lg">{f.text}</p>
                <p className="mt-4 text-sm text-navy/70">Ramalan ini cuma pemanasan. Pastikan arahmu dengan tes sungguhan:</p>
                <ExtLink href={TESTS[f.test].href} className={`${linkPill} mt-3`}>
                  {TESTS[f.test].title} ↗
                </ExtLink>
              </div>
            ) : (
              <div>
                <Hand className="text-4xl text-coral">kompasnya hidup!</Hand>
                <p className="mt-4 text-lg">
                  Jarum mengikuti gerakan kursormu. <strong>Klik salah satu dari enam arah</strong> — R, I, A, S, E, C, sesuai enam tipe RIASEC — untuk membuka ramalan perjalananmu.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* boarding pass tes */}
        <div className="mt-24">
          <h3 className="font-display text-3xl font-black text-white uppercase sm:text-4xl" style={{ textShadow: "0 3px 0 #0b1d33" }}>
            Tes minat & bakat
          </h3>
          <p className="mt-2 text-white/85">Empat boarding pass gratis untuk mengenal dirimu.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {TESTS.map((t, i) => (
              <Reveal key={t.code} delay={i * 80}>
                <ExtLink href={t.href} className="ticket group grid grid-cols-[auto_1fr] bg-white text-navy transition hover:-translate-y-1">
                  <div className="grid w-24 place-items-center border-r-4 border-dashed border-navy/25 bg-royal font-display text-2xl font-black text-sun">{t.code}</div>
                  <div className="p-5">
                    <p className="text-[11px] font-bold tracking-[.2em] text-coral uppercase">Boarding pass · {t.source}</p>
                    <h4 className="font-display text-lg font-black uppercase group-hover:text-royal">{t.title} ↗</h4>
                    <p className="mt-1 text-sm text-navy/75">{t.desc}</p>
                  </div>
                </ExtLink>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-sm text-white/90">{rich(TEST_NOTE)}</p>
        </div>

        {/* jurnal tips */}
        <div className="mt-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="font-display text-3xl font-black text-white uppercase sm:text-4xl" style={{ textShadow: "0 3px 0 #0b1d33" }}>
                Jurnal: tips memilih jurusan
              </h3>
              <p className="mt-2 max-w-2xl text-white/85">{TIPS_INTRO}</p>
            </div>
            <Hand className="rotate-3 text-sun [text-shadow:0_2px_0_#0b1d33]">dicatat dari pengalaman kakak-kakak ✎</Hand>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {TIPS.map((t, i) => (
              <Reveal key={t.label} delay={i * 80}>
                <article className={`paper chunky relative h-full rounded-2xl border-4 border-navy p-6 text-navy ${i % 2 ? "rotate-[.6deg]" : "-rotate-[.6deg]"}`}>
                  <span className={`${i % 2 ? "washi-blue" : "washi"} absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2`} />
                  <p className="font-hand text-2xl text-coral">{t.label}</p>
                  <h4 className="font-display text-xl font-black uppercase">{t.title}</h4>
                  {t.body && <p className="mt-3">{rich(t.body)}</p>}
                  {t.list && (
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                      {t.list.map((l) => (
                        <li key={l}>{rich(l)}</li>
                      ))}
                    </ul>
                  )}
                  {t.points && (
                    <dl className="mt-3 space-y-2 text-sm">
                      {t.points.map(([k, v]) => (
                        <div key={k}>
                          <dt className="font-bold">{k}</dt>
                          <dd>{rich(v)}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                  {t.steps && (
                    <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm">
                      {t.steps.map((l) => (
                        <li key={l}>{rich(l)}</li>
                      ))}
                    </ol>
                  )}
                  {t.after && <p className="mt-3 text-sm">{rich(t.after)}</p>}
                  {t.link && (
                    <ExtLink href={t.link.href} className={`${linkPill} mt-4`}>
                      {t.link.label}
                    </ExtLink>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── 7 · DESA PEMANDU (navigator) ───────── */
const SMANCA_D = { x: 36, y: 46 };
// peta gabus versi HP (potret 3:4) punya tata letak pin sendiri
const SMANCA_M = { x: 30, y: 40 };
const MOBILE_POS: Record<string, { x: number; y: number }> = {
  UNTIDAR: { x: 56, y: 44 }, UGM: { x: 42, y: 66 }, UPNVY: { x: 18, y: 76 }, UNY: { x: 66, y: 78 }, UNS: { x: 80, y: 60 },
  UNDIP: { x: 54, y: 22 }, UNNES: { x: 22, y: 16 }, POLTEKKES: { x: 82, y: 32 }, ITS: { x: 84, y: 46 }, PIP: { x: 80, y: 10 },
  UMMAGELANG: { x: 20, y: 56 },
};
function useMobile() {
  const q = "(max-width: 639px)";
  const [m, setM] = useState(() => typeof window !== "undefined" && window.matchMedia(q).matches);
  useEffect(() => {
    const mq = window.matchMedia(q);
    const on = () => setM(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return m;
}
function AlumniCard({ a, i }: { a: Alumnus; i: number }) {
  const toast = useToast();
  const c = campusOf(a);
  const copy = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(a.kontak);
      ok = true;
    } catch {
      // fallback untuk iframe/HTTP yang memblokir Clipboard API
      const ta = document.createElement("textarea");
      ta.value = a.kontak;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;opacity:0;left:-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        ok = document.execCommand("copy");
      } catch {
        ok = false;
      }
      ta.remove();
    }
    toast(ok ? `Kontak ${a.name.split(" ")[0]} disalin` : `Kontak: ${a.kontak}`);
  };
  const salam = a.salam && a.salam !== "-" ? a.salam : null;
  return (
    <article className={`paper chunky-soft relative flex h-full flex-col rounded-2xl border-4 border-navy p-5 text-navy ${i % 3 === 1 ? "rotate-[.8deg]" : i % 3 === 2 ? "-rotate-[.6deg]" : ""}`}>
      <span className="absolute -top-3 -right-2 rotate-6 rounded-lg border-2 border-navy bg-coral px-2 py-0.5 font-display text-[10px] font-black tracking-widest text-white uppercase">
        <svg viewBox="0 0 24 24" className="mr-1 inline h-3 w-3 align-[-1px]" fill="currentColor" aria-hidden="true"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" /></svg>
        {c?.label ?? a.uni}
      </span>
      <p className="font-display text-[11px] font-extrabold tracking-[.2em] text-royal uppercase">Angkatan {a.year}</p>
      <h4 className="mt-1 pr-6 font-display text-lg leading-tight font-black uppercase">{a.name}</h4>
      <p className="mt-2 pr-2 text-sm font-semibold">{c ? `${c.full} (${c.label})` : a.uni}</p>
      <p className="text-sm text-navy/70">
        {a.fakultas} · {a.jurusan}
      </p>
      {a.status && <p className="mt-1 text-xs font-bold text-coral">{a.status}</p>}
      {salam && <p className="mt-3 font-hand text-2xl leading-tight text-royal">“{salam}”</p>}
      <div className="mt-auto pt-4">
        <p className="text-xs break-words text-navy/70">{a.kontak}</p>
        <button onClick={copy} className="mt-2 inline-flex items-center gap-2 rounded-full border-3 border-navy bg-sun px-4 py-1.5 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-coral hover:text-white">
          <Icon name="copy" className="h-4 w-4" /> Salin Kontak
        </button>
      </div>
    </article>
  );
}

export function Village() {
  const [q, setQ] = useState("");
  const [camp, setCamp] = useState<string | null>(null);
  const mobile = useMobile();
  const SMANCA = mobile ? SMANCA_M : SMANCA_D;
  const at = (c: (typeof CAMPUSES)[number]) => (mobile ? MOBILE_POS[c.key] : c);
  const listRef = useRef<HTMLDivElement>(null);
  const counts = useMemo(() => {
    const m: Record<string, number> = {};
    ALUMNI.forEach((a) => {
      const k = campusOf(a)?.key;
      if (k) m[k] = (m[k] ?? 0) + 1;
    });
    return m;
  }, []);
  const list = ALUMNI.filter((a) => {
    const c = campusOf(a);
    if (camp && c?.key !== camp) return false;
    const s = q.trim().toLowerCase();
    if (!s) return true;
    const hay = [a.name, a.uni, a.fakultas, a.jurusan, a.year, a.salam, c?.label, c?.full, c?.city]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return hay.includes(s);
  });
  const jump = (k: string) => {
    setCamp(camp === k ? null : k);
    setTimeout(() => listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 450);
  };

  return (
    <section id="navigator" data-biome="navigator" className="relative overflow-hidden px-5 py-28 sm:px-8">
      <span id="alumni" />
      <span id="direktori" />
      <div className="relative mx-auto max-w-7xl">
        <BiomeTitle kicker="Pos 06 · Desa Pemandu" title={<>Para<br />Navigator</>} sub="Kakak kelas yang sudah berlabuh di kampus-kampus. Klik pin di peta untuk menemui mereka." />

        <Reveal className="mt-12">
          <div className="cork chunky relative aspect-[3/4] overflow-hidden rounded-[2rem] border-[10px] border-[#7a4f22] sm:aspect-[16/9]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M8 40 Q20 30 35 34 T62 40 T92 36 L95 62 Q70 70 50 66 T10 64Z" fill="#f5e6c8" opacity=".55" stroke="#0b1d33" strokeWidth=".3" strokeDasharray="1 1" />
              {CAMPUSES.map((c) => {
                const on = !camp || camp === c.key;
                return (
                  <path
                    key={c.key + (camp ?? "")}
                    d={`M${SMANCA.x} ${SMANCA.y} Q${(SMANCA.x + at(c).x) / 2} ${Math.min(SMANCA.y, at(c).y) - 8} ${at(c).x} ${at(c).y}`}
                    fill="none"
                    stroke="#e0283f"
                    strokeWidth={camp === c.key ? 0.9 : 0.45}
                    opacity={on ? 1 : 0.2}
                    vectorEffect="non-scaling-stroke"
                    pathLength={1}
                    style={{ strokeDasharray: 1, animation: `drawthread 2s ease ${camp === c.key ? 0 : 0.2}s both` }}
                  />
                );
              })}
            </svg>
            <div className="absolute -translate-x-1/2 -translate-y-full text-center" style={{ left: `${SMANCA.x}%`, top: `${SMANCA.y}%` }}>
              <Pin color="#ff6b8a" className="mx-auto w-10" />
              <span className="absolute top-full left-1/2 mt-1 -translate-x-1/2 rounded bg-navy px-2 py-0.5 font-display text-[10px] font-black text-white">SMANCA</span>
            </div>
            {CAMPUSES.map((c) => (
              <button
                key={c.key}
                onClick={() => jump(c.key)}
                className={`absolute -translate-x-1/2 -translate-y-full text-center transition hover:scale-110 ${camp && camp !== c.key ? "opacity-50" : ""}`}
                style={{ left: `${at(c).x}%`, top: `${at(c).y}%` }}
                aria-label={`${c.label}, ${c.city}: ${counts[c.key] ?? 0} alumni`}
              >
                <Pin color={camp === c.key ? "#ff6b8a" : "#ffd93d"} className="mx-auto w-7 sm:w-8" />
                <span className="absolute top-full left-1/2 mt-0.5 -translate-x-1/2 rotate-[-3deg] rounded-sm bg-paper px-1.5 py-0.5 text-[9px] font-bold whitespace-nowrap text-navy shadow sm:text-xs">
                  {c.label} · {counts[c.key] ?? 0}
                </span>
              </button>
            ))}
            <Hand className="absolute right-4 bottom-3 left-4 text-right text-lg text-navy sm:text-3xl">benang merah = ikatan (sambandha!)</Hand>
          </div>
        </Reveal>

        <div ref={listRef} className="mt-12 scroll-mt-24">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="relative w-full max-w-md">
              <span className="sr-only">Cari alumni</span>
              <Icon name="search" className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-navy" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari nama, kampus, atau jurusan…"
                className="w-full rounded-full border-4 border-navy bg-white py-3 pr-4 pl-12 font-semibold text-navy outline-none focus:bg-paper"
              />
            </label>
            <p className="font-display font-black text-white" aria-live="polite">
              {`${list.length} dari ${ALUMNI.length} alumni`}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button onClick={() => setCamp(null)} className={`rounded-full border-3 border-navy px-3 py-1 text-sm font-bold ${!camp ? "bg-sun text-navy" : "bg-white/90 text-navy"}`}>
              Semua
            </button>
            {CAMPUSES.map((c) => (
              <button key={c.key} onClick={() => setCamp(camp === c.key ? null : c.key)} className={`rounded-full border-3 border-navy px-3 py-1 text-sm font-bold ${camp === c.key ? "bg-coral text-white" : "bg-white/90 text-navy"}`}>
                {c.label}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {list.map((a, i) => (
              <AlumniCard key={a.name} a={a} i={i} />
            ))}
          </div>
          {list.length === 0 && <p className="mt-8 font-hand text-3xl text-sun [text-shadow:0_2px_0_#0b1d33]">Belum ada navigator di sini… coba kata kunci lain.</p>}
        </div>

        {/* papan pengumuman desa */}
        <div id="belajar" className="mt-24 scroll-mt-24">
          <span id="rekomendasi" />
          <h3 className="font-display text-3xl font-black text-white uppercase sm:text-4xl" style={{ textShadow: "0 3px 0 #0b1d33" }}>
            Papan pengumuman desa
          </h3>
          <p className="mt-2 max-w-2xl text-white/85">{PRACTICE_INTRO}</p>
          <div className="cork mt-8 grid gap-6 rounded-[2rem] border-[10px] border-[#7a4f22] p-5 sm:p-8 md:grid-cols-2 lg:grid-cols-3">
            {PRACTICE.map((p, i) => (
              <div key={p.title} className={`relative rounded-xl bg-white p-5 text-navy shadow-lg ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-navy bg-coral" />
                <p className="font-display text-[11px] font-black tracking-[.2em] text-coral uppercase">{p.tag}</p>
                <h4 className="font-display font-black uppercase">{p.title}</h4>
                <p className="mt-2 text-sm">{p.body}</p>
                <ExtLink href={p.link.href} className={`${linkPill} mt-3`}>
                  {p.link.label}
                </ExtLink>
              </div>
            ))}
            <div className="relative -rotate-1 rounded-xl bg-sun p-5 text-navy shadow-lg">
              <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-navy bg-royal" />
              <h4 className="font-display font-black uppercase">Bimbel offline</h4>
              {OFFLINE.map((o) => (
                <p key={o.title} className="mt-2 text-sm">
                  <ExtLink href={o.href} className="font-bold underline">
                    {o.title}
                  </ExtLink>{" "}
                  — {o.body}
                </p>
              ))}
            </div>
            <div className="relative rotate-1 rounded-xl bg-paper p-5 text-navy shadow-lg">
              <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-navy bg-coral" />
              <h4 className="font-display font-black uppercase">Buku rekomendasi</h4>
              {BOOKS.map((b) => (
                <p key={b.title} className="mt-2 text-sm">
                  <strong>{b.title}</strong> ({b.credit}) — {b.body}
                </p>
              ))}
              <p className="mt-2 text-xs text-navy/70">{BOOK_NOTE}</p>
            </div>
            <div className="relative -rotate-1 rounded-xl bg-azure p-5 text-navy shadow-lg md:col-span-2 lg:col-span-1">
              <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-navy bg-sun" />
              <h4 className="font-display font-black uppercase">Tautan resmi</h4>
              <ul className="mt-2 space-y-2 text-sm">
                {OFFICIAL.map((o) => (
                  <li key={o.href}>
                    <ExtLink href={o.href} className="font-bold underline">
                      {o.label}
                    </ExtLink>
                    <br />
                    {o.sub}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── 8 · PULAU TERPENCIL (#menfess) ───────── */
type Answer = { id: string; answer_text: string; answered_by: string | null; is_alumni: boolean; alumni_info: string | null; created_at: string };
type Question = { id: string; question_text: string; nickname: string | null; created_at: string; answers?: Answer[] };
const H = { apikey: SUPA_KEY, Authorization: `Bearer ${SUPA_KEY}` };
const ago = (d: string) => {
  const s = (Date.now() - new Date(d).getTime()) / 1000;
  if (s < 60) return "baru saja";
  if (s < 3600) return `${Math.floor(s / 60)} menit lalu`;
  if (s < 86400) return `${Math.floor(s / 3600)} jam lalu`;
  return `${Math.floor(s / 86400)} hari lalu`;
};

function ReplyForm({ qid, onDone }: { qid: string; onDone: () => void }) {
  const toast = useToast();
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [alum, setAlum] = useState(false);
  const [info, setInfo] = useState("");
  const [busy, setBusy] = useState(false);
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (text.trim().length < 2) return toast("Balasan terlalu pendek");
    setBusy(true);
    try {
      const r = await fetch(`${SUPA_URL}/rest/v1/answers`, {
        method: "POST",
        headers: { ...H, "Content-Type": "application/json", Prefer: "return=minimal" },
        body: JSON.stringify({ question_id: qid, answer_text: text.trim(), answered_by: name.trim() || null, is_alumni: alum, alumni_info: alum ? info.trim() || null : null }),
      });
      if (!r.ok) throw 0;
      toast("Balasan terkirim");
      setText("");
      onDone();
    } catch {
      toast("Gagal mengirim balasan, coba lagi");
    } finally {
      setBusy(false);
    }
  };
  return (
    <form onSubmit={submit} className="mt-3 space-y-2 rounded-xl border-2 border-dashed border-navy/40 p-3">
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={2} placeholder="Tulis balasan…" className="w-full rounded-lg border-2 border-navy bg-white p-2 text-sm outline-none" aria-label="Balasan" />
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama (opsional)" className="min-w-0 flex-1 rounded-lg border-2 border-navy bg-white px-2 py-1" aria-label="Nama" />
        <label className="flex items-center gap-1 font-semibold">
          <input type="checkbox" checked={alum} onChange={(e) => setAlum(e.target.checked)} /> Saya alumni
        </label>
      </div>
      {alum && <input value={info} onChange={(e) => setInfo(e.target.value)} placeholder="Kampus · jurusan · angkatan" className="w-full rounded-lg border-2 border-navy bg-white px-2 py-1 text-sm" aria-label="Info alumni" />}
      <button disabled={busy} className="rounded-full border-2 border-navy bg-royal px-4 py-1 text-sm font-bold text-white disabled:opacity-50">
        {busy ? "Mengirim…" : "Kirim balasan"}
      </button>
    </form>
  );
}

export function Island() {
  const toast = useToast();
  const reduced = useReduced();
  const [items, setItems] = useState<Question[] | null>(null);
  const [err, setErr] = useState(false);
  const [letter, setLetter] = useState(false);
  const [sailing, setSailing] = useState(false);
  const [text, setText] = useState("");
  const [nick, setNick] = useState("");
  const [busy, setBusy] = useState(false);
  const [replyTo, setReplyTo] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const r = await fetch(`${SUPA_URL}/rest/v1/questions?status=neq.rejected&select=*,answers(*)&answers.order=created_at.asc&order=created_at.desc`, { headers: H });
      if (!r.ok) throw 0;
      setItems(await r.json());
      setErr(false);
    } catch {
      setErr(true);
      setItems([]);
    }
  }, []);
  useEffect(() => {
    load();
  }, [load]);

  const send = async (e: FormEvent) => {
    e.preventDefault();
    if (text.trim().length < 10) return toast("Pesan minimal 10 karakter");
    setBusy(true);
    try {
      const r = await fetch(`${SUPA_URL}/rest/v1/questions`, {
        method: "POST",
        headers: { ...H, "Content-Type": "application/json", Prefer: "return=minimal" },
        body: JSON.stringify({ question_text: text.trim(), target_alumni: null, nickname: nick.trim() || null }),
      });
      if (!r.ok) throw 0;
      setLetter(false);
      setSailing(true);
      setText("");
      toast("Botol dihanyutkan! Pesanmu terkirim");
      setTimeout(() => setSailing(false), reduced ? 100 : 2600);
      load();
    } catch {
      toast("Botol gagal dihanyutkan, coba lagi");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section id="menfess" data-biome="menfess" className="relative overflow-hidden px-5 py-28 sm:px-8">
      <div className="relative mx-auto max-w-7xl">
        <BiomeTitle kicker="Pos 07 · Pulau Terpencil" title={<>Pesan<br />dalam Botol</>} sub="Tanya apa saja ke alumni secara anonim. Hanyutkan botolmu, nanti ada yang membalas." />

        <div className="relative mt-12 grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="relative mx-auto h-72 w-full max-w-sm">
            <svg viewBox="0 0 300 120" className="absolute bottom-0 w-full" aria-hidden="true">
              <ellipse cx="150" cy="100" rx="140" ry="22" fill="#2e9bd6" stroke="#0b1d33" strokeWidth="4" />
              <path d="M40 98 Q150 30 260 98Z" fill="#f5e6c8" stroke="#0b1d33" strokeWidth="4" />
              <path d="M200 70 Q210 20 190 0 M200 70 Q230 30 260 30 M200 70 Q170 30 150 34 M200 70 Q220 10 240 6" stroke="#4f9c5a" strokeWidth="7" fill="none" strokeLinecap="round" />
              <path d="M200 70 L196 40" stroke="#9a5a26" strokeWidth="6" />
            </svg>
            {!sailing ? (
              <button
                onClick={() => setLetter(true)}
                className="anim-bob absolute bottom-10 left-8 w-28 -rotate-[25deg] transition hover:scale-110"
                aria-label="Buka botol dan tulis surat"
              >
                <Bottle className="w-full" />
              </button>
            ) : (
              <div className="absolute bottom-10 left-8 w-28" style={{ animation: "float-away 2.6s ease-in forwards" }}>
                <Bottle className="w-full -rotate-[25deg]" />
              </div>
            )}
            <Hand className="absolute -top-2 left-0 -rotate-6 text-sun [text-shadow:0_2px_0_#0b1d33]">{sailing ? "berlayar… 🌊" : "klik botolnya →"}</Hand>
          </div>

          <div>
            {letter ? (
              <form onSubmit={send} className="paper chunky relative rounded-[2rem] border-4 border-navy p-6 text-navy sm:p-8" style={{ animation: "rise .4s ease" }}>
                <span className="washi absolute -top-3 left-10 h-6 w-24 -rotate-3" />
                <Hand className="text-3xl text-royal">Untuk siapa pun yang membaca,</Hand>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={5}
                  maxLength={1000}
                  autoFocus
                  placeholder="Tulis pertanyaanmu ke alumni (min. 10 karakter)…"
                  className="mt-3 w-full resize-none border-0 border-b-2 border-dashed border-navy/40 bg-[repeating-linear-gradient(transparent_0_31px,rgba(11,29,51,.15)_31px_32px)] p-1 font-hand text-2xl leading-8 outline-none"
                  aria-label="Isi surat"
                />
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <input value={nick} onChange={(e) => setNick(e.target.value)} placeholder="Nama samaran (opsional)" className="min-w-0 flex-1 rounded-full border-2 border-navy bg-white px-4 py-2 text-sm" aria-label="Nama samaran" />
                  <span className="text-xs text-navy/75">{text.trim().length}/10+</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button disabled={busy} className="chunky-soft rounded-full border-3 border-navy bg-coral px-6 py-2.5 font-display text-sm font-black tracking-wider text-white uppercase disabled:opacity-50">
                    {busy ? "Menyegel…" : "Hanyutkan botol"}
                  </button>
                  <button type="button" onClick={() => setLetter(false)} className={linkPill}>
                    Batal
                  </button>
                </div>
              </form>
            ) : (
              <div className="rounded-[2rem] border-4 border-dashed border-white/50 p-6 text-white">
                <h3 className="font-display text-xl font-black uppercase">Aturan pulau</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/85">
                  {MENFESS_NORMS.map((n) => (
                    <li key={n}>⚓ {n}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-2xl font-black text-white uppercase">Botol yang terdampar</h3>
            <button onClick={load} className="rounded-full border-2 border-white/70 px-3 py-1 text-sm font-bold text-white hover:bg-white/10">
              Muat ulang
            </button>
          </div>
          {items === null && <p className="mt-6 font-hand text-2xl text-sun [text-shadow:0_2px_0_#0b1d33]">Menyisir pantai…</p>}
          {err && <p className="mt-6 text-white/90">Gagal memuat pesan. Periksa koneksimu lalu coba muat ulang.</p>}
          {items && !err && items.length === 0 && <p className="mt-6 font-hand text-2xl text-sun [text-shadow:0_2px_0_#0b1d33]">Belum ada botol. Jadilah yang pertama!</p>}
          <div className="mt-6 columns-1 gap-6 md:columns-2 lg:columns-3">
            {items?.map((m, i) => (
              <article key={m.id} className={`paper mb-6 break-inside-avoid rounded-2xl border-4 border-navy p-5 text-navy chunky-soft ${i % 2 ? "rotate-[.5deg]" : "-rotate-[.5deg]"}`}>
                <p className="text-xs font-bold text-navy/75">
                  {m.nickname || "Anonim"} · {ago(m.created_at)}
                </p>
                <p className="mt-2 font-hand text-2xl leading-snug">{m.question_text}</p>
                {m.answers?.map((a) => (
                  <div key={a.id} className="mt-3 rounded-xl border-l-4 border-royal bg-white/70 p-3 text-sm">
                    <p className="text-xs font-bold text-royal">
                      {a.answered_by || "Anonim"}
                      {a.is_alumni && <span className="ml-1 rounded bg-sun px-1.5 text-navy">Alumni{a.alumni_info ? ` · ${a.alumni_info}` : ""}</span>}
                    </p>
                    <p className="mt-1">{a.answer_text}</p>
                  </div>
                ))}
                <button onClick={() => setReplyTo(replyTo === m.id ? null : m.id)} className="mt-3 text-sm font-bold text-coral underline-offset-2 hover:underline">
                  {replyTo === m.id ? "Tutup" : `Balas${m.answers?.length ? ` (${m.answers.length})` : ""}`}
                </button>
                {replyTo === m.id && (
                  <ReplyForm
                    qid={m.id}
                    onDone={() => {
                      setReplyTo(null);
                      load();
                    }}
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── 9 · PERAPIAN CERITA (FAQ) ───────── */
export function Campfireside({ chest }: { chest: ReactNode }) {
  const reduced = useReduced();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="perapian" data-biome="perapian" className="relative overflow-hidden px-5 py-28 sm:px-8">
      <span id="faq" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {Array.from({ length: 36 }).map((_, i) => {
          const r = (n: number) => ((i * 9301 + n * 49297) % 233280) / 233280;
          const v = (n: number, m: number) => `${Math.round((r(n) - 0.5) * 2 * m)}px`;
          return (
            <span
              key={i}
              className="firefly"
              style={{
                left: `${(i * 37 + 5) % 100}%`,
                top: `${(i * 61 + 7) % 100}%`,
                "--size": `${5 + Math.round(r(1) * 7)}px`,
                "--dur": `${9 + r(2) * 9}s`,
                "--blink": `${1.8 + r(3) * 3}s`,
                "--delay": `-${(r(4) * 12).toFixed(1)}s`,
                "--fx1": v(5, 90), "--fy1": v(6, 70),
                "--fx2": v(7, 140), "--fy2": v(8, 110),
                "--fx3": v(9, 90), "--fy3": v(10, 70),
              } as CSSProperties}
            >
              <i />
            </span>
          );
        })}
      </div>
      <div className="relative mx-auto max-w-5xl">
        <div className="relative">
          <BiomeTitle kicker="Pos 08 · Perapian Cerita" title={<>Cerita<br />di Api Unggun</>} sub="Pertanyaan yang paling sering ditanyakan adik kelas, dijawab sambil menghangatkan diri." />
          <div className="relative mx-auto mt-6 w-40 sm:absolute sm:top-0 sm:right-0 sm:mt-0 sm:w-52">
            <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(255,107,138,.45),transparent_65%)]" />
            <Campfire className="relative w-full" />
          </div>
        </div>
        <div className="mt-14 space-y-4">
          {FAQ.map(([q, a], i) => {
            const on = open === i;
            return (
              <div key={q} className={`relative rounded-2xl border-4 border-navy transition ${on ? "paper chunky" : "bg-white/95"}`}>
                {i === FAQ.length - 1 && chest}
                <h3>
                  <button
                    onClick={() => setOpen(on ? null : i)}
                    aria-expanded={on}
                    aria-controls={`faq-${i}`}
                    className="flex w-full items-center gap-4 p-5 text-left font-display font-black text-navy sm:text-lg"
                  >
                    <Lantern className={`w-8 shrink-0 transition ${on ? "drop-shadow-[0_0_12px_rgba(255,217,61,.9)]" : "opacity-60 grayscale"}`} />
                    <span className="flex-1">{q}</span>
                    <Icon name="chev" className={`h-6 w-6 shrink-0 transition ${on ? "rotate-180" : ""}`} />
                  </button>
                </h3>
                <div id={`faq-${i}`} role="region" hidden={!on} className="px-5 pb-6 pl-[4.25rem] text-navy/85">
                  {a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────── 10 · CAKRAWALA (#terhubung + footer) ───────── */
export function Horizon() {
  return (
    <section id="terhubung" data-biome="terhubung" className="relative overflow-hidden px-5 pt-28 sm:px-8">
      <div className="pointer-events-none absolute bottom-24 left-1/2 aspect-square w-[min(90vw,720px)] -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-b from-sun to-coral opacity-90" />
      <div className="relative mx-auto max-w-6xl text-center">
        <p className="font-display text-xs font-extrabold tracking-[.3em] text-navy uppercase">Pos 09 · Cakrawala</p>
        <h2 className="mt-3 font-display text-[clamp(2.8rem,10vw,8rem)] leading-[.85] font-black text-white uppercase" style={{ textShadow: "0 5px 0 #0b1d33" }}>
          Tetap
          <br />
          Terhubung
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-navy">Sambandha berarti ikatan. Perjalananmu boleh jauh, tapi benangnya tidak putus.</p>

        <div className="mt-12 grid gap-6 text-left md:grid-cols-2">
          {[
            { t: "Grup Angkatan", d: "Ruang obrolan siswa dan alumni per angkatan." },
            { t: "Grup Alumni SMANCA", d: "Kabar, lowongan, dan cerita dari para navigator." },
          ].map((g) => (
            <div key={g.t} className="paper chunky rounded-[2rem] border-4 border-navy p-6 text-navy">
              <h3 className="font-display text-xl font-black uppercase">{g.t}</h3>
              <p className="mt-2">{g.d}</p>
              <p className="mt-3 rounded-xl border-2 border-dashed border-navy/40 p-3 text-sm">
                🔒 Demi keamanan, tautan grup tidak dipasang publik. Minta tautan undangan kepada pengurus Sambandha atau OSIS SMANCA.
              </p>
            </div>
          ))}
        </div>

        <div className="paper chunky mt-6 rounded-[2rem] border-4 border-navy p-6 text-left text-navy sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <h3 className="font-display text-xl font-black uppercase">Kamu alumni SMANCA?</h3>
            <p className="mt-1">Jadilah navigator berikutnya — hubungi pengurus Sambandha agar profilmu ditambahkan ke direktori.</p>
          </div>
          <ExtLink href={SHARE_URL} className="mt-4 inline-flex shrink-0 items-center gap-2 rounded-full border-4 border-navy bg-[#25d366] px-5 py-3 font-bold sm:mt-0">
            <Icon name="share" /> Bagikan via WhatsApp
          </ExtLink>
        </div>

        <p className="mt-20 font-hand text-5xl text-navy sm:text-6xl">to be continued…</p>
        <a href="#top" className="mt-3 inline-block font-display text-sm font-black tracking-widest text-navy uppercase hover:text-white">
          petualanganmu baru dimulai →
        </a>
      </div>

      <footer className="relative mx-auto mt-16 flex max-w-7xl flex-col items-center gap-3 border-t-2 border-navy/30 py-8 text-center text-sm text-navy sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-bold">© 2026 Sambandha SMANCA · vBeta</p>
          <p className="text-navy/80">Proyek Expo Kampus SMA Negeri 1 Candimulyo, Magelang · Data direktori dari alumni yang berpartisipasi.</p>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs">
          <CompassRose className="h-8 w-8 text-navy" /> -7.4974° S, 110.2573° E
        </div>
      </footer>
    </section>
  );
}
