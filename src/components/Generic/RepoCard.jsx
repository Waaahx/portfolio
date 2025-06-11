import React, { useEffect, useState } from 'react';

// Importe tes tags ici
import {
  Javascript, _React, NodeJS, Tailwind, MySql, Golang, Rust,
  Python, Skript, VBS, MongoDB, Supabase, Shell, Powershell,
  Java, Gitea, GitHub, HTML, CSS, Php,
} from './Tag.jsx'; // ajuste le chemin

const languageComponentsMap = {
  JavaScript: <Javascript />,
  React: <_React />,
  Node: <NodeJS />,
  Tailwind: <Tailwind />,
  MySQL: <MySql />,
  Go: <Golang />,
  Rust: <Rust />,
  Python: <Python />,
  Skript: <Skript />,
  VBS: <VBS />,
  MongoDB: <MongoDB />,
  Supabase: <Supabase />,
  Shell: <Shell />,
  PowerShell: <Powershell />,
  Java: <Java />,
  Gitea: <Gitea />,
  GitHub: <GitHub />,
  HTML: <HTML />,
  CSS: <CSS />,
  PHP: <Php />,
};

function RepoCard({ username, repoName }) {
  const [repoData, setRepoData] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const repoFetch = fetch(`https://api.github.com/repos/${username}/${repoName}`).then(res => {
      if (!res.ok) throw new Error('Repo non trouvé');
      return res.json();
    });

    const langFetch = fetch(`https://api.github.com/repos/${username}/${repoName}/languages`).then(res => {
      if (!res.ok) throw new Error('Langages non trouvés');
      return res.json();
    });

    Promise.all([repoFetch, langFetch])
      .then(([repoData, langData]) => {
        setRepoData(repoData);
        setLanguages(langData);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [username, repoName]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  const languagesList = languages
    ? Object.entries(languages)
        .sort((a, b) => b[1] - a[1])
        .map(([lang]) => lang)
    : [];

  return (
    <a
      href={repoData.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded-lg p-4 bg-gray-900 hover:bg-gray-800 transition block max-w-sm"
    >
      <h3 className="text-lg font-semibold">{repoData.name}</h3>
      <div className="flex space-x-2 text-xs mb-2 my-2">
        <img
          src={`https://img.shields.io/github/stars/${username}/${repoName}?style=flat-square`}
          alt="Stars"
        />
        <img
          src={`https://img.shields.io/github/forks/${username}/${repoName}?style=flat-square`}
          alt="Forks"
        />
        <img
          src={`https://img.shields.io/github/issues/${username}/${repoName}?style=flat-square`}
          alt="Issues"
        />
      </div>
      <p className="text-gray-400 text-sm my-2">{repoData.description || 'Pas de description'}</p>

      {languagesList.length > 0 && (
        <div className="flex flex-wrap gap-2 text-xs mt-2">
          {languagesList.map((lang) =>
            languageComponentsMap[lang] ? (
              <React.Fragment key={lang}>{languageComponentsMap[lang]}</React.Fragment>
            ) : (
              <span
                key={lang}
                className="bg-gray-700 text-white rounded px-2 py-1"
                title={`Langage utilisé : ${lang}`}
              >
                {lang}
              </span>
            )
          )}
        </div>
      )}
    </a>
  );
}

export default RepoCard;
