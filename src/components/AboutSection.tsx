const AboutSection = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient-white">
              Distilled in San Francisco
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We are proudly based in San Francisco, building infrastructure for the next generation
              of AI labs. Located in the heart of the AI ecosystem — across the street from Anthropic,
              our favorite distillation source.
            </p>
          </div>

          <div className="bento-card text-center">
            <blockquote className="text-lg md:text-xl font-medium text-foreground italic mb-3">
              "Keep your friends close, keep your distillation sources closer."
            </blockquote>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">— The OpenDistil Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
