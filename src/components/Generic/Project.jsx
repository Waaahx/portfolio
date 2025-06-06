function Project({ name, description, Logo, tags, project }) {
    return (
        <div className="m-2 w-full hover:scale-105 transition-all duration-300 cursor-pointer shadow-[0px_50px_23px_-11px_rgba(0,_0,_0,_0.75)]" onClick={() => window.open(project)}>
            <div className="h-8 bg-gradient-to-r from-slate-900 to-gray-300 relative rounded-t-lg">
                <div className="w-12 h-12 rounded-full absolute -bottom-8 left-4 bg-black flex items-center justify-center"> 
                    {Logo}
                </div>
            </div>
            <div className={`max-w-sm rounded overflow-hidden shadow-lg bg-black text-white transition-all duration-300`}>
                <div className="px-6 py-4">
                    <div className="font-bold flex items-center justify-between text-xl mb-2 mt-6 text-nowrap overflow-hidden">
                        <h1>{name}</h1>
                    </div>
                    <p className="text-base text-gray-300 max-h-64 h-64 overflow-hidden">{description}</p>
                    <div className="border-t-1 border-slate-800 py-2 flex flex-wrap justify-left gap-2">{tags}</div>
                    <div className="border-t-1 border-slate-800 py-2 text-gray-500">
                        {!project ? ( 
                            <p className="italic">Ce projet n'est pas disponible</p>
                        ) : (
                            <p className="">Cliquer pour voir</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
