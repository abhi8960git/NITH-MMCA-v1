import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
   <nav>
    <div className=' p-5 shadow-lg'>
        <div>
            <div className='flex justify-between text-[30px] font-[700]  '>
                <div>
               <Link href="/">
                <h1>NITH MMCA</h1>
               </Link>
               </div>
            <div className='flex gap-4'>

               

               <Link href="/student" className=' hover:text-blue-400 '>
               <h1>Students</h1>
               </Link>

               <Link href="/requests" className=' hover:text-blue-400 '>
               <h1>Requests</h1>
               </Link>

               <Link href="/form-record" className=' hover:text-blue-400 '>
               Form Record
               </Link>
               </div>
               
            </div>
        </div>
    </div>
   </nav>
  )
}

export default Navbar