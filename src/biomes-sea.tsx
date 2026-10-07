import { useState, type ReactNode } from "react";
import { AnchorLogo, Cairn, Cloud, Coral, Fish, Gull, Lighthouse, Pin, Ship, Signpost, WaveBand, Squiggle } from "./art";
import { ROUTES, ROUTES_INTRO, SCHEDULE, SCHOOL, SHARE_URL, COUNTDOWN_TARGET, KEDINASAN, ALT_CARDS, ALT_INTRO, ALT_WARNING, WORK, WORK_INTRO, WORK_NOTE, ALUMNI, CAMPUSES, type Route } from "./data";
import { BiomeTitle, ExtLink, Hand, Icon, Modal, Reveal, linkPill, rich, useCountdown, useReduced, useScrollY } from "./ui";

export function HiddenChest({ id, onFind, found, className = "" }: { id: number; onFind: (id: number) => void; found: boolean; className?: string }) {
  return (
    <button
      onClick={() => onFind(id)}
      aria-label={found ? "Peti tersembunyi sudah ditemukan" : "Peti tersembunyi"}
      title={found ? "Sudah ditemukan" : "Hmm… apa ini?"}
      className={`group absolute z-20 h-9 w-11 transition hover:scale-125 ${found ? "opacity-40" : "opacity-80"} ${className}`}
    >
      <svg viewBox="0 0 44 36" className="h-full w-full">
        <rect x="4" y="16" width="36" height="18" rx="3" fill="#9a5a26" stroke="#0b1d33" strokeWidth="3" />
        <path d={found ? "M6 16 L4 4 Q22 -2 40 4 L38 16" : "M4 18 Q4 6 22 6 Q40 6 40 18Z"} fill="#c27a3e" stroke="#0b1d33" strokeWidth="3" strokeLinejoin="round" />
        <rect x="19" y="18" width="6" height="8" rx="1.5" fill="#ffd93d" stroke="#0b1d33" strokeWidth="2" />
      </svg>
    </button>
  );
}

/* ───────── 1 · PELABUHAN ASAL ───────── */
export function Harbor() {
  const y = useScrollY();
  const reduced = useReduced();
  const k = reduced ? 0 : 1;
  return (
    <section id="pelabuhan" data-biome="pelabuhan" className="relative flex min-h-[100svh] flex-col overflow-hidden pt-28">
      {/* peta kusut samar */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[.08]" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path d="M0 30 L30 25 L55 34 L100 28 M0 64 L40 58 L70 66 L100 60 M33 0 L28 40 L36 100 M70 0 L74 50 L66 100" stroke="#0b1d33" strokeWidth=".3" fill="none" />
      </svg>
      <div className="absolute top-24 left-[6%] w-44 opacity-90" style={{ transform: `translateY(${y * 0.25 * k}px)` }}>
        <Cloud />
      </div>
      <div className="absolute top-40 right-[10%] w-64 opacity-80" style={{ transform: `translateY(${y * 0.15 * k}px)` }}>
        <Cloud />
      </div>
      <div className="absolute top-[58%] left-[40%] w-32 opacity-70" style={{ transform: `translateY(${y * 0.3 * k}px)` }}>
        <Cloud />
      </div>
      {!reduced && (
        <div className="pointer-events-none absolute top-32 left-0 w-full text-navy/70" style={{ animation: "drift 38s linear infinite" }}>
          <Gull className="w-10" />
          <Gull className="mt-2 ml-14 w-7" />
        </div>
      )}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <p className="mb-4 font-display text-xs font-extrabold tracking-[.3em] text-navy uppercase">Expo Kampus · SMA Negeri 1 Candimulyo, Magelang</p>
        <h1
          className="relative font-display text-[clamp(3rem,11vw,12rem)] leading-[.8] font-black tracking-[-.04em] text-white"
          style={{ textShadow: "0 6px 0 #0b1d33" }}
        >
          SAMBANDHA
        </h1>
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-display text-[clamp(1.4rem,3vw,2.2rem)] leading-tight font-extrabold text-navy">Dari SMANCA, menuju mana saja.</p>
            <p className="mt-3 text-navy/80">
              Kenali jalur masuk perguruan tinggi dan temukan kakak kelas yang bisa diajak bertukar cerita tentang kampus, jurusan, dan prosesnya.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#misi" className="chunky inline-flex items-center gap-2 rounded-full border-4 border-navy bg-coral px-7 py-3.5 font-display text-sm font-black tracking-wider text-white uppercase transition hover:-translate-y-1">
                Mulai Berlayar <Icon name="arrow" />
              </a>
              <a href="#navigator" className="inline-flex items-center gap-2 rounded-full border-4 border-navy bg-white px-6 py-3 font-bold text-navy transition hover:-translate-y-1 hover:bg-sun">
                Cari alumni
              </a>
              <ExtLink href={SHARE_URL} className="inline-flex items-center gap-2 rounded-full border-4 border-navy bg-[#25d366] px-5 py-3 font-bold text-navy transition hover:-translate-y-1">
                <Icon name="share" /> Bagikan via WhatsApp
              </ExtLink>
            </div>
          </div>
          <Hand className="hidden rotate-[-6deg] text-3xl text-navy md:block">
            perjalanan dimulai di sini <Squiggle className="inline w-16 align-middle" />
          </Hand>
        </div>
      </div>

      {/* adegan laut */}
      <div className="relative mt-auto h-[44vh] min-h-[280px] w-full">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 300" preserveAspectRatio="none" aria-hidden="true">
          <path d="M270 200 C 450 130 620 190 840 110" fill="none" stroke="#fff" strokeWidth="4" className="dash-route" style={{ strokeDasharray: "2 14" }} />
        </svg>
        <WaveBand color="rgba(46,155,214,.75)" className="bottom-[12%] h-16" />
        <div className="absolute bottom-[5%] left-[5%] w-[min(36vw,290px)]">
          <div className={reduced ? "" : "anim-sway"}>
            <Ship className="w-full" />
          </div>
        </div>
        <div className="absolute right-[5%] bottom-[2%] w-[min(22vw,190px)]">
          <div className="anim-beam pointer-events-none absolute top-[9%] left-1/2 h-24 w-[60vw] max-w-[700px] origin-left -translate-y-1/2 bg-gradient-to-r from-sun/70 to-transparent [clip-path:polygon(0_45%,100%_0,100%_100%,0_55%)]" />
          <Lighthouse className="relative w-full" />
        </div>
        {[
          { l: "48%", b: "62%", s: 0.4, c: "#ffd93d" },
          { l: "64%", b: "78%", s: 0.55, c: "#ff6b8a" },
          { l: "30%", b: "80%", s: 0.3, c: "#ffd93d" },
        ].map((p, i) => (
          <div key={i} className="absolute w-9" style={{ left: p.l, bottom: p.b, transform: `translateY(${-y * p.s * k}px)` }}>
            <Pin color={p.c} className="anim-bob w-full" />
          </div>
        ))}
        <WaveBand color="rgba(27,79,156,.85)" className="bottom-[3%] h-16 [animation-duration:20s!important]" />
        <WaveBand color="#1b4f9c" className="-bottom-1 h-14 [animation-direction:reverse!important]" />
      </div>
    </section>
  );
}

/* ───────── 2 · LAUT LEPAS ───────── */
const STAMPS = [
  { big: String(ALUMNI.length), small: "Navigator Alumni", r: -8, c: "text-coral border-coral" },
  { big: String(CAMPUSES.length), small: "Kampus Tujuan", r: 5, c: "text-sun border-sun" },
  { big: "4", small: "Rute Masuk", r: -3, c: "text-white border-white" },
  { big: "1995", small: "Est. · Candimulyo", r: 9, c: "text-coral border-coral" },
];
export function OpenSea() {
  return (
    <section id="laut" data-biome="laut" className="relative overflow-hidden px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <BiomeTitle kicker="Pos 01 · Laut Lepas" title={<>Catatan<br />Ekspedisi</>} />
          <Hand className="rotate-3 text-sun [text-shadow:0_2px_0_#0b1d33]">angka-angka dari log kapal ↓</Hand>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STAMPS.map((s, i) => (
            <Reveal key={s.small} delay={i * 120}>
              <div className="anim-bob" style={{ animationDelay: `${i * 0.7}s` }}>
                <div
                  className={`mx-auto grid aspect-square max-w-[220px] place-items-center rounded-full border-[6px] border-double bg-navy/40 p-2 sm:p-4 text-center opacity-90 ${s.c}`}
                  style={{ transform: `rotate(${s.r}deg)` }}
                >
                  <div className="rounded-full border-2 border-current p-3 sm:p-6">
                    <div className="font-display text-3xl font-black sm:text-6xl">{s.big}</div>
                    <div className="mt-1 font-display text-[10px] font-extrabold tracking-[.2em] uppercase">{s.small}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <div className="paper chunky relative mx-auto grid max-w-5xl overflow-hidden rounded-3xl border-4 border-navy md:grid-cols-[.9fr_1.1fr]">
            <span className="washi absolute -top-2 right-12 h-6 w-28 rotate-6" />
            <div className="relative bg-royal p-8 text-white">
              <p className="font-display text-xs font-extrabold tracking-[.3em] text-sun uppercase">Paspor Pelabuhan Asal</p>
              <h3 className="mt-3 font-display text-3xl font-black uppercase">{SCHOOL.name}</h3>
              <AnchorLogo className="mt-6 w-24" />
              <p className="mt-6 font-mono text-xs text-white/85">-7.4974° S, 110.2573° E</p>
              <p className="absolute right-6 bottom-6 font-display text-[10px] tracking-[.3em] text-white/50 uppercase">P&lt;IDN&lt;SMANCA&lt;&lt;1995</p>
            </div>
            <div className="p-8">
              <dl className="grid grid-cols-2 gap-6">
                {SCHOOL.facts.map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-display text-[11px] font-extrabold tracking-[.2em] text-coral uppercase">{k}</dt>
                    <dd className="mt-1 font-semibold text-navy">{v}</dd>
                  </div>
                ))}
              </dl>
              <ExtLink href={SCHOOL.site} className={`${linkPill} mt-8`}>
                Website resmi ↗
              </ExtLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── 3 · LAUT DALAM (#misi) ───────── */
export function DeepSea({ chest }: { chest: ReactNode }) {
  const reduced = useReduced();
  return (
    <section id="misi" data-biome="misi" className="relative overflow-hidden px-5 py-28 sm:px-8">
      {/* god rays */}
      <div className="pointer-events-none absolute inset-0">
        {[12, 34, 58, 80].map((l, i) => (
          <div
            key={l}
            className="absolute -top-20 h-[130%] w-32 origin-top bg-gradient-to-b from-white/30 via-white/10 to-transparent"
            style={{ left: `${l}%`, transform: `rotate(${i % 2 ? 12 : -10}deg)`, animation: `god ${5 + i}s ease-in-out infinite` }}
          />
        ))}
      </div>
      {!reduced &&
        Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="pointer-events-none absolute bottom-0 rounded-full border-2 border-white/60 bg-white/10"
            style={{ left: `${(i * 13 + 6) % 100}%`, width: 6 + (i % 4) * 5, height: 6 + (i % 4) * 5, animation: `bubble ${9 + (i % 5) * 2}s linear ${i * 0.8}s infinite` }}
          />
        ))}
      {!reduced && (
        <>
          <div className="pointer-events-none absolute top-[30%] left-0 w-20" style={{ animation: "swim 26s linear infinite" }}>
            <Fish />
          </div>
          <div className="pointer-events-none absolute top-[70%] left-0 w-14" style={{ animation: "swim 34s linear 6s infinite" }}>
            <Fish color="#ff6b8a" />
          </div>
        </>
      )}

      <div className="relative mx-auto max-w-7xl">
        <BiomeTitle kicker="Pos 02 · Laut Dalam" title={<>Apa itu<br />Sambandha?</>} />
        <div className="relative mt-14 grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <Reveal>
            <div className="paper chunky relative rounded-[2rem] border-4 border-navy p-8 sm:p-12">
              <span className="washi-blue absolute -top-3 left-12 h-6 w-24 -rotate-3" />
              <p className="font-display text-xs font-extrabold tracking-[.3em] text-royal uppercase">Legenda Peta</p>
              <div className="mt-6 space-y-6 text-lg leading-relaxed text-navy">
                <p>
                  <span className="float-left mr-3 font-display text-5xl leading-[.8] font-black text-coral">S</span>
                  <strong>ambandha</strong> berasal dari bahasa Sanskerta yang berarti <em>ikatan</em>, <em>hubungan</em>, atau <em>koneksi</em>. Itulah benang merah yang kamu lihat menjalar dari atas
                  sampai bawah halaman ini.
                </p>
                <p>
                  Sambandha adalah <strong>expo kampus digital</strong> SMA Negeri 1 Candimulyo: tempat siswa mengenal jalur masuk perguruan tinggi, sekaligus terhubung dengan kakak kelas yang sudah lebih dulu
                  menempuhnya.
                </p>
                <p>
                  Anggap SMANCA sebagai <strong>pelabuhan asal</strong>. Para alumni adalah <strong>navigator</strong> yang sudah berlayar ke kampus-kampus di seluruh Indonesia — dan kamu, pengembara
                  berikutnya.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3 border-t-2 border-dashed border-navy/30 pt-6">
                <Cairn className="w-12" />
                <div>
                  <p className="font-display text-sm font-black text-navy uppercase">Kamu di sini — SMANCA</p>
                  <p className="font-mono text-xs text-navy/75">-7.4974° S, 110.2573° E</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="relative min-h-[260px]">
            <Hand className="absolute top-4 right-0 rotate-6 text-sun [text-shadow:0_2px_0_#0b1d33]">pemandangan bagus →</Hand>
            <div className="absolute top-20 left-6 w-16">
              <Pin color="#ff6b8a" className="anim-bob" />
            </div>
            <Coral className="absolute bottom-0 left-0 w-56" />
            <Coral className="absolute right-0 bottom-0 w-40 -scale-x-100" />
            {chest}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── 4 · KEPULAUAN BERCABANG (rute) ───────── */
const ISLAND_ICON = { snbt: "scope", snbp: "medal", mandiri: "map", pts: "pack" } as const;

const QUIZ: { q: string; opts: { t: string; s: Partial<Record<string, number>> }[] }[] = [
  {
    q: "Bekal terkuat di ranselmu?",
    opts: [
      { t: "Nilai rapor stabil sejak kelas 10", s: { snbp: 2 } },
      { t: "Jago latihan soal & tryout", s: { snbt: 2 } },
      { t: "Belum yakin, mau banyak kesempatan", s: { mandiri: 1, pts: 1 } },
    ],
  },
  {
    q: "Pelabuhan impianmu?",
    opts: [
      { t: "PTN favorit, lintas provinsi", s: { snbt: 2 } },
      { t: "PTN dekat rumah di Jawa Tengah", s: { snbp: 1, mandiri: 1 } },
      { t: "Kampus swasta / program spesifik", s: { pts: 2 } },
    ],
  },
  {
    q: "Gaya berlayarmu?",
    opts: [
      { t: "Ingin kepastian lebih awal, tanpa ujian", s: { snbp: 2 } },
      { t: "Siap bertarung di hari H", s: { snbt: 1, mandiri: 1 } },
      { t: "Fleksibel, siapkan jalur cadangan", s: { mandiri: 1, pts: 1 } },
    ],
  },
];

function Countdown({ big = false }: { big?: boolean }) {
  const c = useCountdown(COUNTDOWN_TARGET);
  if (big)
    return (
      <div className="flex gap-3" role="timer" aria-label={c.done ? c.long : `${c.days} hari, ${c.hours} jam, dan ${c.minutes} menit menuju perkiraan pelaksanaan UTBK-SNBT 2027`}>
        {c.done ? (
          <span className="font-display text-2xl font-black">{c.long}</span>
        ) : (
          [
            [c.days, "hari"],
            [c.hours, "jam"],
            [c.minutes, "menit"],
          ].map(([v, l]) => (
            <div key={l} className="min-w-[4.5rem] rounded-2xl border-4 border-navy bg-white px-3 py-2 text-center text-navy">
              <div className="font-display text-4xl font-black">{v}</div>
              <div className="text-xs font-bold tracking-widest uppercase">{l}</div>
            </div>
          ))
        )}
      </div>
    );
  return (
    <span
      className="inline-flex rounded-full bg-sun px-3 py-1 font-display text-xs font-black text-navy"
      role="timer"
      title="Estimasi berdasarkan pola 2026; jadwal resmi 2027 belum diumumkan."
    >
      <span className="hidden sm:inline">{c.long}</span>
      <span className="sm:hidden">{c.short}</span>
    </span>
  );
}

function RouteDetail({ r }: { r: Route }) {
  return (
    <div className="text-navy">
      <p className="font-display text-xs font-extrabold tracking-[.3em] text-coral uppercase">
        {r.num} · {r.island}
      </p>
      <h3 className="mt-2 pr-12 font-display text-4xl font-black uppercase">{r.title}</h3>
      {r.countdown && (
        <div className="mt-4">
          <Countdown />
          <p className="mt-2 text-xs text-navy/75">Estimasi dari pola 2026 · jadwal resmi 2027 belum diumumkan.</p>
        </div>
      )}
      <p className="mt-5 text-lg">{rich(r.intro)}</p>
      {r.details.length > 0 && (
        <ul className="mt-5 space-y-3">
          {r.details.map((d) => (
            <li key={d} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-coral" />
              <span>{rich(d)}</span>
            </li>
          ))}
        </ul>
      )}
      {r.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {r.links.map((l) => (
            <ExtLink key={l.href + l.label} href={l.href} className={linkPill}>
              {l.label}
            </ExtLink>
          ))}
        </div>
      )}
      {r.extra && (
        <div className="mt-8 rounded-2xl border-4 border-dashed border-royal bg-white/60 p-5">
          <h4 className="font-display text-xl font-black uppercase">{r.extra.title}</h4>
          <p className="mt-2">{rich(r.extra.body)}</p>
          <p className="mt-3 text-sm font-bold">Latihan TKA:</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {r.extra.links.map((l) => (
              <ExtLink key={l.href} href={l.href} className={linkPill}>
                {l.label}
              </ExtLink>
            ))}
          </div>
          <p className="mt-3 text-sm text-navy/70">{r.extra.note}</p>
        </div>
      )}
      {r.campuses && (
        <div className="mt-8">
          <p className="font-display text-sm font-black uppercase">Pendaftaran resmi:</p>
          <div className="mt-3 space-y-3">
            {r.campuses.map((c) => (
              <div key={c.name} className="flex flex-col gap-2 rounded-2xl border-2 border-navy bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <strong>{c.name}</strong>
                  <p className="text-sm text-navy/75">{c.desc}</p>
                </div>
                <div className="flex shrink-0 gap-2">
                  {c.links.map((l) => (
                    <ExtLink key={l.href} href={l.href} className={linkPill}>
                      {l.label}
                    </ExtLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const LAND_TABS = ["Kedinasan", "TNI", "Polri", "Non-PTN"];

export function Islands() {
  const reduced = useReduced();
  const [open, setOpen] = useState<Route | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [tab, setTab] = useState(0);
  const done = answers.length === QUIZ.length;
  let pick: string | null = null;
  if (done) {
    const score: Record<string, number> = { snbt: 0, snbp: 0, mandiri: 0, pts: 0 };
    answers.forEach((a, qi) => Object.entries(QUIZ[qi].opts[a].s).forEach(([k, v]) => (score[k] += v ?? 0)));
    pick = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
  }
  const qi = answers.length;

  return (
    <section id="rute" data-biome="rute" className="relative overflow-hidden px-5 py-28 sm:px-8">
      <span id="jalur" />
      <span id="jalur-masuk" />
      {!reduced &&
        Array.from({ length: 15 }).map((_, i) => (
          <span
            key={i}
            className="pointer-events-none absolute top-0 h-10 w-[2px] rounded bg-white/35"
            style={{ left: `${(i * 37 + 5) % 100}%`, animation: `rain ${1.1 + (i % 5) * 0.2}s linear ${(i % 10) * 0.3}s infinite` }}
          />
        ))}
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <BiomeTitle kicker="Pos 03 · Kepulauan Bercabang" title={<>Pilih<br />Jalurmu</>} sub={<>Empat pintu, banyak kemungkinan. {ROUTES_INTRO}</>} />
          <div className="relative mx-auto w-56 sm:w-64">
            <Signpost className="w-full drop-shadow-[0_12px_0_rgba(11,29,51,.35)]" />
            <Hand className="mt-2 block -rotate-6 text-sun [text-shadow:0_2px_0_#0b1d33] sm:absolute sm:-bottom-2 sm:-left-24 sm:mt-0">SNBT paling ramai!</Hand>
          </div>
        </div>

        {/* kuis */}
        <Reveal className="mt-16">
          <div className="paper chunky relative rounded-[2rem] border-4 border-navy p-6 sm:p-10">
            <span className="washi absolute -top-3 right-16 h-6 w-28 rotate-3" />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-display text-xs font-extrabold tracking-[.3em] text-coral uppercase">Kuis Petualangan · Pilih bekalmu</p>
              <div className="flex gap-1.5">
                {QUIZ.map((_, i) => (
                  <span key={i} className={`h-2.5 w-8 rounded-full border-2 border-navy ${i < answers.length ? "bg-coral" : "bg-white"}`} />
                ))}
              </div>
            </div>
            {!done ? (
              <div className="mt-5">
                <h3 className="font-display text-2xl font-black text-navy sm:text-3xl">{QUIZ[qi].q}</h3>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {QUIZ[qi].opts.map((o, oi) => (
                    <button
                      key={o.t}
                      onClick={() => setAnswers([...answers, oi])}
                      className="rounded-2xl border-4 border-navy bg-white p-4 text-left font-semibold text-navy transition hover:-translate-y-1 hover:bg-sun"
                    >
                      <span className="mr-2 font-display font-black text-coral">{"ABC"[oi]}.</span>
                      {o.t}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-5 flex flex-wrap items-center gap-5">
                <p className="font-display text-2xl font-black text-navy sm:text-3xl">
                  Kompasmu menunjuk ke <span className="text-coral">{ROUTES.find((r) => r.id === pick)!.island}</span> — {ROUTES.find((r) => r.id === pick)!.title}.
                </p>
                <button onClick={() => setAnswers([])} className={linkPill}>
                  Ulangi kuis
                </button>
                <p className="w-full text-sm text-navy/70">Ini kompas kasar, bukan vonis — tetap cek syarat dan ketentuan tiap jalur di bawah.</p>
              </div>
            )}
          </div>
        </Reveal>

        {/* pulau */}
        <div className="relative mt-14">
          <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 50 C 120 0 220 100 375 50 S 620 0 750 50 S 900 100 1000 50" stroke="#fff" strokeOpacity=".5" strokeWidth="3" fill="none" className="dash-route" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ROUTES.map((r, i) => {
              const lit = pick === r.id;
              return (
                <Reveal key={r.id} delay={i * 100}>
                  <article
                    className={`relative mt-10 flex h-full flex-col rounded-[2rem] border-4 bg-navy p-6 pt-14 text-white transition ${lit ? "border-sun shadow-[0_0_0_6px_rgba(255,217,61,.35),0_0_60px_rgba(255,217,61,.6)]" : "border-navy chunky"}`}
                  >
                    <div className="absolute -top-10 left-1/2 grid h-20 w-28 -translate-x-1/2 place-items-center">
                      <svg viewBox="0 0 120 80" className="absolute inset-0 h-full w-full">
                        <ellipse cx="60" cy="58" rx="56" ry="18" fill="#2e9bd6" stroke="#0b1d33" strokeWidth="4" />
                        <path d="M14 56 Q30 18 60 16 Q92 18 106 56Z" fill="#f5e6c8" stroke="#0b1d33" strokeWidth="4" />
                        <path d="M40 30 Q60 6 80 30" fill="#4f9c5a" stroke="#0b1d33" strokeWidth="4" />
                      </svg>
                      <span className="relative mt-2 text-navy">
                        <Icon name={ISLAND_ICON[r.id as keyof typeof ISLAND_ICON]} className="h-7 w-7" />
                      </span>
                    </div>
                    {lit && (
                      <span className="absolute top-3 -right-3 rotate-12 rounded-md border-2 border-sun px-2 py-0.5 font-display text-[10px] font-black tracking-widest text-sun uppercase" style={{ animation: "stamp-in .5s ease" }}>
                        Rekomendasi
                      </span>
                    )}
                    <div className="font-display text-7xl leading-none font-black text-white/95">{r.num}</div>
                    <p className="mt-2 font-hand text-2xl text-sun [text-shadow:0_2px_0_#0b1d33]">{r.island}</p>
                    <h3 className="font-display text-xl font-black uppercase">{r.title}</h3>
                    <div className="my-4 h-1 w-14 rounded bg-coral" />
                    <p className="text-sm text-white/90">{r.intro}</p>
                    {r.countdown && (
                      <div className="mt-3">
                        <Countdown />
                      </div>
                    )}
                    <button
                      onClick={() => setOpen(r)}
                      className="mt-auto self-start rounded-full border-2 border-coral px-5 py-2 font-display text-xs font-black tracking-widest text-coral uppercase transition hover:bg-coral hover:text-white"
                      style={{ marginTop: "1.25rem" }}
                    >
                      Pelajari
                    </button>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* log kapal: jadwal */}
        <Reveal className="mt-24">
          <div id="jadwal-snpmb" className="paper chunky relative scroll-mt-24 overflow-hidden rounded-[2rem] border-4 border-navy">
            <div className="grid gap-6 bg-coral p-6 text-navy sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="font-display text-xs font-extrabold tracking-[.3em] uppercase">Log Kapal · Jadwal penting SNPMB</p>
                <h3 className="mt-2 font-display text-4xl font-black uppercase sm:text-5xl">Jejak siklus 2026.</h3>
                <p className="mt-2 max-w-md text-sm">Hitung mundur menuju perkiraan UTBK-SNBT 2027 · estimasi dari pola 2026, jadwal resmi 2027 belum diumumkan.</p>
              </div>
              <Countdown big />
            </div>
            <div className="p-6 sm:p-10">
              <p className="text-navy">{rich(SCHEDULE.note)}</p>
              <div className="mt-6 grid gap-8 md:grid-cols-2">
                {SCHEDULE.cols.map((c) => (
                  <div key={c.title}>
                    <h4 className="font-display text-lg font-black text-royal uppercase">{c.title}</h4>
                    <ol className="relative mt-4 space-y-4 border-l-4 border-dotted border-navy/40 pl-6">
                      {c.items.map(([t, d]) => (
                        <li key={t} className="relative">
                          <span className="absolute top-1 -left-[34px] h-4 w-4 rounded-full border-3 border-navy bg-sun" />
                          <strong className="block text-navy">{t}</strong>
                          <time className="text-sm text-navy/70">{d}</time>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
              <ExtLink href={SCHEDULE.link.href} className={`${linkPill} mt-8`}>
                {SCHEDULE.link.label}
              </ExtLink>
            </div>
          </div>
        </Reveal>

        {/* jalur darat */}
        <Reveal className="mt-24">
          <div id="jalur-alternatif" className="scroll-mt-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-display text-xs font-extrabold tracking-[.3em] text-sun uppercase">Jalur darat · Alternatif jalur PTN</p>
                <h3 className="mt-2 font-display text-[clamp(2rem,5vw,3.6rem)] leading-none font-black text-white uppercase" style={{ textShadow: "0 4px 0 #0b1d33" }}>
                  Kedinasan & jalur non-PTN.
                </h3>
                <p className="mt-3 max-w-2xl text-white/85">{ALT_INTRO}</p>
              </div>
              <Hand className="-rotate-3 text-sun [text-shadow:0_2px_0_#0b1d33]">jangan lewat sini tanpa persiapan!</Hand>
            </div>
            <div className="mt-8 flex flex-wrap gap-2" role="tablist">
              {LAND_TABS.map((t, i) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={tab === i}
                  onClick={() => setTab(i)}
                  className={`rounded-full border-3 border-navy px-4 py-2 font-display text-xs font-black tracking-wider uppercase transition ${tab === i ? "bg-sun text-navy" : "bg-white/90 text-navy hover:bg-white"}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="paper chunky mt-5 rounded-[2rem] border-4 border-navy p-6 text-navy sm:p-10" role="tabpanel">
              {tab === 0 && (
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <p className="font-display text-xs font-extrabold tracking-[.3em] text-coral uppercase">{KEDINASAN.label}</p>
                    <h4 className="mt-1 font-display text-3xl font-black uppercase">{KEDINASAN.title}</h4>
                    <p className="mt-3">{KEDINASAN.body}</p>
                    <p className="mt-4 rounded-2xl border-2 border-navy bg-sun/60 p-4 text-sm">{rich(KEDINASAN.formation)}</p>
                    <ExtLink href={KEDINASAN.portal.href} className={`${linkPill} mt-4`}>
                      {KEDINASAN.portal.label}
                    </ExtLink>
                    <p className="mt-4 text-sm">{rich(KEDINASAN.deadline)}</p>
                    <ul className="mt-5 space-y-3 text-sm">
                      {KEDINASAN.details.map((d) => (
                        <li key={d}>{rich(d)}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold">Delapan kelompok sekolah utama</p>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {KEDINASAN.schools.map((s) => (
                        <li key={s.name} className="rounded-xl border-2 border-navy/70 bg-white p-3 text-sm">
                          <ExtLink href={s.href} className="font-bold text-royal underline-offset-2 hover:underline">
                            {s.name}
                          </ExtLink>
                          <br />
                          {s.sub}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 font-bold">Latihan SKD</p>
                    <div className="mt-2 space-y-2 text-sm">
                      {KEDINASAN.skd.map((s) => (
                        <p key={s.label}>
                          <ExtLink href={s.href} className="font-bold text-royal hover:underline">
                            {s.label}
                          </ExtLink>{" "}
                          — {s.sub}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {tab >= 1 && tab <= 3 && (
                <div>
                  {(() => {
                    const c = ALT_CARDS[tab - 1];
                    return (
                      <>
                        <p className="font-display text-xs font-extrabold tracking-[.3em] text-coral uppercase">{c.label}</p>
                        <h4 className="mt-1 font-display text-3xl font-black uppercase">{c.title}</h4>
                        {c.body && <p className="mt-3">{c.body}</p>}
                        <ul className="mt-4 space-y-3">
                          {c.details.map((d) => (
                            <li key={d} className="flex gap-3">
                              <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-coral" />
                              <span>{rich(d)}</span>
                            </li>
                          ))}
                        </ul>
                        {c.links.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {tab === 1 && <strong className="w-full">Portal Rekrutmen TNI</strong>}
                            {c.links.map((l) => (
                              <ExtLink key={l.href} href={l.href} className={linkPill}>
                                {l.label}
                              </ExtLink>
                            ))}
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>
              )}
              <p className="mt-8 rounded-2xl border-l-8 border-coral bg-white p-4 text-sm">{rich(ALT_WARNING)}</p>
            </div>
          </div>
        </Reveal>

        {/* opsi kerja */}
        <div id="opsi-kerja" className="mt-24 scroll-mt-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-display text-xs font-extrabold tracking-[.3em] text-sun uppercase">Jalur darat · Langsung berkarya</p>
              <h3 className="mt-2 font-display text-[clamp(2rem,5vw,3.6rem)] leading-none font-black text-white uppercase" style={{ textShadow: "0 4px 0 #0b1d33" }}>
                Opsi Kerja
              </h3>
              <p className="mt-3 max-w-2xl text-white/90">{WORK_INTRO}</p>
            </div>
            <Hand className="rotate-2 text-sun [text-shadow:0_2px_0_#0b1d33]">kerja juga petualangan ✦</Hand>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {WORK.map((w, i) => (
              <Reveal key={w.title} delay={i * 80} className="h-full">
                <article className="ticket paper relative grid h-full grid-cols-[1fr_auto] text-navy">
                  <div className="p-6 sm:p-8">
                    <p className="font-display text-[11px] font-extrabold tracking-[.25em] text-coral uppercase">Opsi 0{i + 1}</p>
                    <h4 className="mt-1 font-display text-2xl font-black uppercase sm:text-3xl">{w.title}</h4>
                    <p className="mt-2">{w.body}</p>
                    <p className="mt-4 font-display text-xs font-black tracking-[.2em] text-royal uppercase">Tips</p>
                    <ul className="mt-2 space-y-2 text-sm">
                      {w.list.map((l) => (
                        <li key={l} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-royal" />
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                    {w.links.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {w.links.map((l) => (
                          <ExtLink key={l.href} href={l.href} className={linkPill}>
                            {l.label} ↗
                          </ExtLink>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex w-16 flex-col items-center justify-between border-l-4 border-dashed border-navy/30 py-6">
                    <span className="font-display text-xs font-black text-royal [writing-mode:vertical-rl]">WORK PASS · No.0{i + 1}</span>
                    <span className="barcode h-16 w-6" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/90">
            {WORK_NOTE}{" "}
            <a href="#navigator" className="font-bold text-sun underline">
              Ke Desa Pemandu →
            </a>
          </p>
        </div>
      </div>

      <Modal open={!!open} onClose={() => setOpen(null)} title={open?.title ?? ""}>
        {open && <RouteDetail r={open} />}
      </Modal>
    </section>
  );
}
