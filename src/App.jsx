
import { Parallax } from 'react-scroll-parallax'
import { BotonesMenu } from './components/BotonesMenu'
import { Section1 } from './components/Section1'



function App() {


  return (
    <div>
      <Parallax>       
          <Section1 />        
      </Parallax>
      <Parallax>       
          <Section1 />        
      </Parallax>
    </div>
  )
}

export default App
