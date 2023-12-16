import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    return (
        <div className='fixed w-full z-10'>
            <div>
                <div className='flex flex-row justify-between items-center p-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    <div className='flex flex-row items-center cursor-pointer'>
                        <a href="/">
                            <h1 className='text-3xl font-medium text-secondaryColor text-semibold'>Loya.</h1>
                        </a>
                    </div>

                    {/* links */}
                    <nav className='hidden lg:flex flex-row items-center text-lg font-medium gap-8 text-secondaryColor'>
                        <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-hover cursor-pointer'>Home</Link>
                        <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-hover cursor-pointer'>About Me</Link>
                        <Link to='services' spy={true} smooth={true} duration={500} className='hover:text-hover cursor-pointer'>Services</Link>
                        <Link to='portfolio' spy={true} smooth={true} duration={500} className='hover:text-hover cursor-pointer'>Portfolio</Link>
                        <Link to='contact' spy={true} smooth={true} duration={500} className='hover:text-hover cursor-pointer'>Contact Me</Link>
                    </nav>

                    {/* hamburger  */}
                    <div className='lg:hidden text-secondayaryColor'>
                        {menu ? (
                            <AiOutlineClose size={28} onClick={handleChange} />
                        ) : (
                            <HiOutlineMenuAlt1 size={28} onClick={handleChange} />
                        )}
                    </div>
                </div>

                <div className={`${menu ? "translate-x-0" : "translate-x-full"} lg:hidden flex flex-col absolute bg-secondaryColor text-white left-0 top-20 font-medium text-xl text-center z-10 pt-5 pb-5 gap-8 w-full h-fit transition-transform duration-300`} >
                    <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-hover cursor-pointer' onClick={closeMenu}>Home</Link>
                    <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-hover cursor-pointer' onClick={closeMenu}>About Me</Link>
                    <Link to='services' spy={true} smooth={true} duration={500} className='hover:text-hover cursor-pointer' onClick={closeMenu}>Services</Link>
                    <Link to='portfolio' spy={true} smooth={true} duration={500} className='hover:text-hover cursor-pointer' onClick={closeMenu}>Portfolio</Link>
                    <Link to='contact' spy={true} smooth={true} duration={500} className='hover:text-hover cursor-pointer' onClick={closeMenu}>Contact Me</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
