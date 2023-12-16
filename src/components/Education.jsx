import React from 'react'
import EducationCard from '../layouts/EducationCard'

const Education = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center px-5 lg:px-32 bg-backgroundColor'>
            <h1 className='text-center font-semibold text-4xl mt-24 text-secondaryColor lg:mt-16 mb-8 lg:mb-4'>Education📚</h1>
            <div className='bg-white p-5 rounded-md'>
                <EducationCard
                    certTitle="Web Development"
                    year="December, 2019"
                    school="Nigerian National Social Investment Programme (NNSIP)"
                    accomplishment="Acquired proficiency in webs development, specializing in WordPress, PHP, and MySQL. My skills encompass creating dynamic and robust websites, leveraging  WordPress for flexible CMS, &  implementing PHP and MySQL for  efficient database-driven functionalities"
                />

                <EducationCard
                    certTitle="B.SC Industrial Physics"
                    year="February, 2017"
                    school="Federal University of Agriculture, Makurdi"
                    accomplishment="Completed professional development in the design and implementation of a digital human counter using a microcontroller. 
                    Additionally, I was elected as the Deputy Clerk to the Council for the Student Supreme Council (SSC) during the academic year 2014/2015."
                />
            </div>
        </div>
    )
}

export default Education
