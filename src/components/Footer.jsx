import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";


const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center px-5 space-y-5 lg:justify-between lg:px-32  p-5 bg-backgroundColor'>
            <div className='flex gap-8 mt-14'>
                <a href="https://www.facebook.com/loyablaise"><FaFacebookSquare size={32} className='hover:text-hover transistion-all cursor-pointer' /></a>
                <a href="https://www.linkedin.com/in/iorpine-loya-4583a082/"><FaLinkedin size={32} className='hover:text-hover transistion-all cursor-pointer' /></a>
                <a href="https://twitter.com/LoyaGabrie17880"> <FaTwitterSquare size={32} className='hover:text-hover transistion-all cursor-pointer' /></a>
                <a href="https://github.com/webconnector"><FaGithubSquare size={32} className='hover:text-hover transistion-all cursor-pointer' /></a>
            </div>

            <div className='flex flex-row items-center cursor-pointer mt-5 lg:mt-0'>
                <p className='text-secondaryColor'>Built with love <GiSelfLove className='text-red inline-block'/> by <a href="https://www.facebook.com/loyablaise">Loya Blaise</a></p>
            </div>
        </div>
    )
}

export default Footer
