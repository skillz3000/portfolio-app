import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <div>
      {projects.length ? projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      )) : <p>No projects found.</p>}
    </div>
  );
}

export default ProjectList;