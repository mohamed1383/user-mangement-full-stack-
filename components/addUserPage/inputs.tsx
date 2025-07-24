import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'


type AddUserInput = {
  name: string;
  email: string;
  password: string;
  rule: string;
  status: string;
};

const addUser = async (name: string, email: string, password: string, rule: string, status: string) => {

  const changedWord = rule.replace(/\b\w/g, char => char.toUpperCase())

  console.log(rule)

  const add = await axios.post(`http://localhost:3000/api/${changedWord}`, {
    name,
    email,
    password,
    rule,
    status
  })

  return add.data
}

export default function Inputs() {

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    status: "active"
  })

  const addUserHandler = useMutation({
    mutationKey: ["addUser"],
    mutationFn: (data: AddUserInput) => addUser(data.name, data.email, data.password, data.rule, data.status)
  })

  const submitHandler = (e: Event) => {
    e.preventDefault()

    const { name, email, password, role, status } = userInfo

    if (name && email && password && role && status) {
      addUserHandler.mutate({
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
        rule: userInfo.role,
        status: userInfo.status
      })
    }

    console.log(addUserHandler.data, addUserHandler.error)
  }

  const changeFieldHandler = (e: Event) => {

    let fieldType = e.target.name
    let fieldValue = e.target.value

    switch (fieldType) {
      case "name": {
        setUserInfo((prev) => ({ ...prev, name: fieldValue }))
        break
      }

      case "email": {
        setUserInfo((prev) => ({ ...prev, email: fieldValue }))
        break
      }

      case "password": {
        setUserInfo((prev) => ({ ...prev, password: fieldValue }))
        break
      }

      case "role": {
        setUserInfo((prev) => ({ ...prev, role: fieldValue }))
        break
      }

      case "status": {
        setUserInfo((prev) => ({ ...prev, status: fieldValue }))
        break
      }
    }
  }

  const cancelCreateUser = () => {
    setUserInfo({
      name: "",
      email: "",
      password: "",
      role: "user",
      status: "active"
    })
  }

  useEffect(() => {
    console.log(userInfo)
  }, [userInfo])

  return (
    <div className="w-full flex justify-center mt-20">
      <form className="w-[700px] bg-white rounded-xl border border-[#e4e4e7] p-8" onSubmit={(e) => submitHandler(e)}>
        <h1 className="text-2xl font-semibold mb-6">Add New User</h1>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              onChange={(e) => changeFieldHandler(e)}
              name='name'
              value={userInfo.name}
              required
              placeholder="Enter full name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-[#8e908e] outline-offset-4 focus:border-[2px] focus:border-black text-sm"
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              onChange={(e) => changeFieldHandler(e)}
              name='email'
              value={userInfo.email}
              required
              placeholder="Enter email address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-[#8e908e] outline-offset-4 focus:border-[2px] focus:border-black text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              onChange={(e) => changeFieldHandler(e)}
              name='password'
              value={userInfo.password}
              required
              placeholder="Enter password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-[#8e908e] outline-offset-4 focus:border-[2px] focus:border-black text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              onChange={(e) => changeFieldHandler(e)}
              name='role'
              value={userInfo.role}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-[#8e908e] outline-offset-4 text-sm"
            >
              <option>user</option>
              <option>editor</option>
              <option>admin</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              onChange={(e) => changeFieldHandler(e)}
              name='status'
              value={userInfo.status}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-[#8e908e] outline-offset-4 text-sm"
            >
              <option>active</option>
              <option>inactive</option>
              <option>pending</option>
            </select>
          </div>
        </div>


        <div className="mt-8 flex justify-end gap-3">
          <button onClick={cancelCreateUser} type="button" className="px-4 py-2 rounded-md border text-sm hover:bg-gray-100">Cancel</button>
          <button type="submit" className="px-4 py-2 rounded-md bg-black text-white text-sm hover:bg-gray-900">
            Create User
          </button>
        </div>
      </form>
    </div>
  )
}


