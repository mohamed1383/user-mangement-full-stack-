import React from 'react'
import UserInfo from './userInfo'
import ReactPaginate from 'react-paginate'

export default function Table({allUsers} : {allUsers: any}) {

  return (
    <>
      <div className='w-full h-[62%] mt-5 border rounded-[10px] border-[#e4e4e7] bg-white box-border px-8 overflow-auto'>
        <h1 className='mt-4 font-semibold font-sans text-2xl mb-6'>User Management</h1>
        <div className="flex flex-col">
          <div className="flex items-center justify-between py-4 px-6 transition duration-200 hover:bg-[#f4f4f580]">

            <div className="w-[220px] text-[#71717a]">
              user
            </div>


            <div className="text-[#71717a]">
              rule
            </div>


            <div className="text-[#71717a]">
              status
            </div>


            <div className="text-[#71717a]">
              actions
            </div>

          </div>

          {allUsers?.map((item: any) => (<UserInfo {...item}></UserInfo>))}
        </div>
      </div>

      <ReactPaginate
        pageCount={Math.ceil(allUsers.length / 4)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={(e) => console.log("Page:", e.selected + 1)}
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        containerClassName="flex gap-2 items-center justify-center mt-8"
        activeLinkClassName="bg-purple-600 text-white hover:text-purple-600"
        pageClassName="rounded"
        pageLinkClassName="px-3 py-1 text-purple-600 text-sm bg-gray-100 hover:bg-gray-200 rounded block text-center"
        previousClassName="rounded"
        previousLinkClassName="px-3 py-1 text-sm border block rounded-[5px] border-purple-600 transition duration-200 hover:text-white hover:bg-purple-600"
        nextClassName="rounded"
        nextLinkClassName="px-3 py-1 text-sm border block rounded-[5px] border-purple-600 transition duration-200 hover:text-white hover:bg-purple-600"
        breakClassName="text-gray-400"
        breakLinkClassName="px-3 py-1 text-sm"
      />
    </>
  )
}
