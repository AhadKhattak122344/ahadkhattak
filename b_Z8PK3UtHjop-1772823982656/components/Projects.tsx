import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Credit Card Fraud Detection",
    image: "/fraud-project.png",
    techStack: ["Python", "scikit-learn", "Random Forest", "Streamlit"],
    description: "ML pipeline detecting fraud across 284K transactions with 98.7% precision.",
    githubUrl: "https://github.com/AhadKhattak122344/Credit-Card-Fraud-Analysis-/blob/main/Credit_Card_Fraud_Detection.ipynb",
  },
  {
    title: "Movie Recommendation System",
    image: "/movie-project.png",
    techStack: ["Python", "Scikit-learn", "Streamlit", "TMDB API"],
    description: "Content-based recommender using cosine similarity on 4,800+ movies.",
    githubUrl: "https://github.com/AhadKhattak122344/MovieRecomendationSystem/tree/main",
  },
  {
    title: "Electric Vehicle Analytics Dashboard",
    image: "/ev-dashboard.png",
    techStack: ["Tableau", "Excel"],
    description: "Interactive dashboard analyzing EV adoption trends across 150K records.",
    githubUrl: "https://public.tableau.com/views/ElectricVehicleAnalyticsDashboard_17728227575790/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  },
];

export function Projects() {
  return (
    <section className="py-12">
      <SectionHeading>projects</SectionHeading>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
