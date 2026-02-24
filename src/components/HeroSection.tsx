const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero star-field overflow-hidden">
      {/* Red glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] gradient-red-glow opacity-60" />

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="text-gradient-white">Distillation</span>
            <br />
            <span className="text-gradient-red">at Scale</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Build frontier-level AI models without frontier-level budget, with our Distillation-as-a-Service infrastructure.
          </p>

          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a
              href="https://forms.office.com/r/t8FQe9SziR"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-primary/90 transition-all duration-200 glow-red"
            >
              Distil Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};


export default HeroSection;
