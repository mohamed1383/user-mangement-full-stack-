import React from 'react'
import Link from 'next/link'
import { FaUserCheck } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";

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
        <div className="mt-5 flex gap-10">
          <div className="w-[280px] h-[120px] border rounded-[10px] px-4 py-4 border-[#e4e4e7] bg-white">
              <div className="w-full flex justify-between mb-4">
                <span>Total users</span><FiUsers className='text-blue-700'></FiUsers>
              </div>
              <h1 className="font-bold text-2xl">12</h1>
          </div>
          <div className="w-[280px] h-[120px] border rounded-[10px] px-4 py-4 border-[#e4e4e7] bg-white">
              <div className="w-full flex justify-between mb-4">
                <span>Active Users</span><FaUserCheck className='text-green-600'></FaUserCheck>
              </div>
              <h1 className="font-bold text-2xl">12</h1>
          </div>
        </div>
      </div>
    </>
  )
}
