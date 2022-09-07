import { BotonesMenu } from './components/BotonesMenu'
import { Section1 } from './components/Section1'
import { Parallax, ParallaxBannerLayer } from 'react-scroll-parallax'
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
