import React, { useEffect, useState } from 'react';
import {
    Javascript, _React, NodeJS, Tailwind, MySql, Golang, Rust,
    Python, Skript, VBS, MongoDB, Supabase, Shell, Powershell,
    Java, Gitea, GitHub, HTML, CSS, Php,
} from './Tag.jsx';

import { FaBookBookmark } from "react-icons/fa6";

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

    useEffect(() => {
        fetch(`https://api.github.com/repos/${username}/${repoName}`)
            .then(res => res.ok ? res.json() : null)
            .then(setRepoData)
            .catch(() => setRepoData(null));

        fetch(`https://api.github.com/repos/${username}/${repoName}/languages`)
            .then(res => res.ok ? res.json() : null)
            .then(setLanguages)
            .catch(() => setLanguages(null));
    }, [username, repoName]);

    const languagesList = languages
        ? Object.entries(languages)
            .sort((a, b) => b[1] - a[1])
            .map(([lang]) => lang)
        : [];

    return (
        <div className="border rounded-lg p-4 bg-gray-900 transition block max-w-sm">
            <h3 className="text-lg font-semibold flex items-center hover:underline cursor-pointer" onClick={() => window.open(`https://github.com/${username}/${repoName}`, '_blank', 'noopener noreferrer')}>
                <FaBookBookmark />&nbsp;&nbsp;{username}/{repoName}
            </h3>

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

            <p className="text-gray-400 text-sm my-2">
                {repoData?.description || ''}
            </p>

            {languagesList.length > 0 && (
                <div className="flex flex-wrap gap-2 text-xs mt-2">
                    {languagesList.map(lang =>
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
        </div>
    );
}

export default RepoCard;
