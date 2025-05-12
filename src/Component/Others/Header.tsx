import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'> Ayush 👋</span></h1>
      <button className='bg-red-600 text-white px-3 py-5 rounded-s-sm'>Log-Out</button>
    </div>
  )
}

export default Header
