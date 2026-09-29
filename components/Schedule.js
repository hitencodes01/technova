import Section from "./Section";
import { SCHEDULE } from "@/lib/eventData";

export default function Schedule() {
    return (
        <Section id="schedule" title="Schedule" subtitle="13 October 2026">
            <ol className="border-l border-cyan-400/40 pl-6">
                {SCHEDULE.map(([time, activity]) => (
                    <li key={time} className="relative mb-6">
                        <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-cyan-400" />
                        <p className="font-mono text-sm text-cyan-300">{time}</p>
                        <p className="font-medium">{activity}</p>
                    </li>
                ))}
            </ol>
        </Section>
    );
}