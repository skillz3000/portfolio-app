
function AddProject({ title, setTitle, description, setDescription, addProject }) {
  return (
    <form onSubmit={addProject}>
      <h2>Add Project</h2>

      <label>Title</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default AddProject;
