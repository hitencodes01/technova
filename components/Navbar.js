import Link from "next/link";

const links = [
  ["About", "/#about"],
  ["Events", "/#events"],
  ["Schedule", "/#schedule"],
  ["Awards", "/#awards"],
  ["Team", "/#team"],
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold text-glow">TechNova 2026</Link>
        <ul className="hidden gap-6 text-sm md:flex">
          {links.map(([label, href]) => (
            <li key={label}>
              <a href={href} className="text-slate-300 hover:text-cyan-300">{label}</a>
            </li>
          ))}
        </ul>
        <a href="/register"
           className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300">
          Register
        </a>
      </nav>
    </header>
  );
}