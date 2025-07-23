import React from 'react'
import RecentTranscation from '../../components/RecentTranscation'

function Transction() {
  return (
    <>
      <div className="p-4 bg-[#F5F9FF] shadow-xl min-h-full w-full overflow-y-auto rounded-xl">
        <RecentTranscation action={true}/>
      </div>

    </>
  )
}

export default Transction