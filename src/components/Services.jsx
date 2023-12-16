import React from 'react'
import ServicesCard from '../layouts/ServicesCard'
import { FaLaptopCode } from 'react-icons/fa'
import { SiGooglesearchconsole } from 'react-icons/si'
import { SiMaterialdesignicons } from 'react-icons/si'


const Services = () => {

  // defining services icons 
  const icon1 = <FaLaptopCode size={55} className="text-hover" />
  const icon2 = <SiGooglesearchconsole size={55} className="text-hover" />
  const icon3 = <SiMaterialdesignicons size={55} className="text-hover" />
  return (
    <div className='min-h-screen flex flex-col justify-center items-center px-5 lg:px-32 lg:gap-8 space-y-8 bg-white mb-8'>
      <div className='mt-24'>
        <h1 className='text-4xl font-semibold text-secondaryColor text-center lg:mt-14  mb-8 lg:mb-4'>My Services🛠️</h1>
      </div>

      <div className='flex flex-col md:flex-row mx-auto gap-5 mt-4'>
        <ServicesCard icon={icon1} title="Web Development" intro="From striking portfolio, e-commerce platforms, or costom web applications to implementing  robust back-end functionalities, i bring technical expertise and creative flair to every project, 
        ensuring a seamless online experience for your audience"/>

        <ServicesCard icon={icon2} title="Search Engine Optimization" intro="From keyword optimization to content enhancement, i employ data-driven strategies to boost websites visibility. I ensure your digital footprint aligns with latest search engine algorithm so as to drive organic traffic, and secure a high search engine rankings." />

        <ServicesCard icon={icon3} title="UI/UX Design" intro="From Wireframing to prototyping, I meticulously design  and create user-centric interfaces and interaction that not only engage but delight, ensuring an enjoyable user journey. 
        I will craft for you designs that enhance overall best user experience."/>
      </div>

    </div>
  )
}

export default Services
