import './Section2.css'
import Face6Icon from '@mui/icons-material/Face6';

export const Section2 = () => {
  return (
    <div className='animate__animated animate__fadeInDownBig'>
      <div className="w-full h-scree">
        <div className='flex flex-col justify-center  h-screen relative animate__animated animate__backInRight'>
          <div className='bg-slate-900 bg-opacity-80 border-y-[0.09rem]  border-white py-40 text-center'>
            <h1 className='text-center title-section'><Face6Icon/> PROFILE</h1>
            <div className='text-2xl mx-2 md:mx-96 mt-6'>
              <p className='mt-4 text-orange-100 text-lg p-4'>
                Programmer and Developer with more than 18 years of experience in Back-End, Front-End (FullStack),Technologies: PYTHON, DJANGO, JAVASCRIPT, REACT, .NET, JAVA, C++ </p>
              <p className='mt-1 text-orange-100 text-lg'>Bogotá, Colombia</p>
              <p className='mt-1 text-orange-100 text-lg'>(571) 456-7891</p>
              <p className='mt-1 text-orange-100 text-lg'>creandoappscolombia@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
