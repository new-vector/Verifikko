import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, TrendingUp, CheckCircle2 } from "lucide-react";

const tabs = [
  {
    id: "founders",
    label: "For Founders",
    icon: Rocket,
    headline: "Stop building in the dark.",
    body: "Verifiko's validation score tells if you need to pivot before you act upon your idea.",
    points: [
      "Community-driven viability scores",
      "investor feedback",
      "Zero cost to browse and comment",
      "Build convictin",
    ],
  },
  {
    id: "investors",
    label: "For Investors",
    icon: TrendingUp,
    headline: "Deal flow, simplified and made more accessible.",
    body: "Scroll through vetted local businesses and global SaaS ideas. See community validation scores, read founder responses, and DM the ones that you find interesting.",
    points: [
      "Deal Flow",
      "Pre-vetted",
      "Direct founder messaging",
      "Filter by industry, stage, and region",
    ],
  },
];

export function DualMarket() {
  const [active, setActive] = useState("founders");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="investors" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Built for Both Investors and Founders</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Verfiko presents equal opportunities of large multitudes to both sides.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-surface border border-border rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
                  active === tab.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-heading"
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="max-w-2xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl mb-4">{current.headline}</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">{current.body}</p>
            <ul className="space-y-3">
              {current.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 size={18} className="text-emerald flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
