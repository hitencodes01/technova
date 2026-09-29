import Section from "./Section";
import { COMMITTEE } from "@/lib/eventData";

export default function Team() {
  return (
    <Section id="team" title="Organizing Committee">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COMMITTEE.map(([role, name]) => (
          <div key={role + name} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-cyan-300">{role}</p>
            <p className="mt-1 font-semibold">{name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}