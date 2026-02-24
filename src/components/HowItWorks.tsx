const steps = [
  {
    num: "01",
    title: "Connect a Frontier Model",
    desc: "Use a powerful teacher model — Claude, GPT, or Gemini — as your knowledge source.",
    icon: "🧠",
  },
  {
    num: "02",
    title: "Generate Training Signals",
    desc: "Run millions of structured prompts to extract reasoning, coding ability, and task performance signals.",
    icon: "⚡",
  },
  {
    num: "03",
    title: "Build the Distillation Dataset",
    desc: "Capture responses and convert them into high-quality training data for a student model.",
    icon: "⚗️",
  },
  {
    num: "04",
    title: "Train the Student Model",
    desc: "Train an optimized model that reproduces the teacher's capabilities at a fraction of the cost.",
    icon: "🔬",
  },
  {
    num: "05",
    title: "Deploy Your Frontier Model",
    desc: "Serve your distilled model via API or private infrastructure. Production-ready in weeks.",
    icon: "🚀",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient-white">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A production-grade distillation pipeline, automated end-to-end.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bento-card flex items-start gap-5 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                {step.num}
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-foreground mb-1 flex items-center gap-2">
                  {step.title}
                  <span className="text-lg">{step.icon}</span>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
