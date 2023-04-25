import React from 'react'
import { Link } from "react-router-dom";
import ProfileImage from '../../public/user.png'

export default function ProfileAvatar() {
  return (
    <>
      <Link to={"/avatar"} className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300'>
        <img className='w-8 h-8 rounded-full' src={ProfileImage} alt="Avatar" /> 
      </Link>
    </>
  )
}
