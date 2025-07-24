import React from 'react'
import { TbEdit } from "react-icons/tb";
import { BsTrash3 } from "react-icons/bs";

export default function UserInfo({ name, email, rule, status }: { name: string, email: string, rule: string, status: string }) {
    return (
        <div className="flex items-center justify-between py-4 px-[24px] border-t border-[#e4e4e7] transition duration-200 hover:bg-[#f4f4f580]">

            <div className=" flex items-center gap-3 w-[220px]">
                <div className="w-9 h-9 rounded-full bg-gray-200"></div>
                <div className="flex flex-col text-sm">
                    <p className="font-medium text-gray-900">{name}</p>
                    <p className="text-gray-500">{email}</p>
                </div>
            </div>


            <div className={`text-xs font-medium px-3 py-1 rounded-full ${rule == "admin" ? "text-purple-800 bg-purple-100" 
                            : rule == "editor" ? "bg-blue-100 text-blue-800" : "bg-gray-200 text-gray-800"}`}>
                {rule}
            </div>


            <div className={`text-xs font-medium px-3 py-1 rounded-full 
                ${status == "active" ? "bg-green-100 text-green-800" : status == "inactive" ?
                    "text-red-800 bg-red-100" : "bg-yellow-100 text-yellow-800"}`}>
                {status}
            </div>


            <button className=" flex justify-center items-center w-8 h-8 hover:bg-gray-100 rounded-md group relative focus:bg-[#e4e4e7]">
                <span className="text-lg cursor-pointer relative">...</span>
                <div className="hidden absolute group-focus:flex top-[-215%] left-[-200%] w-[150px] h-[65px]
                 bg-white px-1.5 py-1.5 rounded-[10px] border border-[#e4e4e7]">

                    <ul className="w-full h-full space-y-1">
                        <li className="w-full flex items-center rounded-[5px] gap-2 hover:bg-[#e4e4e7] pl-2.5 transition duration-200"><TbEdit></TbEdit><span>edit user</span></li>
                        <li className="w-full flex items-center rounded-[5px] gap-2 hover:bg-[#e4e4e7] pl-2.5 text-red-500 transition duration-200"><BsTrash3></BsTrash3><span>delete user</span></li>
                    </ul>
                </div>
            </button>

        </div>
    )
}
