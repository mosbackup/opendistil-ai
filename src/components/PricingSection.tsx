const tiers = [
  {
    name: "Starter",
    price: "$5,000",
    unit: "/ run",
    features: [
      "Up to 5M queries",
      "Basic distillation pipeline",
      "Model evaluation",
      "API deployment",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Scale",
    price: "$25,000",
    unit: "/ run",
    features: [
      "Up to 25M queries",
      "Advanced capability extraction",
      "Benchmark tuning",
      "Custom architecture optimization",
    ],
    cta: "Start Scaling",
    highlighted: true,
  },
  {
    name: "Frontier",
    price: "Custom",
    unit: "",
    features: [
      "Unlimited distillation campaigns",
      "Dedicated GPU cluster",
      "Private datasets",
      "Enterprise deployment",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient-white">
            Pricing
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Frontier-level models for &lt;1% of the cost of training from scratch.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`bento-card flex flex-col ${
                tier.highlighted ? "border-primary/40 relative overflow-hidden" : ""
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
              )}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                  {tier.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">{tier.unit}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-primary mt-0.5 flex-shrink-0">
                      <path d="M4 8l3 3 5-6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://forms.office.com/r/t8FQe9SziR"
                className={`block text-center py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border text-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
