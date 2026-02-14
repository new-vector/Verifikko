import { motion } from "framer-motion";
import { PenLine, MessageSquare, Handshake } from "lucide-react";

const steps = [
  {
    icon: PenLine,
    title: "Post Your Idea",
    description:
      "Spend 20 credits to list your startup concept.",
    highlight: "Costs 20 Credits",
  },
  {
    icon: MessageSquare,
    title: "Get Validated",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos",
    highlight: "Earn +5 Credits per helpful comment",
  },
  {
    icon: Handshake,
    title: "Connect & Fund",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos",
    highlight: "Unlock Investor DMs",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CreditEconomy() {
  return (
    <section id="features" className="section-padding bg-surface">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-emerald mb-3 uppercase tracking-wider">
            The Credit Economy
          </p>
          <h2 className="text-3xl md:text-4xl mb-4">How Verifiko Works</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Loren. Ipsum. Dolor.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="relative bg-background border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <step.icon size={18} className="text-primary-foreground" />
                </div>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="text-xl mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {step.description}
              </p>
              <span className="inline-block text-xs font-semibold text-emerald bg-emerald-light px-3 py-1 rounded-full">
                {step.highlight}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
