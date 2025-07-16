import React from 'react'

function Header() {
  return (
    <>
        <div className="flex items-center justify-between p-4 bg-amber-400 shadow-md">
            <h1 className="text-sm font-bold text-white md:text-xl">Expense Tracker</h1>
            <span className="text-sm font-bold text-white md:text-xl">Welcome Hitesh Rana</span>
            <button type="button" className='text-sm md:text-xl p-2 bg-amber-50 rounded-xl cursor-pointer hover:bg-amber-200 transition duration-200'>Logout</button>
        </div>
    </>
  )
}

export default Header