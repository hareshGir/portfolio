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
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <Mail className="h-5 w-5 text-accent" />
              <div>
                <div className="text-sm text-muted">Email</div>
                <div className="font-medium break-all">{profile.email}</div>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <Phone className="h-5 w-5 text-accent" />
              <div>
                <div className="text-sm text-muted">Phone</div>
                <div className="font-medium">{profile.phone}</div>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <LinkedinIcon className="h-5 w-5 text-accent" />
              <div>
                <div className="text-sm text-muted">LinkedIn</div>
                <div className="font-medium">/in/haresh-gir</div>
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
