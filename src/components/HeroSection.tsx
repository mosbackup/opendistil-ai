const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero star-field overflow-hidden">
      {/* Red glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] gradient-red-glow opacity-60" />

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-8 text-xs text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            YC-Backed · San Francisco
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <span className="text-gradient-white">Distillation</span>
            <br />
            <span className="text-gradient-red">at Scale</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            Build frontier-level AI models without frontier-level compute.
          </p>
          <p className="text-sm text-muted-foreground/70 max-w-xl mx-auto mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
            Turn the world's most powerful models into efficient production systems.
          </p>

          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-primary/90 transition-all duration-200 glow-red"
            >
              Distill Your Model
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          {/* Pipeline animation */}
          <div className="mt-20 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
            <DistillationPipeline />
          </div>
        </div>
      </div>
    </section>
  );
};

const DistillationPipeline = () => {
  const nodes = [
    { label: "Teacher Model", sub: "GPT · Claude · Gemini" },
    { label: "Query Engine", sub: "Structured Prompts" },
    { label: "Dataset", sub: "Training Signals" },
    { label: "Student Model", sub: "Optimized Architecture" },
    { label: "Production API", sub: "Deploy & Serve" },
  ];

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0">
        {nodes.map((node, i) => (
          <div key={i} className="flex items-center">
            <div className="bento-card text-center min-w-[140px] md:min-w-[160px] py-4 px-3">
              <p className="text-xs font-semibold text-foreground mb-1">{node.label}</p>
              <p className="text-[10px] text-muted-foreground">{node.sub}</p>
            </div>
            {i < nodes.length - 1 && (
              <div className="hidden md:flex items-center mx-1">
                <div className="w-8 h-[2px] pipeline-line relative overflow-hidden">
                  <div className="absolute inset-0 animate-flow-right bg-primary/60" />
                </div>
                <svg width="8" height="8" viewBox="0 0 8 8" className="text-primary/60"><path d="M1 1l3 3-3 3" stroke="currentColor" strokeWidth="1" fill="none"/></svg>
              </div>
            )}
            {i < nodes.length - 1 && (
              <div className="md:hidden flex flex-col items-center my-1">
                <div className="w-[2px] h-4 bg-primary/30" />
                <svg width="8" height="8" viewBox="0 0 8 8" className="text-primary/40 rotate-90"><path d="M1 1l3 3-3 3" stroke="currentColor" strokeWidth="1" fill="none"/></svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
