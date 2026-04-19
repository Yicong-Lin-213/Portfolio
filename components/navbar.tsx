import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-neutral-dark tracking-tight">
          YicongLin<span className="text-primary">.dev</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}