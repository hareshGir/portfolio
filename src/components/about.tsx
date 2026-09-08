import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { profile, languages, certifications } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="About" title="Profile" />

        <div className="grid gap-12 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <p className="text-lg leading-relaxed text-foreground/90">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="space-y-8">
            <div>
              <h3 className="mb-3 text-sm font-medium uppercase tracking-widest text-muted">
                Certifications
              </h3>
              <ul className="space-y-2">
                {certifications.map((c) => (
                  <li
                    key={c.name}
                    className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-2.5 text-sm"
                  >
                    <span>{c.name}</span>
                    <span className="text-muted">{c.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-medium uppercase tracking-widest text-muted">
                Languages
              </h3>
              <ul className="space-y-2">
                {languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-2.5 text-sm"
                  >
                    <span>{l.name}</span>
                    <span className="text-muted">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
