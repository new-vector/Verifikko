const columns = [
  {
    title: "Company",
    links: ["About", "Careers", "Blog"],
  },
  {
    title: "Community",
    links: ["Discord", "Twitter / X", "Feedback Board"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-narrow section-padding pb-12">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <span className="text-lg font-bold text-heading">Verifiko</span>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-heading mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-heading transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Verifiko. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
