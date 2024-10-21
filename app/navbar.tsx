import React from 'react'
import Link from "next/link";

const navbar = () => {
  return (
    <div className='flex bg-slate-200 p-5'>
        <Link className="mr-3" href="/">Next Js</Link>
        <Link className="mr-3" href="/users">Users</Link>
        <Link href="/products">Products</Link>
    </div>
  )
}

export default navbar