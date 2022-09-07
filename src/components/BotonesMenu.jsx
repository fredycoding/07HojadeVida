import React from 'react'
import iconhome from "../assets/home-icon.svg"
export const BotonesMenu = () => {
  return (
    <nav className="fixed">
      <button
        className='rounded-full bg-blue-700 hover:bg-blue-400 text-white p-2'><img src={iconhome} className="text-white w-8 h-8" /></button>
      <button
        className='rounded-full bg-blue-700 hover:bg-blue-400 text-white p-2 mt-4'><img src={iconhome} className="text-white w-8 h-8" /></button>
    </nav>
  )
}
