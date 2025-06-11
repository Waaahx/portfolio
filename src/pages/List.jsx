import { useState } from "react";
import { projects } from "../components/Projects";

export default function ProjectGallery() {
  const [selectedTags, setSelectedTags] = useState([]);

  const allTags = Array.from(
    new Set(
      projects.flatMap((ProjectComponent) => {
        const el = ProjectComponent();
        return el.props.tags.props.children.map((tag) => tag.type.name);
      })
    )
  );

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = projects.filter((ProjectComponent) => {
    const el = ProjectComponent();
    const tagNames = el.props.tags.props.children.map((tag) => tag.type.name);
    return selectedTags.length === 0 || selectedTags.every((tag) => tagNames.includes(tag));
  });

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-b from-gray-950 to-indigo-950 text-white flex">
      {/* Sidebar Filter */}
      <aside className="w-72 p-6 border-r border-gray-800 flex flex-col items-center justify-center">
        <div>
          <h2 className="text-xl font-semibold mb-6 text-center">Filtres</h2>
          <div className="space-y-4">
            {allTags.map((tag) => {
              const enabled = selectedTags.includes(tag);
              return (
                <div key={tag} className="flex items-center justify-between w-48">
                  <label className="text-sm">{tag}</label>
                  <button
                    onClick={() => toggleTag(tag)}
                    className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 ${enabled ? "bg-indigo-600" : "bg-gray-700"
                      }`}
                  >
                    <span
                      className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${enabled ? "translate-x-6" : "translate-x-1"
                        }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </aside>


      {/* Grid of Projects */}
      <main className="flex-1 p-6 overflow-y-auto h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((P, i) => (
            <div key={i} className="flex justify-center w-fit">
              <P />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
