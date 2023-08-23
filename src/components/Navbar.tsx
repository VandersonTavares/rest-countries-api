import React from 'react'

import { BsMoon } from "react-icons/bs"

export const Navbar = () => {
    return (
        <nav className='border shadow-sm'>
            <div className='h-20 max-w-6xl mx-auto flex items-center justify-between'>
                <h1 className='font-bold text-lg'>Where in the World?</h1>
                <div className='flex justify-center items-center gap-2 font-semibold'>
                    <BsMoon />
                    <span>Dark Mode</span>
                </div>
            </div>
        </nav>
    )
}
