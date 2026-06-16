export function SectionHeader({
  title,
  description,
  inverted = false,
}: {
  title: string;
  description?: string;
  inverted?: boolean;
}) {
  return (
    <div className="mb-16 text-center">
      <h2
        className={`text-display-lg mb-2 ${inverted ? "text-white" : "text-apple-ink"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`text-lead mx-auto max-w-2xl ${inverted ? "text-apple-darkMuted" : "text-apple-muted"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
