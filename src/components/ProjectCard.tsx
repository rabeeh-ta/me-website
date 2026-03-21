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
        {stars ? ` · ${stars} stars` : ""}
      </p>
    </div>
  );
}
