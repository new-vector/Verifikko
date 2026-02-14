import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "For Investors", href: "#investors" },
  { label: "Pricing", href: "#pricing" },
  { label: "Forum", href: "#Forum" },
  { label: "Marketplace", href: "#marketplace" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      <div className="container-narrow flex items-center justify-between h-16">
        <a href="/" className="text-xl font-bold text-heading tracking-tight">
          Verifiko
        </a>

        {/* Desktop ✌️*/}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-heading transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105"
          >
            Start Validating
          </Button>
        </div>

        {/* Mobile menu toggle 👍*/}
        <button
          className="md:hidden text-heading"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-border bg-background px-4 pb-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-sm font-medium text-muted-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="w-full mt-2 bg-primary text-primary-foreground">
            Start Validating
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
}
