import React, { useState, useEffect } from 'react'
import { BrowserView, MobileView} from 'react-device-detect'
import imagenFondo from '../assets/backgroundImage.jpg'



export const VideoFondo = () => {

  return (
    <>
      <BrowserView>
        <video src="src/assets/bgvideo7.m4v" className='videosize -ml-10' autoPlay={true} muted={true} loop={true}></video>
      </BrowserView>
      <MobileView>
      <video src="src/assets/bgvideomobile7.mp4" className='videosize -ml-10' autoPlay={true} muted={true} loop={true}></video>
      </MobileView>
    </>
  )
}
