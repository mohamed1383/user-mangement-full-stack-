import React from 'react'

const submitHandler = (e:Event) => {
  e.preventDefault()
}

export default function Inputs() {
  return (
    <div className="w-full flex justify-center mt-20">
      <form className="w-[700px] bg-white rounded-xl border border-[#e4e4e7] p-8" onSubmit={(e) => submitHandler(e)}>
        <h1 className="text-2xl font-semibold mb-6">Add New User</h1>

        <div className="grid grid-cols-2 gap-6">
 
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-[#8e908e] outline-offset-4 focus:border-[2px] focus:border-black text-sm"
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-[#8e908e] outline-offset-4 focus:border-[2px] focus:border-black text-sm"
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-[#8e908e] outline-offset-4 text-sm"
            >
              <option>User</option>
              <option>Editor</option>
              <option>Admin</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-[#8e908e] outline-offset-4 text-sm"
            >
              <option>Active</option>
              <option>Inactive</option>
              <option>Pending</option>
            </select>
          </div>
        </div>


        <div className="mt-8 flex justify-end gap-3">
          <button type="button" className="px-4 py-2 rounded-md border text-sm hover:bg-gray-100">Cancel</button>
          <button type="submit" className="px-4 py-2 rounded-md bg-black text-white text-sm hover:bg-gray-900">
            Create User
          </button>
        </div>
      </form>
    </div>
  )
}


