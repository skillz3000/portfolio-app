function ProjectCard({ project }) {
  return (
    <article>
      <div className="image">×</div>
      <div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;