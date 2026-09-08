export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-muted">{description}</p>
      )}
    </div>
  );
}
