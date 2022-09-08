import { CardJobs } from "./CardJobs"


export const Section3 = () => {
  return (
    <div className='animate__animated animate__fadeInDownBig'>
    <div className="w-full h-screen bg-no-repeat bg-cover bg-left bg-fixed">
      <div className='flex flex-col justify-start md:justify-center pt-12 md:pt-20 h-screen pl-6 md:pl-40 relative animate__animated animate__backInRight'>
        <h1 className=' text-4xl font-normal text-slate-900'>Trabajos</h1>
        <div className='flex flex-row gap-3'>
          <CardJobs/>
          <CardJobs/>
        </div>
        <h2 className='mt-4 text-slate-600 text-3xl font-sans tracking-widest'>I'm a <span className=' text-sky-800 animate-pulse'>8564654</span></h2>
        <p className='mt-4 text-slate-600 text-2xl font-sans tracking-widest'>Developer skills:<span className=' text-sky-800'>Python, Django, .NET, Java, Javascript, C++, React</span></p>
      </div>
    </div>
  </div>
  )
}
