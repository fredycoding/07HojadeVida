import { CardJobs } from "./CardJobs"


export const Section3 = () => {
  return (
    <div className='w-full h-screen animate__animated animate__fadeInDownBig'>
      <div className=" bg-slate-900 bg-opacity-60 border-y-[0.09rem] border-white my-40">
        <div className='flex flex-col justify-start md:justify-center h-screen animate__animated animate__backInRight'>
          <h1 className=' text-4xl font-normal text-slate-200 text-center -mt-20 uppercase glow'>Projects</h1>
          <div className='ajustarTarjetas gap-10 justify-center'>            
            <CardJobs titulo="App Rick and Morty" texto="Application made with Javascript, calling an API to read data." imagen="https://user-images.githubusercontent.com/16197568/189462974-70607a39-98c5-4c90-825c-10767628d639.png" url="https://riackandmorty-27d93.web.app/" urlgithub=""/>
            <CardJobs titulo="App Trello" texto="Application made with Javascript, calling an API to read data." />
            <CardJobs titulo="App Super Heroes" />
            <CardJobs titulo="App Trello" />
            <CardJobs titulo="App Trello" />
            <CardJobs titulo="App Trello" />
          </div>          
        </div>
      </div>
    </div>
  )
}
