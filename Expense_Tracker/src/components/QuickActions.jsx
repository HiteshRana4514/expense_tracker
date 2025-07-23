import React from 'react'

function QuickActions({title, icon}) {
    
  return (
    <>
        <div className="p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex items-center justify-between bg-white cursor-pointer">
            <span className="md:text-lg text-sm block text-gray-800 font-bold">{title}</span>
            <span className="md:text-2xl text-lg">{icon}</span>
        </div>
    </>
  )
}

export default QuickActions