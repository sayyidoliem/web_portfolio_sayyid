"use client";
import { FormEvent, useState } from "react";
import Link from "next/link";
import type { SiteContent } from "@/content/site-content";
export function Footer({
  identity,
  footer,
}: {
  identity: SiteContent["identity"];
  footer: SiteContent["footer"];
}) {
  const [submitted, setSubmitted] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "");
    const email = String(f.get("email") ?? "");
    const msg = String(f.get("message") ?? "");
    window.location.href = `mailto:${identity.email}?subject=${encodeURIComponent(`Portfolio inquiry from ${name}`)}&body=${encodeURIComponent(`${msg}

From: ${name}
Email: ${email}`)}`;
    setSubmitted(true);
  }
  return (
    <footer
      id="contact"
      className="flex w-full flex-col items-center bg-apple-parchment px-4 pb-8 pt-16"
    >
      <div className="w-full max-w-apple">
        <div className="mx-auto mb-16 max-w-[600px] rounded-[18px] border border-apple-hairline bg-white p-8">
          <h3 className="text-display-md mb-6 text-center text-apple-ink">
            {footer.form.title}
          </h3>
          <form className="flex flex-col gap-4" onSubmit={submit}>
            {[
              [
                "name",
                "text",
                footer.form.nameLabel,
                footer.form.namePlaceholder,
              ],
              [
                "email",
                "email",
                footer.form.emailLabel,
                footer.form.emailPlaceholder,
              ],
            ].map(([id, type, label, ph]) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="text-caption-strong mb-2 block text-apple-ink"
                >
                  {label}
                </label>
                <input
                  id={id}
                  name={id}
                  type={type}
                  required
                  placeholder={ph}
                  className="text-body-apple w-full rounded-[8px] border border-apple-hairline p-3 focus:border-action focus:outline-none"
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="text-caption-strong mb-2 block text-apple-ink"
              >
                {footer.form.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder={footer.form.messagePlaceholder}
                className="text-body-apple w-full resize-none rounded-[8px] border border-apple-hairline p-3 focus:border-action focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="text-body-apple active-scale focus-ring rounded-full bg-action py-3 text-white hover:bg-action-focus"
            >
              {footer.form.submitLabel}
            </button>
            {submitted ? (
              <p className="text-caption text-center text-action" role="status">
                {footer.form.successMessage}
              </p>
            ) : null}
          </form>
        </div>
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-caption-strong mb-2 text-apple-ink">
                {col.title}
              </h4>
              <ul
                className="text-body-apple flex flex-col text-[#333333]"
                style={{ lineHeight: "2.41" }}
              >
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-black">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mb-6 h-px w-full bg-[#d2d2d7]" />
        <div className="text-fine-print flex flex-col items-start justify-between text-apple-muted md:flex-row md:items-center">
          <p>{identity.copyright}</p>
          <div className="mt-2 flex gap-4 md:mt-0">
            {footer.legalLinks.map((l, i) => (
              <span key={l.label} className="flex gap-4">
                <Link href={l.href} className="hover:text-apple-ink">
                  {l.label}
                </Link>
                {i < footer.legalLinks.length - 1 ? (
                  <span className="hidden md:inline">|</span>
                ) : null}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
