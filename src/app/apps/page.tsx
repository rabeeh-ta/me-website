import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "apps | rabeeh t a",
  description: "Apps by rabeeh t a.",
};

export default function AppsPage() {
  return (
    <main className="max-w-xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-sm">← home</Link>
        <ThemeToggle />
      </div>

      <h1 className="mt-8 text-2xl font-semibold">apps</h1>

      <a
        href="https://shuffles.rabeeta.xyz"
        className="mt-6 block rounded-lg border border-border p-5 no-underline transition-colors hover:border-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
      >
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-medium">shuffles</h2>
          <span aria-hidden="true">↗</span>
        </div>
        <p className="mt-1 text-sm text-muted">shuffles.rabeeta.xyz</p>
      </a>
    </main>
  );
}
