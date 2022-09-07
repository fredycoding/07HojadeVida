import './Section1.css'
import 'animate.css';
import { useCallback, useEffect, useState } from 'react';

const names = [
  'Designer', 'Video Editor', 'Audiovisual Producer'
]


export const Section1 = () => {

  const [newName, setnewName] = useState("Developer");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 2000);
        return () => clearInterval(intervalID);
    }, [shuffle])

  return (
    <>
      <div className="w-full h-screen bg-no-repeat bgimage bg-cover bg-left bg-fixed">

        <div className='flex flex-col justify-center h-screen pl-40 relative animate__animated animate__backInRight'>
          <h1 className=' text-6xl font-bold text-slate-600'>Fredy A. Diaz B.</h1>
          <h2 className='mt-4 text-slate-600 text-3xl font-sans tracking-widest'>I'm a <span className=' text-sky-800 animate-pulse'>{newName}</span></h2>
          <p className='mt-4 text-slate-600 text-2xl font-sans tracking-widest'>Developer skills:<span className=' text-sky-800'>Python, Django, .NET, Java, Javascript, C++, React</span></p>
        </div>
      </div>
    </>







  )
}
