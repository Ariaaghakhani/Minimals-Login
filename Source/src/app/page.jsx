import { redirect } from 'next/navigation'
import React from 'react'


function page() {
  redirect('./login', 'replace')
  return (

    <>
      <h1>Hello next JS</h1>
    </>
  )
}

export default page