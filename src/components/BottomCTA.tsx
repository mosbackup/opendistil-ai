const BottomCTA = () => {
  return (
    <section id="cta" className="relative py-24 gradient-section overflow-hidden">
      <div className="absolute inset-0 gradient-red-glow opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gradient-white">
            Build Your Own<br />Frontier Lab
          </h2>
          <a
            href="https://forms.office.com/r/t8FQe9SziR"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold text-base hover:bg-primary/90 transition-all duration-200 glow-red"
          >
            Start Distilling
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
