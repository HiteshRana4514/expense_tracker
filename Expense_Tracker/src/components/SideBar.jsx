import React from 'react'
import {LayoutDashboard, ArrowLeftRight, FileChartColumn, Settings, MessageCircleQuestionMark} from 'lucide-react'
import Dashboard from '../pages/Dashboard';

function SideBar({setShowMenu}) {
  return (
    <>
        <div className="flex flex-col space-y-4 mb-4" onClick={(e)=>{
            if(e.target.tagName === 'BUTTON') {
                setShowMenu(false);
            }
        }}>
            <button className="p-2 bg-amber-400 rounded-lg hover:bg-amber-500 transition duration-300 cursor-pointer flex items-center space-x-2 flex-col">
                <LayoutDashboard  className='mb-2'/>
                Dashboard
            </button>
            <button className="p-2 bg-amber-400 rounded-lg hover:bg-amber-500 transition duration-300 cursor-pointer flex items-center space-x-2 flex-col">
                <ArrowLeftRight className='mb-2'/>
                Transactions
            </button>
            <button className="p-2 bg-amber-400 rounded-lg hover:bg-amber-500 transition duration-300 cursor-pointer flex items-center space-x-2 flex-col">
                <FileChartColumn className='mb-2'/>
                Reports
            </button>       
            <button className="p-2 bg-amber-400 rounded-lg hover:bg-amber-500 transition duration-300 cursor-pointer flex items-center space-x-2 flex-col">
                <Settings className='mb-2'/>
                Settings
            </button>
            <button className="p-2 bg-amber-400 rounded-lg hover:bg-amber-500 transition duration-300 cursor-pointer flex items-center space-x-2 flex-col">
                <MessageCircleQuestionMark className='mb-2'/>
                Help
            </button>
        </div>
        {/* <div className="mt-auto p-2 bg-amber-400 rounded-lg hover:bg-amber-500 transition duration-300">
            <button className="w-full text-center">
                Logout
            </button>
        </div> */}
    </>
  )
}

export default SideBar