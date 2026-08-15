interface ProjectCardProps {
  name: string;
  year: string;
  description: string;
  url?: string;
  github?: string;
  stars?: number;
  tags?: string[];
  tech?: string;
}

export default function ProjectCard({
  name,
  year,
  description,
  url,
  github,
  stars,
  tags,
}: ProjectCardProps) {
  const link = url || github;

  return (
    <div className="py-3">
      <div className="flex items-baseline justify-between gap-4">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 font-medium"
          >
            {name}
          </a>
        ) : (
          <span className="font-medium">{name}</span>
        )}
        <div className="flex shrink-0 items-center gap-2">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-border px-1.5 py-0.5 text-[11px] leading-none text-muted"
            >
              {tag}
            </span>
          ))}
          {stars !== undefined ? (
            <span
              className="inline-flex items-center gap-1 rounded-sm border border-border px-1.5 py-0.5 text-[11px] leading-none text-muted"
              aria-label={`${stars} GitHub stars`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3 w-3"
                aria-hidden="true"
              >
                <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.005Z" />
              </svg>
              {stars}
            </span>
          ) : null}
          <span className="text-sm text-muted">{year}</span>
        </div>
      </div>
      <p className="mt-1 text-sm text-muted">{description}</p>
    </div>
  );
}
