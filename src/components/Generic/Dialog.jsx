import React from 'react'
import me from '../../assets/me.jpg'

function Dialog({ text }) {
    return (
        <div className="flex justify-start items-start sm:justify-center sm:items-center px-4 sm:px-6 w-full">
            <div className="bg-black/90 flex flex-col justify-start p-6 sm:p-8 rounded-xl w-full sm:w-4/5 md:w-2/3 lg:w-1/3 z-10 shadow-lg">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img src={me} alt="me" className="w-full h-full object-cover" />
                    </div>
                    <h1 className="text-xl font-bold">Waahx_</h1>
                </div>

                {/* Texte */}
                <div className="text-gray-300 space-y-3 text-base leading-relaxed">
                    <p>{text}</p>
                </div>
            </div>
        </div>

    )
}

export default Dialog
