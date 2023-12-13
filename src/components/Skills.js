// Skills.js
import React from "react";

const Skills = () => {
  return (
    <div className="mt-12">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center text-dark dark:text-light
      md:text-6xl xs:text-4xl md:mb-16"
      >
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:grid-cols-1">
        <SkillCategory
          category="Languages"
          skills="C | C++ | Python | JavaScript"
          emoji="🚀"
        />
        <SkillCategory
          category="Frontend"
          skills="HTML | CSS | React | Next.js | Tailwind CSS | Material UI"
          emoji="💻"
        />
        <SkillCategory
          category="Backend"
          skills="Express.js | Node.js | MongoDB | NoSQL | MySQL"
          emoji="🔧"
        />
        <SkillCategory
          category="DevOps"
          skills="Git | GitHub CI/CD"
          emoji="🛠️"
        />
        {/* <SkillCategory
          category="QA"
          skills="Pytest | Jest | Mocha | Chai | Load Testing | K6"
        /> */}
        <SkillCategory
          category="Data Science"
          skills="Pandas | Numpy | Matplotlib | Jupyter Notebooks | SQL"
          emoji="📊"
        />
        <SkillCategory
          category="Others"
          skills="Latex | Web Scraping"
          emoji="📄"
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ category, skills, emoji }) => {
  return (
    <div className="bg-light dark:bg-dark border border-solid border-dark dark:border-light p-6 rounded-md hover:shadow-lg transform transition-transform hover:scale-105">
      <h3 className="mb-4 text-xl font-bold text-dark dark:text-light">
        {category} {emoji}
      </h3>
      <p className="text-md font-medium text-dark/75 dark:text-light/75">
        {skills}
      </p>
    </div>
  );
};

export default Skills;
