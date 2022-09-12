import { Routes, Route } from "react-router-dom";
import { BotonesMenu } from "../components/BotonesMenu";
import { Section1 } from "../components/Section1";
import { Section2 } from "../components/Section2";
import { Section3 } from "../components/Section3";
import { Section4 } from "../components/Section4";
import { Section5 } from "../components/Section5";

export const AppNavigate = () => {
  return (
    <div className="App">  
    <BotonesMenu/>    
      <Routes>
        <Route path="/" element={<Section1 />} />
        <Route path="profile" element={<Section2 />} />
        <Route path="projects" element={<Section3 />} />
        <Route path="education" element={<Section4 />} />
        <Route path="contact" element={<Section5 />} />      
      </Routes>
    </div>
  )
}
