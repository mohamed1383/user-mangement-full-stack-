import Link from "next/link";
import { FiUsers } from "react-icons/fi";
import { HiOutlineUserAdd } from "react-icons/hi";


export default function Menu({ activeBtn }: { activeBtn: boolean }) {
    return (
        <>
            <div className="absolute left-0 top-0 bottom-0 border-r-1 pr-3 border-[#e4e4e7] bg-white">
                <ul className="list-none pt-5 space-y-10 pl-5">
                    <Link href='/'>
                        <li className={`flex w-[250px] ${activeBtn ? "bg-[#f4f4f5cc]" : ""} pl-3 h-10 items-center gap-3 transition duration-300 hover:bg-[#f4f4f5cc] rounded-[10px]`}><FiUsers></FiUsers><span>Users</span></li>
                    </Link>

                    <Link href='/addUserPage'>
                        <li className={`flex mt-2 w-[250px] ${!activeBtn ? "bg-[#f4f4f5cc]" : ""} pl-3 h-10 items-center gap-3 transition duration-300 hover:bg-[#f4f4f5cc] rounded-[10px]`}><HiOutlineUserAdd></HiOutlineUserAdd><span>add user</span></li>
                    </Link>
                </ul>
            </div>
        </>
    )
}


// #f4f4f5cc #e4e4e7

