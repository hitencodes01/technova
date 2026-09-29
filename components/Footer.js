import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
      <p>TechNova 2026 · CMS &amp; VSGOI · 13 October 2026</p>
      <p className="mt-1">Think. Build. Innovate. Pitch.</p>
      <p>+917311105831 <span>   </span> <span><Link className="font-semibold underline" href={"https://vsgoi.org"}>www.vsgoi.org</Link></span></p>
      <p>Copyright@VSGOI2026</p>
    </footer>
  );
}