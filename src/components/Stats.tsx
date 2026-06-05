import { useCountUp, useReveal } from "@/hooks/use-reveal";

const STATS = [
  { value: 500, suffix: "+", label: "Sefer" },
  { value: 9, suffix: "", label: "Ülke" },
  { value: 15, suffix: "+", label: "Yıl Deneyim" },
  { value: 99, suffix: "%", label: "Müşteri Memnuniyeti" },
];

function Stat({ value, suffix, label }: (typeof STATS)[number]) {
  const ref = useCountUp(value);
  return (
    <div className="text-center px-4 py-6">
      <div className="text-4xl sm:text-5xl font-extrabold gradient-text tabular-nums">
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground font-semibold">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  const ref = useReveal();
  return (
    <section className="relative -mt-12 z-10 px-4 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className="reveal max-w-6xl mx-auto glass-card rounded-3xl shadow-[var(--shadow-card)] grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border/60"
      >
        {STATS.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
