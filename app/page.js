// import React from 'react'

// const page = () => {
//   return (
//     <>
//     <h1 className='text-center text-2xl font-bold' >This is our Home Page</h1>
//     <a href = "/contact">contact</a>
//     </>
//   )
// }

// export default page
// neeche wle commmentout ka kaam [id] se link hai
// "use client"
// import axios from 'axios'
// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'

// const page = () => {
//   const [users, setusers] = useState([])
//   const getUsers= async() => {
//       const res =  await axios.get("https://jsonplaceholder.typicode.com/users")
//       const data = res.data
//       // console.log(data)
//       setusers(data)
//   }
//   useEffect(() => {
//     getUsers()
//   }, [])
  
//   return (
//     <>
//    <button onClick={getUsers} className='border-2 px-2 py-2 ml-2 mt-2 text-pink-800 rounded-xl bg-gray-200 font-serif'>GET DATA</button>
//    <div className='p-8 bg-gray-200 m-3 rounded-md'>
//     <ul>
//       {users.map((e)=>{
//       return <li>
//        {e.username} --- <a href={`/${e.id}`}>Explore</a>
//       </li>
// })}
// </ul>
//    </div>
//    </>
//   )
// }

// export default page
"use client"
import Header from '@/Components/Header'
import React, { useState } from 'react'

const page = () => {
  const [num, setnum] = useState(10)
  return (
    <div>This is home page
    <Header num = {num}/>
    </div>
  )
}

export default page