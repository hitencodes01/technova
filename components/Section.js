export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-3xl font-bold text-glow sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-400">{subtitle}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}