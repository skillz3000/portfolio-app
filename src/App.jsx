
import { useState } from "react";
import Header from "./components/Header";
import AddProject from "./components/AddProject";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Project 1", description: "Description of the project" },
    { id: 2, title: "Project 2", description: "Description of the project" },
    { id: 3, title: "Project 3", description: "Description of the project" }
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");

  function addProject(e) {
    e.preventDefault();

    setProjects([...projects, {
      id: Date.now(), title, description
    }]);

    setTitle("");
    setDescription("");
  }

  const filteredProjects = projects.filter(p =>
    (p.title + p.description).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      <AddProject
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        addProject={addProject}
      />

      <section className="projects">
        <SearchBar search={search} setSearch={setSearch} />
        <ProjectList projects={filteredProjects} />
      </section>
    </>
  );
}

export default App;