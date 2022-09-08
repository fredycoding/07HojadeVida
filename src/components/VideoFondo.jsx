import React, { useState, useEffect } from 'react'


export const VideoFondo = () => {
  const [isMobile, setIsMobile] = useState(false)

//choose the screen size 
const handleResize = () => {
  if (window.innerWidth < 720) {
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
    <video src="src/assets/bgvideo7.m4v" autoplay="true" muted="true" loop="true"></video>
  )
}
