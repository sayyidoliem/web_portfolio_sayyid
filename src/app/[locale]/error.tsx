"use client";
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-apple-parchment px-6 text-center">
      <section className="max-w-[560px]">
        <p className="text-caption-strong mb-3 text-apple-muted">
          Something went wrong
        </p>
        <h1 className="text-display-lg mb-4 text-apple-ink">
          Unable to render this page.
        </h1>
        <p className="text-body-apple mb-8 text-apple-muted">{error.message}</p>
        <button
          type="button"
          onClick={reset}
          className="text-body-apple active-scale focus-ring rounded-full bg-action px-[22px] py-[11px] text-white hover:bg-action-focus"
        >
          Try again
        </button>
      </section>
    </main>
  );
}
