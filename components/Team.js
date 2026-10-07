import Section from "./Section";
import { COMMITTEE } from "@/lib/eventData";

export default function Team() {
  return (
    <Section id="team" title="Organizing Committee">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {COMMITTEE.map(([role, name]) => (
          <div key={role + name} className="rounded-xl border border-white/50 bg-white/5 p-5">
            <p className="text-sm text-cyan-300">{role}</p>
            <p className="mt-1 font-semibold">{typeof (name) == "string" ? name : name.map((item, index) => {return <span className="block" key={index}>{item}</span>})}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}