import React from 'react'
import { Link } from "react-router-dom";

export default function NotificationBar() {
  return (
    <>
      <Link to={"/notification"} className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-8 focus:ring-4 focus:ring-gray-300'
      ><img className='w-8 h-8 rounded-full' src="" alt="Notifications" /> </Link>
    </>
  )
}
