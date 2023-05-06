import React, { useEffect, useState } from 'react'

export default function NotificationPage() {
  const [notifications, setNotifications] = useState([])
  useEffect(()=>{
    fetch('/api/getNotifications', {
        method: "POST"
    }).then(res=>res.json()).then(setNotifications)
  }, [])
  return (
    <div className='max-w-screen-lg mx-auto mt-4'>
        {notifications.map(item => ( <div className='shadow-md sm:rounded-lg w-full p-2.5 text-gray-800 font-medium my-4 bg-cyan-50'> {item.message} </div>))}
    </div>
  )
}
