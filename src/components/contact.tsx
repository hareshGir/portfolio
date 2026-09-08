import type { SVGProps } from "react";
import { Mail, Phone, Download } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { profile } from "@/lib/data";

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.21c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.51-1.11-1.51-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.21C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to Lead / Senior Frontend and Web3 engineering roles. Reach out anytime."
        />

        <Reveal>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex shrink-0 items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <Mail className="h-5 w-5 shrink-0 text-accent" />
              <div className="min-w-0">
                <div className="text-sm text-muted">Email</div>
                <div className="whitespace-nowrap font-medium">
                  {profile.email}
                </div>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex shrink-0 items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <Phone className="h-5 w-5 shrink-0 text-accent" />
              <div className="min-w-0">
                <div className="text-sm text-muted">Phone</div>
                <div className="whitespace-nowrap font-medium">
                  {profile.phone}
                </div>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex shrink-0 items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <LinkedinIcon className="h-5 w-5 shrink-0 text-accent" />
              <div className="min-w-0">
                <div className="text-sm text-muted">LinkedIn</div>
                <div className="whitespace-nowrap font-medium">Haresh Gir</div>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex shrink-0 items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <GithubIcon className="h-5 w-5 shrink-0 text-accent" />
              <div className="min-w-0">
                <div className="text-sm text-muted">GitHub</div>
                <div className="whitespace-nowrap font-medium">hareshGir</div>
              </div>
            </a>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href={profile.resumeFile}
              download
              className="flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              <Download className="h-4 w-4" />
              Download Full Resume (PDF)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
