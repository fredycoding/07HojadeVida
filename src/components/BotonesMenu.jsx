import React from 'react'
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import Face6Icon from '@mui/icons-material/Face6';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Link, animateScroll as scroll } from "react-scroll";


export const BotonesMenu = () => {

  return (
    <>
      <ul className='fixed flex flex-col gap-16 mt-60 ml-10 z-30 backdrop-blur-sm'>
        <li className='hover:backdrop-sepia'>
          <Link
            activeClass="active"
            to="Section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800} 
            className='btn-flotante rounded-full  border-2 p-4 border-sky-400 text-white '       
          >
            <OtherHousesIcon />
          </Link>
        </li>
        <li className='hover:backdrop-sepia'>
        <Link
            activeClass="active"
            to="Section2"
            spy={true}
            smooth={true}
            offset={-70} 
            className='btn-flotante rounded-full  border-2 p-4 border-sky-400 text-white'                        
          >
            <Face6Icon/>
          </Link>
        </li>
        <li className='hover:backdrop-sepia'>
        <Link
            activeClass="active"
            to="Section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800} 
            className='btn-flotante rounded-full  border-2 p-4 border-sky-400 text-white '             
          >
            <AnalyticsIcon />
          </Link>
        </li>
        <li className='hover:backdrop-sepia'>
        <Link
            activeClass="active"
            to="Section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            className='btn-flotante rounded-full  border-2 p-4 border-sky-400 text-white'              
          >
            <AssuredWorkloadIcon />
          </Link>
        </li>
        <li className='hover:backdrop-sepia' >
        <Link
            activeClass="active"
            to="Section5"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            className='btn-flotante rounded-full  border-2 p-4 border-sky-400 text-white'         
          >
            <ContactsIcon />
          </Link>
        </li>
      </ul>
    </>
  )
}
