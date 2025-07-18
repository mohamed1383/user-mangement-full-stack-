import React from 'react'

export default function UserInfo() {
    return (
        <div className="flex items-center justify-between py-4 px-6 border-t border-[#e4e4e7] transition duration-200 hover:bg-[#f4f4f580]">

            <div className=" flex items-center gap-3 w-[220px]">
                <div className="w-9 h-9 rounded-full bg-gray-200"></div>
                <div className="flex flex-col text-sm">
                    <p className="font-medium text-gray-900">John Doe</p>
                    <p className="text-gray-500">john@example.com</p>
                </div>
            </div>


            <div className=" text-xs font-medium px-3 py-1 rounded-full text-purple-800 bg-purple-100">
                Admin
            </div>


            <div className=" text-xs font-medium px-3 py-1 rounded-full text-green-800 bg-green-100">
                active
            </div>


            <div className=" flex justify-center items-center w-8 h-8 hover:bg-gray-100 rounded-md cursor-pointer">
                <span className="text-lg">...</span>
            </div>

        </div>
    )
}
