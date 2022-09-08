import './Section2.css'

export const Section2 = () => {
  return (
    <div className='bgimageSection2 animate__animated animate__fadeInDownBig'>
      <div className="w-full h-screen bg-no-repeat bg-cover bg-left bg-fixed">
        <div className='flex flex-col justify-start md:justify-center pt-12 md:pt-20 h-screen pl-6 md:pl-40 relative animate__animated animate__backInRight'>
          <h1 className=' text-4xl font-normal text-slate-900'>PERFIL</h1>
          <div className='md:w-1/4 text-1xl'>
            <p className='mt-4'>
              Programmer and Developer with more than 18 years of experience in Back-End and developments implemented with .NET, JAVA, C++, JAVASCRIPT, PYTHON, DJANGO</p>
            <p className='mt-1'>Bogotá, Colombia</p>
            <p className='mt-1'>(571) 456-7891</p>
            <p className='mt-1'>micorreo@gmail.com</p>
          </div>
          <h2 className='mt-4 text-slate-600 text-3xl font-sans tracking-widest'>I'm a <span className=' text-sky-800 animate-pulse'>8564654</span></h2>
          <p className='mt-4 text-slate-600 text-2xl font-sans tracking-widest'>Developer skills:<span className=' text-sky-800'>Python, Django, .NET, Java, Javascript, C++, React</span></p>
        </div>
      </div>
    </div>
  )
}
