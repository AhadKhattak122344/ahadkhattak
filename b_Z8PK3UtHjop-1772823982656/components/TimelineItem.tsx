import Image from "next/image";

export interface TimelineEntry {
  date: string;
  organization: string;
  role: string;
  image: string;
  description: string[];
  teamImage?: string;
}

interface TimelineItemProps {
  item: TimelineEntry;
  isLast: boolean;
}

export function TimelineItem({ item, isLast }: TimelineItemProps) {
  return (
    <div className="grid grid-cols-[56px_20px_1fr] sm:grid-cols-[64px_24px_1fr]">
      {/* Date column */}
      <div className="text-left pt-1">
        <span className="text-xs tabular-nums text-gray-400 leading-none">
          {item.date}
        </span>
      </div>

      {/* Rail column */}
      <div className="relative flex flex-col items-center">
        {/* Dot */}
        <div className="relative z-10 mt-1.5 w-2 h-2 rounded-full bg-gray-300 shrink-0" />
        {/* Connecting line below dot */}
        {!isLast && (
          <div className="flex-1 w-px bg-gray-200 mt-1" />
        )}
      </div>

      {/* Content column */}
      <div className={`pl-4 ${isLast ? "pb-0" : "pb-10"}`}>
        <div className="flex gap-4 items-start">
          {/* Company logo / photo */}
          <div className="shrink-0 w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center">
            <Image
              src={item.image}
              alt={item.organization}
              width={160}
              height={96}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Text */}
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900 leading-snug">
              {item.organization}
            </p>
            <p className="text-sm text-gray-500 leading-snug mt-0.5">
              {item.role}
            </p>
            <ul className="mt-2 space-y-1">
              {item.description.map((line, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-600 leading-relaxed"
                >
                  {line}
                </li>
              ))}
            </ul>
            {item.teamImage && (
              <div className="mt-4 overflow-hidden rounded-lg w-full max-w-md">
                <Image
                  src={item.teamImage}
                  alt={`${item.organization} team`}
                  width={400}
                  height={250}
                  className="object-cover w-full scale-110 origin-center"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
