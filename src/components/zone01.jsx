import React from 'react'
import Zone01 from '../assets/zone01.png'

function zone01() {
    return (
        <span onClick={() => {window.open('https://zone01rouennormandie.org/', '_blank')}} className='flex items-center justify-center cursor-pointer'>
            <span className='text-sm font-bold text-blue-500'>Zone 01</span>
            <img src={Zone01} width={32} height={32}></img>
        </span>
    )
}

export default zone01
