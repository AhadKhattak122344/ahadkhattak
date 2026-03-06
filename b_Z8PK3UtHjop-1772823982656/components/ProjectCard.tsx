import Image from "next/image";

export interface Project {
  title: string;
  image: string;
  techStack: string[];
  description: string;
  githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex gap-4 py-5 border-t border-gray-100 group items-center">
      {/* Thumbnail */}
      <div className="shrink-0 w-40 h-28 sm:w-56 sm:h-36 overflow-hidden rounded border border-gray-100 bg-gray-50 flex items-center justify-center">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          width={224}
          height={144}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Details */}
      <div className="min-w-0 flex-1">
        <div className="flex items-start gap-2 flex-wrap">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-700 hover:text-blue-900 underline underline-offset-2 leading-snug transition-colors duration-150"
          >
            {project.title}
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
          {project.techStack.join(", ")}
        </p>
        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}
