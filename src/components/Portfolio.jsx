import React from 'react'
import ProjectCard from '../layouts/ProjectCard'
import img1 from '../assets/images/shopnow.jpg'
import img2 from '../assets/images/manage.jpg'
import img3 from '../assets/images/dealboku.jpg'
import img4 from '../assets/images/instafood.jpg'
import img5 from '../assets/images/notonlyeggs.jpg'

const Portfolio = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center px-5 lg:px-32 mb-8 lg:gap-8 bg-backgroundColor p-5'>
            <div className='mt-24'>
                <h1 className='text-4xl font-semibold text-secondaryColor text-center lg:mt-2 mt-24 mb-8 lg:mb-4'>My Recents Projects✨</h1>
            </div>
            <div className='flex flex-col space-y-20'>

                <div className='flex flex-col-reverse gap-12 items-center mt-4 lg:flex-row  mb-8'>
                    <ProjectCard
                        projectTitle="DealBoku: E-Commerce Platform"
                        client="SundiataPost Project"
                        projectShortDetail="An e-commerce platform built with WordPress CMS, Dokan and full integrated with flutterwave and Paystack for easy and smooth online payment by customers. 
                    With Dokan integration, the platform boasts a seamless multi-vendor experience, allowing vendors to effortlessly manage their stores and customers to enjoy a diverse and dynamic online shopping environment. 
                    This project showcases my proficiency in leveraging WordPress to create robust, user-friendly websites. 
                    It highlights my skills in WordPress development and my commitment to delivering powerful and scalable digital solutions"
                        projectLink="https://dealboku.com/"
                        demoLink="https://dealboku.com/"
                    />
                    <img src={img3} alt="" className='lg:w-2/4 transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer' />
                </div>


                <div className='flex flex-col gap-12 items-center mt-4 lg:flex-row mb-8'>
                    <img src={img4} alt="" className='lg:w-2/4 transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer' />
                    <ProjectCard
                        projectTitle="InstaFood: Food Website"
                        client="Fictional Project"
                        projectShortDetail="An innovative website that effortlessly bridges the gap between culinary exploration and convenience. 
                        With a commitment to seamless user experiences, this platform invites users on a journey of discovery, order, and relish. 
                        From the sleek design elements that captivate the eye to the robust functionality ensuring smooth transactions, InstaFood Online exemplifies my dedication to delivering digital solutions that elevate everyday life. 
                        Crafted with technologies such as React for dynamic interfaces, Tailwind CSS for a modern aesthetic, and the efficiency of React Icons and emailJS, this project represents a harmonious blend of creativity and technology."
                        projectLink="https://github.com/webconnector/instafood"
                        demoLink="https://webconnector.github.io/instafood/"
                    />
                </div>


                <div className='flex flex-col-reverse gap-12 items-center  mt-4 lg:flex-row mb-8'>
                    <ProjectCard
                        projectTitle="Manage - Landing Page"
                        client="Frontend Mentor Challenge"
                        projectShortDetail="This project is a striking showcase of my design finesse and responsive web development skills using Tailwind CSS. 
                    Developed as part of the Manage Landing Page challenge by Front Mentors.
                    Feel free to clone and explore, witnessing firsthand the meticulous implementation of a responsive design that adapts seamlessly across various devices. 
                    Your feedback and insights are welcomed, and the project is available for use."
                        projectLink="https://github.com/webconnector/Manage"
                        demoLink="https://webconnector.github.io/Manage/"
                    />
                    <img src={img2} alt="" className='lg:w-2/4 transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer' />
                </div>


                <div className='flex flex-col gap-12 items-center mt-4 lg:flex-row mb-8'>
                    <img src={img1} alt="" className='lg:w-2/4 transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer' />
                    <ProjectCard
                        projectTitle="Shopnow: E-Commerce Online Shop"
                        client="Fictional Project"
                        projectShortDetail="A React-based E-commerce web application with a dynamic product catalog, a shopping cart 
                    for a seamless experience, integrated with Paystack payment gateway to ensure secure and efficient transactions. 
                    It demonstrate my proficiency in delivering functional digital solutions. 
                     ."
                        projectLink="https://github.com/webconnector/shopnow"
                        demoLink="./"
                    />
                </div>

                <div className='flex flex-col-reverse gap-12 items-center  mt-4 lg:flex-row mb-8'>
                    <ProjectCard
                        projectTitle="NotOnlyEggs - Agro Online Marketplace"
                        client="Abatyoor Tersoor"
                        projectShortDetail="This dynamic platform, meticulously crafted with WordPress and WooCommerce, redefines the egg and poultry shopping experience.
                        Built to empower vendors and delight buyers, this platform seamlessly connects producers with culinary enthusiasts. Vendors can effortlessly post their products, and buyers can explore, connect, and purchase directly.
                        Here, vendors from diverse backgrounds showcase the finest selection of eggs and poultry products, ranging from organic wonders to free-range delights. "
                        projectLink="https://notonlyeggs.com/"
                        demoLink="https://notonlyeggs.com/"
                    />
                    <img src={img5} alt="" className='lg:w-2/4 transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer' />
                </div>

               

            </div>

        </div>
    )
}

export default Portfolio
