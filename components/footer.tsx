import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-sm text-secondary">
            © {new Date().getFullYear()} Yicong Lin. Built with Next.js & Tailwind.
          </p>
        </div>
        <div className="flex gap-6">
          <a 
            href="https://github.com/Yicong-Lin-213" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-secondary hover:text-primary text-sm font-medium">
            <Github size={18} strokeWidth={2.5} />
            <span className="text-sm font-bold">GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/yicong-lin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-secondary hover:text-primary text-sm font-medium">
            <Linkedin size={18} strokeWidth={2.5}/>
            <span className="text-sm font-bold">LinkedIn</span>
          </a>
          <a 
            href="mailto:hello@yiconglin.dev"
            className="flex items-center justify-center gap-2 text-secondary hover:text-accent transition-colors"
          >
            <Mail size={18} strokeWidth={2.5} />
            <span className="text-sm font-bold">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}