'use client'
import Featuredsection from "@/components/Featuredsection"
import Image from "next/image"
import React from "react"
import courseData from '@/data/courses.json'

function page() {
  return (
    <div className="min-h-screen bg-black py-0 pt-36">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">All courses ({courseData.courses.length})</h1>  
      <Featuredsection/>
    </div>
  )
}

export default page
