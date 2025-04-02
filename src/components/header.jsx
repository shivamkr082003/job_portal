import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
<nav className="py-4 flex justify-between items-center">
    <Link>
    <img src="logo.png" className="h-20" />
    </Link>

    <Button variant="outline">Login</Button>
</nav>
    </>
  )
}

export default Header