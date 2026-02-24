const ProblemSection = () => {
  return (
    <section className="relative py-24 gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gradient-white">
            Training Frontier Models<br />Is Not Affordable
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            Training frontier models requires massive compute clusters, billions in research, and years of iteration.
            Only a handful of companies can afford it.
          </p>
          <div className="inline-block border border-primary/30 rounded-xl px-8 py-4 bg-primary/5">
            <p className="text-lg font-semibold text-foreground">
              Distillation changes the economics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
