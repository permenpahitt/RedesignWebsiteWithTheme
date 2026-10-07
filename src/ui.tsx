import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

export function rich(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? (
      <strong key={i} className="font-semibold">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}

export function useReduced() {
  const [r, setR] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setR(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, []);
  return r;
}

// Satu listener scroll bersama, di-throttle via rAF.
const subs = new Set<() => void>();
let ticking = false;
if (typeof window !== "undefined") {
  const fire = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      subs.forEach((f) => f());
    });
  };
  window.addEventListener("scroll", fire, { passive: true });
  window.addEventListener("resize", fire);
}
export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const f = () => setY(window.scrollY);
    subs.add(f);
    f();
    return () => {
      subs.delete(f);
    };
  }, []);
  return y;
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setIn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setIn(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Hand({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`font-hand text-2xl leading-none ${className}`}>{children}</span>;
}

// parallax ringan per elemen: transform ditulis langsung lewat rAF, tanpa re-render
export function useParallax<T extends HTMLElement>(speed: number) {
  const ref = useRef<T>(null);
  const reduced = useReduced();
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    let raf = 0;
    const run = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const off = r.top + r.height / 2 - window.innerHeight / 2;
      if (Math.abs(off) < window.innerHeight * 1.5) el.style.transform = `translate3d(0, ${(off * speed).toFixed(1)}px, 0)`;
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(run); };
    run();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, [speed, reduced]);
  return ref;
}

export function Parallax({ speed = 0.15, className = "", children }: { speed?: number; className?: string; children: ReactNode }) {
  const ref = useParallax<HTMLDivElement>(speed);
  return <div ref={ref} className={`will-change-transform ${className}`}>{children}</div>;
}

export function BiomeTitle({ kicker, title, sub, light = true }: { kicker: string; title: ReactNode; sub?: ReactNode; light?: boolean }) {
  const ref = useParallax<HTMLDivElement>(0.14);
  return (
    <div ref={ref} className="relative z-10 will-change-transform">
      <p className={`mb-3 flex items-center gap-3 font-display text-xs font-extrabold tracking-[.25em] uppercase ${light ? "text-sun" : "text-navy"}`}>
        <span className="h-[3px] w-10 rounded bg-coral" />
        {kicker}
      </p>
      <h2
        className={`relative z-10 font-display text-[clamp(2rem,7vw,6rem)] break-words leading-[.86] font-black tracking-tight uppercase ${light ? "text-white" : "text-navy"}`}
        style={light ? { textShadow: "0 4px 0 #0b1d33" } : undefined}
      >
        {title}
      </h2>
      {sub && <div className={`mt-5 max-w-2xl text-lg ${light ? "text-white/85" : "text-navy/80"}`}>{sub}</div>}
    </div>
  );
}

type IconName = "search" | "copy" | "x" | "share" | "arrow" | "map" | "medal" | "scope" | "pack" | "lantern" | "chev" | "passport" | "mail";
const PATHS: Record<IconName, ReactNode> = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m16 16 5 5" />
    </>
  ),
  copy: (
    <>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h8" />
    </>
  ),
  x: <path d="M6 6l12 12M18 6 6 18" />,
  share: (
    <>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  map: <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15" />,
  medal: (
    <>
      <circle cx="12" cy="15" r="6" />
      <path d="M8 3l4 6 4-6M12 12.5v5M10 15h4" />
    </>
  ),
  scope: <path d="M3 14l12-6 2 4-12 6zM15 8l4-2 2 4-4 2M9 17l-2 5M11 16l3 6" />,
  pack: (
    <>
      <path d="M6 8a6 6 0 0 1 12 0v12H6z" />
      <path d="M9 4V3h6v1M9 13h6v4H9z" />
    </>
  ),
  lantern: <path d="M12 2v2M8 6h8l1 2v10l-1 2H8l-1-2V8zM12 10c2 2 2 4 0 6-2-2-2-4 0-6" />,
  chev: <path d="m6 9 6 6 6-6" />,
  passport: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <circle cx="12" cy="10" r="3.5" />
      <path d="M9 17h6" />
    </>
  ),
  mail: <path d="M3 6h18v12H3zM3 6l9 7 9-7" />,
};
export function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}

export function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label={title}>
      <button className="absolute inset-0 bg-navy/70 backdrop-blur-sm" onClick={onClose} aria-label="Tutup" />
      <div className="paper chunky relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl border-4 border-navy p-6 sm:p-9" style={{ animation: "rise .35s ease" }}>
        <span className="washi absolute -top-3 left-10 h-6 w-24 -rotate-6" />
        <button onClick={onClose} className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full border-3 border-navy bg-white text-navy hover:bg-coral hover:text-white" aria-label="Tutup">
          <Icon name="x" />
        </button>
        {children}
      </div>
    </div>
  );
}

const ToastCtx = createContext<(m: string) => void>(() => {});
export const useToast = () => useContext(ToastCtx);
export function ToastProvider({ children }: { children: ReactNode }) {
  const [msg, setMsg] = useState<string | null>(null);
  const t = useRef<number | undefined>(undefined);
  const show = (m: string) => {
    setMsg(m);
    clearTimeout(t.current);
    t.current = window.setTimeout(() => setMsg(null), 2400);
  };
  return (
    <ToastCtx.Provider value={show}>
      {children}
      <div aria-live="polite" role="status" className="pointer-events-none fixed top-20 left-1/2 z-[95] -translate-x-1/2">
        {msg && (
          <div className="paper chunky-soft rounded-full border-3 border-navy px-5 py-2.5 font-semibold text-navy" style={{ animation: "rise .25s ease" }}>
            🧭 {msg}
          </div>
        )}
      </div>
    </ToastCtx.Provider>
  );
}

export function ExtLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export const linkPill =
  "inline-flex items-center gap-1 rounded-full border-2 border-navy bg-white px-3 py-1 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-sun";

export function useCountdown(target: string) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60000);
    return () => clearInterval(id);
  }, []);
  const remaining = new Date(target).getTime() - now;
  if (remaining <= 0) return { done: true, long: "Menunggu jadwal resmi", short: "Menunggu jadwal", days: 0, hours: 0, minutes: 0 };
  const totalMinutes = Math.floor(remaining / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  return { done: false, long: `H-${days} · ${hours}j ${minutes}m`, short: `H-${Math.ceil(remaining / 86400000)}`, days, hours, minutes };
}
