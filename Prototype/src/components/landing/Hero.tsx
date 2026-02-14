import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const startupCard = {
  name: "Business Name",
  tagline: "Business Tagline",
  score: "9.1",
  category: "Category",
};

const validationList = [
  { name: "Business Name", score: "8.4", votes: 124 },
  { name: "Business Name", score: "7.9", votes: 98 },
  { name: "Business Name", score: "9.1", votes: 201 },
  { name: "Business Name", score: "8.7", votes: 156 },
];

export function Hero() {
  return (
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-light text-emerald text-xs font-semibold mb-6">
              <Sparkles size={14} />
              Earn credits by validating and sharing feedback
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Validate Your Startup Idea.{" "}
              <span className="text-emerald">Find Your First Investor.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              The marketplace where founders earn validation and investors find the next
              big thing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105 gap-2"
              >
                Post Your Idea (20 Credits)
                <ArrowRight size={16} />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-muted-foreground hover:text-heading transition-transform hover:scale-105"
              >
                Browse for Free
              </Button>
            </div>
          </motion.div>

          {/* Visual: Phone + Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center gap-6"
          >
            {/* Phone mockup */}
            <div className="relative w-52 flex-shrink-0">
              <div className="bg-heading rounded-[2rem] p-2 shadow-2xl">
                <div className="bg-background rounded-[1.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-4 pt-3 pb-2 text-[10px] text-muted-foreground">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3.5 h-2 bg-heading rounded-sm" />
                    </div>
                  </div>
                  {/* Card */}
                  <div className="px-4 pb-4">
                    <div className="bg-surface rounded-xl p-4 border border-border">
                      <div className="w-full h-20 bg-emerald/10 rounded-lg mb-3 flex items-center justify-center">
                        <span className="text-2xl">☕</span>
                      </div>
                      <h4 className="text-sm font-semibold text-heading">{startupCard.name}</h4>
                      <p className="text-[11px] text-muted-foreground mt-1">{startupCard.tagline}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-[10px] bg-secondary px-2 py-0.5 rounded-full text-muted-foreground">
                          {startupCard.category}
                        </span>
                        <span className="text-sm font-bold text-emerald">{startupCard.score}/10</span>
                      </div>
                    </div>
                    {/* Swipe buttons */}
                    <div className="flex justify-center gap-4 mt-4">
                      <div className="w-10 h-10 rounded-full border-2 border-destructive/30 flex items-center justify-center text-destructive/50 text-lg">
                        ✕
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-emerald/30 flex items-center justify-center text-emerald text-lg">
                        ♥
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="hidden md:block w-64 bg-background border border-border rounded-xl shadow-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-border">
                <h4 className="text-xs font-semibold text-heading">Validation Scores</h4>
              </div>
              <div className="divide-y divide-border">
                {validationList.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="px-4 py-3 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs font-medium text-heading">{item.name}</p>
                      <p className="text-[10px] text-muted-foreground">{item.votes} votes</p>
                    </div>
                    <span className="text-sm font-bold text-emerald">{item.score}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
