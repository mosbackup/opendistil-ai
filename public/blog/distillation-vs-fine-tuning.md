# Distillation vs Fine-Tuning: When to Use What

**February 10, 2026 · OpenDistil Team**

---

Both distillation and fine-tuning are techniques for customizing AI models, but they solve fundamentally different problems. Understanding when to use each is critical for building efficient AI systems.

## Fine-Tuning: Specialization

Fine-tuning takes an existing model and trains it further on domain-specific data. Think of it as **teaching a generalist to become a specialist**.

**Best for:**
- Adapting a model to a specific domain (legal, medical, finance)
- Adjusting tone, style, or format
- Adding knowledge about proprietary data

**Limitations:**
- The base model's capability ceiling remains the same
- Can cause catastrophic forgetting
- Doesn't reduce model size or inference cost

## Distillation: Compression + Transfer

Distillation takes the *capabilities* of a powerful model and transfers them into a smaller architecture. Think of it as **building a new expert that learned from the best**.

**Best for:**
- Reducing inference costs by 10-100x
- Deploying on edge devices or constrained environments
- Achieving frontier-level performance without frontier-level compute
- Creating proprietary models you fully own

**Limitations:**
- Requires access to a strong teacher model
- Some capability loss (typically 5-15%)
- Requires careful dataset construction

## The Decision Framework

```
Need domain expertise?     → Fine-tune
Need cheaper inference?    → Distill
Need both?                 → Distill first, then fine-tune
Need frontier capability?  → Distill from a frontier teacher
```

## Combining Both

The most powerful approach is often sequential:

1. **Distill** a frontier model into an efficient student
2. **Fine-tune** the student on your proprietary data

This gives you frontier-level reasoning with domain-specific knowledge, at a fraction of the cost.

---

*Ready to explore distillation for your use case? [Talk to our team](#cta).*
