import RepoCard from "../components/Generic/RepoCard";

export default function ProjectGallery() {

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-b from-gray-950 to-indigo-950 text-white flex">
      <div className="flex flex-col items-center justify-center w-full h-screen px-4">

        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Waaahx&layout=pie&theme=holi&showowner=true"
          alt="Top Languages"
          className="mb-10 mt-2"
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
