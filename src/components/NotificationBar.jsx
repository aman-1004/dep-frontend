import React from 'react'
import { Link } from "react-router-dom";
import NotificationIcon from '../../public/notification-icon.png'

export default function NotificationBar() {
  return (
    <>
      <Link to={"/notification"} className='flex mr-3 text-sm  rounded-full md:mr-8 focus:ring-4 focus:ring-gray-300'
      ><img className='w-8 h-8 rounded-full'  alt="Notifications" src={NotificationIcon}/> </Link>
    </>
  )
}
