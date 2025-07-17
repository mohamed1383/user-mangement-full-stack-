import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className='font-medium text-[20px]'>Users</h1>
          <Link href='/addUserPage'>
              <div className="bg-black text-white w-[100px] h-[35px] flex flex-row-reverse 
              items-center justify-center rounded-[5px] gap-1.5 ">
                
                <span className="">add user</span><span className="text-2xl">+</span>
              </div>
          </Link>
        </div>
        <div className="">
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </>
  )
}
