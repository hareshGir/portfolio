import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-muted">
      © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp;
      Tailwind CSS.
    </footer>
  );
}
