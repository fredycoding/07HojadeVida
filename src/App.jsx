
import { Parallax } from 'react-scroll-parallax'
import { BotonesMenu } from './components/BotonesMenu'
import { Section1 } from './components/Section1'
import { Section2 } from './components/Section2'
import { Section3 } from './components/Section3'
import { Section4 } from './components/Section4'
import { Section5 } from './components/Section5'
import { VideoFondo } from './components/VideoFondo'



function App() {


  return (
    <div>
       <VideoFondo/>
      <Parallax>       
          <Section1 />        
      </Parallax>
      <Parallax>       
          <Section2 />        
      </Parallax>
      <Parallax>       
          <Section3 />        
      </Parallax>
      <Parallax>       
          <Section4 />        
      </Parallax>
      <Parallax>       
          <Section5 />        
      </Parallax>
 
    </div>
  )
}

export default App
