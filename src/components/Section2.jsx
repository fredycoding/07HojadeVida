import './Section2.css'

export const Section2 = () => {
  return (
    <div className='animate__animated animate__fadeInDownBig'>
      <div className="w-full h-scree">
        <div className='flex flex-col justify-center  h-screen relative animate__animated animate__backInRight'>
          <div className='bg-slate-900 bg-opacity-80 border-y-[0.09rem]  border-white py-40 text-center'>
          <h1 className=' text-4xl font-bold text-slate-100 text-center'>PERFIL</h1>
          <div className='text-2xl mx-2 md:mx-96'>
            <p className='mt-4 text-slate-300'>
              Programmer and Developer with more than 18 years of experience in Back-End and developments implemented with .NET, JAVA, C++, JAVASCRIPT, PYTHON, DJANGO</p>
            <p className='mt-1 text-slate-300'>Bogotá, Colombia</p>
            <p className='mt-1 text-slate-300'>(571) 456-7891</p>
            <p className='mt-1 text-slate-300'>micorreo@gmail.com</p>
          </div>
          <h2 className='mt-4 text-slate-600 text-3xl font-sans tracking-widest'>I'm a <span className=' text-sky-800 animate-pulse'>8564654</span></h2>
          <p className='mt-4 text-slate-600 text-2xl font-sans tracking-widest'>Developer skills:<span className=' text-sky-800'>Python, Django, .NET, Java, Javascript, C++, React</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
