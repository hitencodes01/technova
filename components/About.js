import Section from "./Section";
import { OBJECTIVES } from "@/lib/eventData";

export default function About() {
  return (
    <Section id="about" title="About TechNova"
      subtitle="A one-day technical fest where students think, build, innovate and pitch.">
      <div className="grid gap-4 sm:grid-cols-2">
        {OBJECTIVES.map((o, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <span className="text-cyan-300 font-mono text-sm">0{i + 1}</span>
            <p className="mt-2">{o}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}