import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
  return (
<header className="w-100 px-10 py-2">
    <div className="flex">
        <Logo/>
        <Navbar/>
    </div>
</header>
  )
}

export default Header