import React from 'react'
import { Link } from 'react-scroll'
import img from '../assets/images/loyablaise.png'
import Button from '../layouts/Button'
import Button2 from '../layouts/Button2'
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center px-5 lg:flex-row  lg:px-32 bg-white'>
            <div className='flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4'>
                <h1 className='text-5xl font-semibold leading-tight mt-24 text-secondaryColor'><div>I'am Loya Blaise</div>

                    <TypeAnimation sequence={[
                        'Web Developer', 2000,
                        'SEO Specialist', 2000,
                        'UI/UX Designer', 2000,
                    ]}
                        speed={50}
                        repeat={Infinity}
                        wrapper="span"
                        className='text-hover'
                    />
                </h1>
                <p className='text-secondaryColor'>I specialize in designing smart, intuitive user interfaces, crafting seamless user experiences, coding
                    responsive
                    websites and applications,
                    and optimizing them for users and search engine visibility</p>
                <div className='flex flex-row justify-between items-center space-x-5'>
                    <a href="#">
                        <Link to='contact' spy={true} smooth={true} duration={500} ><Button title='Hire Me' /></Link>
                    </a>
                    <Button2 title='Download CV' />
                </div>
            </div>
            {/* hero image  */}
            <div className='mt-20'>
                <img width={750} src={img} alt="Loya Blaise" />
            </div>
        </div>
    )
}

export default Home
