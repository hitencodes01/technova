import Section from "./Section";
import { AWARDS } from "@/lib/eventData";

export default function Awards() {
  return (
    <Section id="awards" title="Awards & Recognition">
      <div className="grid gap-4 sm:grid-cols-2">
        {AWARDS.map(([event, prize]) => (
          <div key={event} className="rounded-xl border border-white/50 bg-white/5 p-5">
            <p className="text-sm text-slate-400">{event}</p>
            <p className="mt-1 text-lg font-semibold">🏆 {prize}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-slate-400">
        Certificates for participants and an optional overall “TechNova Champion” title based on a pre-announced scoring system.
      </p>
    </Section>
  );
}