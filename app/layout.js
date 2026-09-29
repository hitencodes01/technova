import "./globals.css";

export const metadata = {
  title: "TechNova 2026 | CMS & VSGOI",
  description:
    "TechNova 2026 – one-day tech fest: Tech AI Quiz, Code Clash, Build It and Shark Pitch Battle. 13 October 2026.",
  icons: {
    icon: "logos/technova.jpeg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-200 antialiased">{children}</body>
    </html>
  );
}