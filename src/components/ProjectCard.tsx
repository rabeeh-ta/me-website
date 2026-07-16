interface ProjectCardProps {
  name: string;
  year: string;
  description: string;
  url?: string;
  github?: string;
  stars?: number;
  tech?: string;
}

export default function ProjectCard({
  name,
  year,
  description,
  url,
  github,
  stars,
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
            className="font-medium"
          >
            {name}
          </a>
        ) : (
          <span className="font-medium">{name}</span>
        )}
        <span className="text-sm text-muted shrink-0">{year}</span>
      </div>
      <p className="text-sm text-muted mt-1">
        {description}
        {stars ? (
          <span className="inline-flex items-center gap-1 ml-1.5 align-middle">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3.5 h-3.5"
              aria-hidden="true"
            >
              <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.005Z" />
            </svg>
            {stars}
            <span className="sr-only">stars</span>
          </span>
        ) : null}
      </p>
    </div>
  );
}
