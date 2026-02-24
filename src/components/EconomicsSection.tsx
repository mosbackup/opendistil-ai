const EconomicsSection = () => {
  return (
    <section className="relative py-24 gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-gradient-white">AI Capability — </span>
            <span className="text-gradient-red">1000x Cheaper</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Training a frontier model from scratch can cost hundreds of millions. Distillation
            reproduces high-value capabilities for under $100k. OpenDistil automates this at scale.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Frontier Training */}
          <div className="bento-card border-border/50">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
              Frontier Training
            </div>
            <div className="space-y-4">
              <Row label="Compute Cost" value="$100M+" bad />
              <Row label="Timeline" value="Years of research" bad />
              <Row label="Infrastructure" value="Massive GPU clusters" bad />
              <Row label="Team" value="100+ researchers" bad />
            </div>
          </div>

          {/* OpenDistil */}
          <div className="bento-card border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 gradient-red-glow opacity-40" />
            <div className="relative">
              <div className="text-xs uppercase tracking-widest text-primary mb-4 font-medium">
                OpenDistil
              </div>
              <div className="space-y-4">
                <Row label="Distillation Cost" value="<$100K" good />
                <Row label="Timeline" value="Weeks to deploy" good />
                <Row label="Infrastructure" value="Managed pipeline" good />
                <Row label="Output" value="Production-ready models" good />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Row = ({ label, value, good, bad }: { label: string; value: string; good?: boolean; bad?: boolean }) => (
  <div className="flex items-center justify-between">
    <span className="text-sm text-muted-foreground">{label}</span>
    <span className={`text-sm font-semibold ${good ? "text-primary" : bad ? "text-foreground/60" : "text-foreground"}`}>
      {value}
    </span>
  </div>
);

export default EconomicsSection;
