import { SectionHeading } from "./SectionHeading";
import { TimelineItem } from "./TimelineItem";
import type { TimelineEntry } from "./TimelineItem";

const timelineData: TimelineEntry[] = [
  {
    date: "2026",
    organization: "Freddie Mac",
    role: "Data Analyst Intern",
    image: "/freddie.jpg",
    teamImage: "/freddie-team.jpg",
    description: [
      "I worked on the Data team writing SQL code, building Tableau dashboards, and building data pipelines.",
    ],
  },
  {
    date: "2025",
    organization: "George Mason University",
    role: "B.S. in Computational & Data Sciences",
    image: "/gmu-logo.png",
    description: [
      "Relevant Coursework: Data Structures & Algorithms, Data Mining, Machine Learning, Probability & Statistics, Natural Language Processing, Calculus III, Linear Algebra, Computational Data Science, Modeling and Simulation.",
    ],
  },
  {
    date: "2024",
    organization: "Northern Virginia Community College",
    role: "Associate Degree in Computer Science",
    image: "/nova-logo.png",
    description: [
      "Completed associate degree foundation in computer science.",
    ],
  },
  {
    date: "2024",
    organization: "Reston Scholarship Fund",
    role: "Full-Ride Scholar",
    image: "/rsf-logo.png",
    description: [
      "Awarded full-ride scholarship recognizing academic achievement and leadership.",
    ],
  },
];

export function Timeline() {
  return (
    <section className="pt-6 pb-12">
      <div>
        {timelineData.map((item, index) => (
          <TimelineItem
            key={`${item.organization}-${index}`}
            item={item}
            isLast={index === timelineData.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
