const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="bg-light dark:bg-dark p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
      <a href={link} className="text-primary hover:underline">View Project</a>
    </div>
  );
}; 