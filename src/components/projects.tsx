import Image from "next/image";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Selected Work"
          title="Key Projects"
          description="A sample of the Web3 platforms and products built across my career."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/50">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {project.logo && (
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white">
                        <Image
                          src={project.logo}
                          alt={`${project.name} logo`}
                          width={36}
                          height={36}
                          className="h-full w-full object-contain"
                        />
                      </span>
                    )}
                    <h3 className="text-xl font-semibold">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent"
                        >
                          {project.name}
                        </a>
                      ) : (
                        project.name
                      )}
                    </h3>
                  </div>
                  <span className="text-sm text-muted">{project.year}</span>
                </div>
                <p className="text-foreground/85">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
