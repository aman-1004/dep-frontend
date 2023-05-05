import React, { useEffect, useState } from 'react'

export default function NotificationPage() {
  const [notifications, setNotifications] = useState([])
  useEffect(()=>{
    fetch('/api/getNotifications', {
        method: "POST"
    }).then(res=>res.json()).then(setNotifications)
  }, [])
  return (
    <>
        {notifications.map(item => <div> {item.message} </div>)}
    </>
  )
}
