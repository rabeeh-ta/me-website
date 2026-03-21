import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { socials } from "@/data/socials";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto px-6 py-16">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://avatars.githubusercontent.com/u/43750842"
            alt="rabeeh t a"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-2xl font-semibold">@rabeeh0ta</h1>
        </div>
        <ThemeToggle />
      </div>

      <p className="mt-6 leading-relaxed">
        founding engineer at{" "}
        <a href="https://blend-ed.com" target="_blank" rel="noopener noreferrer">
          blend-ed
        </a>
        . i build things for the web, tinker with hardware, and play too much
        minecraft.
      </p>

      <p className="mt-3 text-sm text-muted leading-relaxed">
        self-taught developer. been building stuff since 2019 — started with
        HTML and arduino, now mostly javascript and whatever gets the job done.
      </p>

      {/* socials */}
      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {s.name}
          </a>
        ))}
      </div>

      {/* projects */}
      <section className="mt-16">
        <h2 className="text-lg font-semibold">projects</h2>
        <hr className="border-border mt-2 mb-2" />
        <div className="divide-y divide-border">
          {projects.map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </div>
      </section>

      {/* footer */}
      <footer className="mt-16 pt-4 border-t border-border">
        <p className="text-sm text-muted">
          built poorly with next.js.{" "}
          <a
            href="https://github.com/rabeeh-ta/me-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            source
          </a>
        </p>
      </footer>
    </main>
  );
}
