import { CardJobs } from "./CardJobs"


export const Section3 = () => {
  return (
    <div className='w-full h-screen animate__animated animate__fadeInDownBig'>
      <div className=" bg-slate-900 bg-opacity-60 border-y-[0.09rem] border-white my-40">
        <div className='flex flex-col justify-start md:justify-center h-screen animate__animated animate__backInRight'>
          <h1 className=' text-4xl font-normal text-slate-200 text-center -mt-20 uppercase'>Projects</h1>
          <div className='ajustarTarjetas gap-10 justify-center'>
            <CardJobs titulo="App Trello" />
            <CardJobs titulo="App Super Heroes" />
            <CardJobs titulo="App Rick and Morty" />
            <CardJobs titulo="App Trello" />
            <CardJobs titulo="App Trello" />
            <CardJobs titulo="App Trello" />
          </div>          
        </div>
      </div>
    </div>
  )
}
