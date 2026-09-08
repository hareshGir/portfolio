import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { skills, education } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Toolkit" title="Skills" />
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <Reveal key={skill} delay={i * 0.03}>
                  <span className="inline-block rounded-full border border-border bg-card px-4 py-2 text-sm">
                    {skill}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Background" title="Education" />
            <div className="space-y-6">
              {education.map((edu, i) => (
                <Reveal key={edu.degree} delay={i * 0.05}>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <span className="text-sm text-muted">{edu.date}</span>
                    </div>
                    <div className="text-sm text-muted">{edu.school}</div>
                    <p className="mt-2 text-sm text-foreground/85">
                      {edu.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
