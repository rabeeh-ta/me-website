"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/projects";
import { writings } from "@/data/writings";

const tabs = ["all", "work", "writing", "builds"] as const;

type Tab = (typeof tabs)[number];

const tabLabels: Record<Tab, string> = {
  all: "all",
  work: "work (gets paid)",
  writing: "writing (blogs, reports, etc.)",
  builds: "builds (vibecoded, not slop)",
};

function WorkItem() {
  return (
    <div className="py-3">
      <div className="flex items-start justify-between gap-4 sm:items-baseline">
        <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-2">
          <a
            href="https://www.blend-ed.com"
            target="_blank"
            rel="noopener noreferrer"
            className="order-1 rounded-sm bg-[#f1f4ff] p-1 dark:bg-white sm:order-2"
            aria-label="Blend-ed"
          >
            <img
              src="https://www.blend-ed.com/_next/static/media/logo.20232b6b.svg"
              alt=""
              className="h-4 w-auto"
            />
          </a>
          <span className="order-2 font-medium sm:order-1">founding engineer</span>
        </div>
        <span className="shrink-0 text-sm text-muted">2023 — present</span>
      </div>
      <p className="mt-1 text-sm text-muted">
        full-stack engineer across the AI-first learning platform, including the{" "}
        <a
          href="https://www.blend-ed.com/features/ai-course-creator"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI Course Creator
        </a>
        .
      </p>
    </div>
  );
}

function WritingList() {
  return (
    <div className="divide-y divide-border">
      {writings.map((writing) => (
        <div key={writing.href} className="py-3">
          <div className="flex items-baseline justify-between gap-4">
            <a
              href={writing.href}
              target={writing.external ? "_blank" : undefined}
              rel={writing.external ? "noopener noreferrer" : undefined}
              className="min-w-0 font-medium"
            >
              {writing.title}
            </a>
            <div className="flex shrink-0 items-center gap-2">
              <span className="rounded-sm border border-border px-1.5 py-0.5 text-[11px] leading-none text-muted">
                {writing.type}
              </span>
              <span className="text-sm text-muted">{writing.year}</span>
            </div>
          </div>
          <p className="mt-1 text-sm text-muted">{writing.description}</p>
        </div>
      ))}
    </div>
  );
}

function BuildsList({ projects }: { projects: Project[] }) {
  return (
    <div className="divide-y divide-border">
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8 first:mt-0">
      <h3 className="text-sm font-medium text-muted">{title}</h3>
      <div className="mt-1">{children}</div>
    </div>
  );
}

export default function Portfolio({ projects }: { projects: Project[] }) {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const heading = tabLabels[activeTab];

  return (
    <section className="mt-16">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-lg font-semibold">{heading}</h2>
        <div role="tablist" aria-label="Portfolio categories" className="flex gap-3 text-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className={
                activeTab === tab
                  ? "font-medium underline underline-offset-4"
                  : "text-muted hover:text-foreground"
              }
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <hr className="mt-2 mb-2 border-border" />

      {activeTab === "all" ? (
        <>
          <Section title={tabLabels.work}>
            <div className="divide-y divide-border">
              <WorkItem />
            </div>
          </Section>
          <Section title={tabLabels.writing}>
            <WritingList />
          </Section>
          <Section title={tabLabels.builds}>
            <BuildsList projects={projects} />
          </Section>
        </>
      ) : null}

      {activeTab === "work" ? (
        <div className="divide-y divide-border">
          <WorkItem />
        </div>
      ) : null}

      {activeTab === "writing" ? <WritingList /> : null}
      {activeTab === "builds" ? <BuildsList projects={projects} /> : null}
    </section>
  );
}
