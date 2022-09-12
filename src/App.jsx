import { Section1 } from '../src/components/Section1'
import { Section2 } from '../src/components/Section2'
import { Section3 } from '../src/components/Section3'
import { Section4 } from '../src/components/Section4'
import { Section5 } from '../src/components/Section5'
import { BotonesMenu } from '../src/components/BotonesMenu'
import { VideoFondo } from '../src/components/VideoFondo'
import { NavBarCustom } from './components/NavBarCustom'
import { BrowserView, MobileView } from 'react-device-detect'


function App() {
  return (
    <>
      <VideoFondo />
      <BrowserView>
        <BotonesMenu />
      </BrowserView>
      <MobileView>
      <NavBarCustom />        
      </MobileView>
      

      <div id="Section1">
        <Section1 />
      </div>
      <div id="Section2">
        <Section2 />
      </div>
      <div id="Section3">
        <Section3 />
      </div>
      <div id="Section4">
        <Section4 />
      </div>
      <div id="Section5">
        <Section5 />
      </div>


    </>
  )
}

export default App
