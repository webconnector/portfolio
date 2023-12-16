import React from 'react'
import SkillCard from '../layouts/SkillCard'

const About = () => {

  // skillset widths 
    const skill1 = "w-11/12";
    const skill2 = "w-10/12";
    const skill3 = "w-9/12"
    const skill4 = "w-8/12"
  return (
    <div className='min-h-screen flex flex-col justify-center px-5 lg:gap-8 p-5 lg:px-32 space-y-8 mb-8 bg-backgroundColor'>
      <div className='mt-24'>
        <h1 className='text-4xl font-semibold text-secondaryColor text-center lg:mt-2'>About Me🌟</h1>
      </div>

      <div className='mt-2'>
        <div className='mb-10'>
            <h2 className='text-3xl font-semibold text-secondaryColor'>I'am Loya Blaise</h2>
            <p className='mt-4 lg:mt-2 text-secondaryColor'>
            I am a passionate and result driven UI/UX designer, website developer, and SEO specialist dedicated to crafting exceptional digital experience.
            With 4 years of experience, I've had the privilege of working on diverse projects that have shaped my skills in SEO, development and design. 
            </p>
            <p className='mt-2 text-secondaryColor'>
              My expertise includes UI/UX design (using tools like Google form, Miro, figma), Websites and webApps development using Tailwindcss, React, NodeJs, MongoDB, PHP, MySQL WordPress CMS, and implementing SEO strategies for enhanced online visibility.
            </p>
            <p className='mt-2 text-secondaryColor'>
              I believe in a user-centric design approach, combining creativity with functionality. My coding philosophy revolves around clean, efficient, and future-proof development practices. In SEO, i focus on data-driven strategies to boost organic search performance.
            </p>
        </div>

        <div>
            <h2 className='text-2xl font-semibold text-secondaryColor'>My Skills</h2>
            <div>
                <SkillCard title="CSS" width={skill1} val="90%"/>
                <SkillCard title="Javascript" width={skill2} val="85%"/>
                <SkillCard title="PHP" width={skill3} val="80%"/>
                <SkillCard title="MySQL" width={skill2} val="85%"/>
                <SkillCard title="MongoDB" width={skill4} val="70%"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
