import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Career"
          title="Professional Experience"
          description="13+ years leading frontend engineering across Web3, DeFi, and fintech platforms."
        />

        <div className="relative space-y-10 border-l border-border pl-8">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.05} className="relative">
              <span
                className={`absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-background ${job.current ? "bg-accent" : "bg-muted"
                  }`}
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold">
                  {job.role} ·{" "}
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent"
                    >
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </h3>
                <span className="text-sm text-muted">
                  {job.start} – {job.end}
                </span>
              </div>
              {job.location && (
                <div className="text-sm text-muted">{job.location}</div>
              )}
              <p className="mt-3 max-w-3xl text-foreground/85">
                {job.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {job.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
