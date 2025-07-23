import React from 'react'

function ExpencesCard({title, value, color}) {
  return (
    <>
        <div className="p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col items-center justify-center" style={{ backgroundColor: color }}>
            <span className="md:text-xl text-sm block mb-4 text-[#2C3E50] font-extrabold text-center">{title}</span>
            <span className="md:text-xl text-lg block text-[#2C3E50] font-bold">{value}</span>
        </div>
    </>
  )
}

export default ExpencesCard