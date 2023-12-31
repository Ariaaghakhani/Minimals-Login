// 'use client'
import React from 'react'
import Login from './../../../component/login'
import { Public_Sans } from 'next/font/google'
import { redirect } from 'next/navigation'


const pub = Public_Sans({ subsets: ['latin'] })

function page() {


  return (
      <Login />
  )
}

export default page