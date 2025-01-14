


import React from 'react'
import '../App.css'
import WelcomeHeader from './Welcome_Header'
import WelcomeBody from './Welcome_Body'
import WelcomeFooter from './Welcome_Footer'

const Welcome = () => {
  return (
    <div className='welcome-body'>
    <WelcomeHeader />
    <WelcomeBody />
    <WelcomeFooter />
    </div>
  )
}

export default Welcome