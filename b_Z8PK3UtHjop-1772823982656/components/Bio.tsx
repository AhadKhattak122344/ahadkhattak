import { SectionHeading } from "./SectionHeading";

export function Bio() {
  return (
    <section className="py-12 bg-gray-50 -mx-6 px-6 sm:-mx-8 sm:px-8">
      <SectionHeading>bio</SectionHeading>
      <p className="text-sm text-gray-700 leading-relaxed max-w-2xl">
        Ahad Khattak is a Computational &amp; Data Science student at George
        Mason University focused on machine learning, AI systems, and data
        engineering. He previously worked as a Data Analyst Intern at Freddie
        Mac, where he developed Snowflake pipelines, Tableau dashboards, and
        fraud-focused matching workflows. His interests center on practical
        machine learning, data products, and scalable analytics systems.
      </p>
    </section>
  );
}
