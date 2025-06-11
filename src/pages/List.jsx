import { useState } from "react";
import { projects } from "../components/Projects";
import RepoCard from "../components/Generic/RepoCard";

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
      <div className="flex flex-col items-center justify-center w-full h-screen px-4">
        <img
          src="https://github-readme-stats.vercel.app/api?username=Waaahx&show_icons=true&theme=holi"
          alt="GitHub Stats"
          className="mb-10"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <RepoCard username="Waaahx" repoName="portfolio" />
          <RepoCard username="Waaahx" repoName="bisouPlugin" />
          <RepoCard username="Waaahx" repoName="FileManipulator" />
          <RepoCard username="Waaahx" repoName="taskboard" />
          <RepoCard username="Waaahx" repoName="webOs" />
          <RepoCard username="Waaahx" repoName="uwuid" />
          <RepoCard username="Waaahx" repoName="minecraft_server_builder" />
          <RepoCard username="Waaahx" repoName="discord-bot-builder" />
        </div>
      </div>


    </div>
  );
}
