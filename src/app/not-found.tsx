import Link from "next/link";
export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-apple-parchment px-6 text-center">
      <section className="max-w-[560px]">
        <p className="text-caption-strong mb-3 text-apple-muted">404</p>
        <h1 className="text-display-lg mb-4 text-apple-ink">Page not found.</h1>
        <p className="text-body-apple mb-8 text-apple-muted">
          The page you are looking for may have moved or no longer exists.
        </p>
        <Link
          href="/en"
          className="text-body-apple active-scale focus-ring inline-flex rounded-full bg-action px-[22px] py-[11px] text-white hover:bg-action-focus"
        >
          Back to home
        </Link>
      </section>
    </main>
  );
}
