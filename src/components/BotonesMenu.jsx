import React from 'react'
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import Face6Icon from '@mui/icons-material/Face6';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import ContactsIcon from '@mui/icons-material/Contacts';
export const BotonesMenu = () => {
  return (
    <>
    <ul className='fixed z-30 align-middle top-1/3 -mt-24'>
      <li>
      <button href="#" className="btn-flotante rounded-full bg-blue-900 ml-10"><OtherHousesIcon/></button>
      </li>
      <li>
      <button href="#" className="btn-flotante rounded-full bg-blue-900 mt-10 ml-10"><Face6Icon/></button>
      </li>
      <li>
      <button href="#" className="btn-flotante rounded-full bg-blue-900 mt-10 ml-10"><AnalyticsIcon/></button>
      </li> 
      <li>
      <button href="#" className="btn-flotante rounded-full bg-blue-900 mt-10 ml-10"><AssuredWorkloadIcon/></button>
      </li> 
      <li>
      <button href="#" className="btn-flotante rounded-full bg-blue-900 mt-10 ml-10"><ContactsIcon/></button>
      </li>     
    </ul>
    </>
  )
}
