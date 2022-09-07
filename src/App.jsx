
import { Parallax } from 'react-scroll-parallax'
import { BotonesMenu } from './components/BotonesMenu'
import { Section1 } from './components/Section1'
import { Section2 } from './components/Section2'



function App() {


  return (
    <div>
      <Parallax>       
          <Section1 />        
      </Parallax>
      <Parallax>       
          <Section2 />        
      </Parallax>
    </div>
  )
}

export default App
