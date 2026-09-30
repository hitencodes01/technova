import Section from "./Section";
import { EVENTS, RULES } from "@/lib/eventData";

const icons = { quiz: "/img/TechAI.jpeg", code: "/img/Clash.jpeg", build: "/img/Build.jpeg", pitch: "/img/Shark.jpeg" };

export default function Events() {
  return (
    <Section id="events" title="Events" subtitle="Four events. One registration.">
      <div className="grid gap-6 md:grid-cols-2">
        {EVENTS.map((e) => (
          <article key={e.id} className="rounded-4xl border border-white bg-white/5 p-6">
            <div className="text-4xl"><img src={icons[e.id]} alt="" height={100} width={100} className="rounded-2xl shadow-md shadow-white" /></div>
            <h3 className="mt-3 text-xl font-bold">{e.title}</h3>
            <p className="text-cyan-300">{e.tagline}</p>

            <dl className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-300">
              <div><dt className="text-slate-500">Duration</dt><dd>{e.duration}</dd></div>
              <div><dt className="text-slate-500">Participants</dt><dd>{e.participants}</dd></div>
              <div><dt className="text-slate-500">Faculty</dt>{e.facultyCoord.map((item) => { return `<dd>${item}</dd>` })}</div>
              <div><dt className="text-slate-500">Student</dt>{e.studentCoord.map((item) => { return `<dd>${item}</dd>` })}</div>
            </dl>

            <details className="mt-4 group">
              <summary className="cursor-pointer text-sm font-semibold text-violet-300">
                Rules &amp; format
              </summary>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                {RULES[e.id].map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </details>
          </article>
        ))}
      </div>
    </Section>
  );
}