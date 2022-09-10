import { CardJobs } from "./CardJobs"


export const Section3 = () => {
  return (
    <div className='w-full h-screen animate__animated animate__fadeInDownBig'>
      <div className=" bg-slate-900 bg-opacity-60 border-y-[0.09rem] border-white my-40">
        <div className='flex flex-col justify-start md:justify-center h-screen animate__animated animate__backInRight'>
          <h1 className=' text-4xl font-normal text-slate-200 text-center -mt-20 uppercase glow'>Projects</h1>
          <div className='ajustarTarjetas gap-10 justify-center'>            
            <CardJobs titulo="App Rick and Morty" texto="Application made with Javascript, calling an API to read data." imagen="https://user-images.githubusercontent.com/16197568/189462974-70607a39-98c5-4c90-825c-10767628d639.png" url="https://riackandmorty-27d93.web.app/" urlgithub="https://github.com/xbox360colombia/RickandMorty-api-AxiosJS"/>
            <CardJobs titulo="App Trello" texto="Application made with Javascript, Firebase, calling a Firestore Database for save data of To Do list." urlgithub="https://github.com/xbox360colombia/Listado_de_tareas_Firebase_Javascript" url="https://trelloexercise.web.app/" imagen="https://user-images.githubusercontent.com/16197568/180519807-fd246b4b-6898-444f-b377-6818dc433380.png" />
            <CardJobs titulo="App Super Heroes" url="https://coruscating-trifle-23bf34.netlify.app/" urlgithub="https://github.com/xbox360colombia/06MarvelandDc" texto="Marvel and DC application developed in React, which displays the superheroes of these comics" imagen="https://user-images.githubusercontent.com/16197568/189464464-92d5c403-7a4e-4db0-b430-378b6d7c3004.png" />
            <CardJobs titulo="App Trello" />
            <CardJobs titulo="App Trello" />
            <CardJobs titulo="App Trello" />
          </div>          
        </div>
      </div>
    </div>
  )
}
