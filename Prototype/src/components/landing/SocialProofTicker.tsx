import { motion } from "framer-motion";

const validations = [
  { name: "Business Idea, quick summary", score: "8.4/10 Viability" },
  { name: "Local Coffee Roastery Expansion", score: "9.1/10 Viability" },
  { name: "FinTech Budgeting App", score: "7.9/10 Viability" },
  { name: "EdTech Tutor Platform", score: "8.7/10 Viability" },
  { name: "AI Resume Builder", score: "8.2/10 Viability" },
  { name: "DTC Pet Food Brand", score: "7.6/10 Viability" },
  { name: "Business Name", score: "9.0/10 Viability" },
  { name: "Business Name", score: "8.5/10 Viability" },
];

export function SocialProofTicker() {

  const doubled = [...validations, ...validations];

  return (
    <section id="pricing" className="py-16 bg-surface overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Recent Validations
        </p>
        <div className="relative">
          <div className="flex animate-ticker-scroll w-max">
            {doubled.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="flex-shrink-0 mx-3 px-5 py-3 bg-background border border-border rounded-lg flex items-center gap-3"
              >
                <span className="text-sm font-medium text-heading whitespace-nowrap">
                  {item.name}
                </span>
                <span className="text-xs font-bold text-emerald whitespace-nowrap">
                  {item.score}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
