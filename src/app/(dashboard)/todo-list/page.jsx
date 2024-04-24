import NavbarComponent from '@/components/NavbarComponent'
import SidebarComponent from '@/components/SidebarComponent'
import React from 'react'
import Image from 'next/image'
import welcom from "../../../../public/assets/icons/image.png"

const todoPage = () => {
  return (
    <div>
    <div className="w-fulln flex">
       <div className=" w-[20%]">
          <SidebarComponent/>
        </div>
        <div className=" w-[80%] ml-4">
          <NavbarComponent/>
        </div>
    </div>
    <div className=" w-[30%] m-auto mt-[-30%]">
    <Image src={welcom}/>
    </div>
    </div>
 
    
  )
}

export default todoPage

