import logo from "@/assets/logo.png";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-3 group">
      <img
        src={logo}
        alt="Bulak Trans"
        width={48}
        height={48}
        className="h-11 w-11 object-contain transition-transform group-hover:scale-110"
      />
      <div className="leading-tight">
        <div className="font-extrabold tracking-tight text-base sm:text-lg">
          BULAK <span className="gradient-text">TRANS</span>
        </div>
        {!compact && (
          <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
            Lojistik & Taşımacılık
          </div>
        )}
      </div>
    </a>
  );
}
