import React, {useState} from 'react'
import { navItems as data } from '../data'
import hamburger from '/images/icon-hamburger.svg'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div className='navbar'>
        <img className="logo" src='/images/logo.svg' alt='logo'/>
        <div className={`nav-items ${isOpen ? 'open' : ''}`}>
            {data.map((item, index) => (
                <a key={index} href="#" className="nav-link">{item}</a>
            ))}
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
                <img src={hamburger} alt="Menu" className='menu-btn' />
        </div>
    </div>
  )
}
