import React, { useState, useEffect } from 'react'


export const VideoFondo = () => {
  const [isMobile, setIsMobile] = useState(false)

//Detecta si esta en movil o pc para cambiar el estado y asi saber si cambiamos el video
const handleResize = () => {
  if (window.innerWidth < 1000) {
      setIsMobile(true)
 
  } else {
      setIsMobile(false)
      
  }
}

// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize)
})

  return (
    (isMobile)?
    <video src="src/assets/bgvideomobile7.mp4" className='videosize -ml-80' autoPlay="true" muted="true" loop={true}></video>
    :
    <video src="src/assets/bgvideo7.m4v" className='videosize -ml-10'  autoPlay="true" muted="true" loop={true}></video>
  )
}
