export interface Writing {
  title: string;
  year: string;
  description: string;
  type: "blog" | "report";
  href: string;
  external: boolean;
  slug?: string;
}

export const writings: Writing[] = [
  {
    title: "Blend-ed’s expertise in customizing Open edX — without losing Open edX",
    year: "2026",
    description:
      "how we built deeply around Open edX while keeping its core upstream and upgrades painless",
    type: "blog",
    href: "https://medium.com/@rabeeh-ta/blend-eds-expertise-in-customizing-open-edx-without-losing-open-edx-e99ebfebf74b",
    external: true,
  },
  {
    title: "Open edX 2026 — The Full Breakdown",
    year: "2026",
    description:
      "a synthesis of 57 Open edX Conference talks, covering what shipped, the tensions in the ecosystem, and the numbers worth carrying forward",
    type: "report",
    href: "/writings/reports/2026/openedx-2026-the-full-breakdown.html",
    external: false,
    slug: "openedx-2026-the-full-breakdown",
  },
];
