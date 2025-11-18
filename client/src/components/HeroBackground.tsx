export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/3 -top-1/4 h-[42rem] w-[42rem] rounded-full bg-gradient-to-br from-white/80 via-amber-200/60 to-amber-500/40 blur-3xl opacity-75 animate-[heroBlobA_18s_ease-in-out_infinite]" />
        <div className="absolute -right-1/4 top-1/3 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-amber-200/50 via-amber-400/40 to-amber-700/25 blur-3xl opacity-65 animate-[heroBlobB_22s_ease-in-out_infinite]" />
        <div className="absolute left-1/4 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-gradient-to-br from-white/25 via-amber-200/20 to-transparent blur-3xl opacity-55 animate-[heroBlobC_26s_ease-in-out_infinite]" />
      </div>
      
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)] mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.15)_0,rgba(255,255,255,0.15)_1px,transparent_1px,transparent_2px)]" />
    </div>
  );
}
