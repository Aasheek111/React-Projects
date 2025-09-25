import React from 'react'
import Chat from './Chat'
import VideoChat from './VideoChat'

function Dashboard() {
  return (
    <div className='flex h-screen flex-col sm:flex-row  '>
      <VideoChat />
      <Chat/>
    </div>
  )
}

export default Dashboard