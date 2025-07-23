import React from 'react'

function Header() {
  return (
    <>
        <div className="flex items-center justify-between p-4 bg-[#F5F9FF] shadow-md">
            <h1 className="text-sm font-bold text-[#2C3E50] md:text-xl">Expense Tracker</h1>
            <span className="text-sm font-bold text-[#2C3E50] md:text-xl">Welcome Hitesh Rana</span>
            <button type="button" className='text-sm md:text-xl p-2 bg-[#007BFF] text-[#FFFFFF] rounded-xl cursor-pointer hover:bg-[#5BC0EB] transition duration-200'>Logout</button>
        </div>
    </>
  )
}

export default Header