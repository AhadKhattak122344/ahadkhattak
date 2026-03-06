import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section className="py-10">
      <SectionHeading>skills</SectionHeading>
      <div className="text-sm text-gray-700 leading-relaxed space-y-2">
        <p>
          <span className="text-gray-900 font-medium">Languages:</span>{" "}
          Python (Pandas, NumPy, Matplotlib, scikit-learn, scipy), Java, SQL, C, Julia, HTML/CSS
        </p>
        <p>
          <span className="text-gray-900 font-medium">Technologies:</span>{" "}
          Jupyter Notebook, Snowflake, Tableau, AWS (S3), Docker, Power BI, Power Query, MySQL, Matlab, Linux, Git/GitHub, IICS, Agile
        </p>
        <p>
          <span className="text-gray-900 font-medium">Data Analysis:</span>{" "}
          Exploratory Data Analysis (EDA), Data Cleaning, Hypothesis Testing, Predictive Modeling
        </p>
      </div>
    </section>
  );
}
