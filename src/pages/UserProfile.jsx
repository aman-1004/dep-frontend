import React from 'react'
import { useContext } from 'react'
import { useState, useEffect, useRef} from 'react'
import { LoginContext } from '../LoginContext'
import { stringify } from 'postcss'
import Form from '../components/Form'
import Input from '../components/Input'

function formatDate(date) {
    return new Date(date).toISOString().substring(0, 10)
}

export default function UserProfile() {
    const [user, setUser] = useContext(LoginContext) 
    const imgRef = useRef(null)
    useEffect(()=>{
      fetch('/api/getSignImage', {method:"POST"}).then(res => res.blob()).then(blob => {
        const url = URL.createObjectURL(blob);
        imgRef.current.src = url
      })
      console.log('user is', user)
    }, [])
  return (
    // <div>{JSON.stringify(user)}</div>

  <Form>
    <Input label={"First Name"} name="First Name" type="text" value={user.firstName} readOnly />
    <Input label={"Last Name"} name="Last Name" type="text" value={user.lastName} readOnly />
    {/* <Input label={"Designation"} name="Designation" type="text" value={user.designation} readOnly /> */}
    <Input label={"Date Of Joining"} name="Date of Joining" type="date" value={formatDate(user.dateOfJoining)} readOnly />
    <img ref={imgRef} placeholder='signature.jpg'></img>
  </Form>
  )
}
