import React from 'react'
import EducationCard from '../layouts/EducationCard'

const Experience = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center px-5 lg:px-32'>
            <h1 className='text-4xl font-semibold text-secondaryColor text-center lg:mt-14 mt-24 mb-8 lg:mb-4'>Work History📜</h1>
            <div>
                <EducationCard
                    certTitle="SEO Excutive(Remote)"
                    year="August, 2023 - September 2023"
                    school="Digitabytes, Bihar, Uttar Pradesh, India"
                    accomplishment="Carried out On-page, technical and Off-page SEO audits, analyzed, effected and  monitored clients' website performance using Google Analytics, and other SEO tools to make data-driven decisions to enhance organic search performance."
                />

                <EducationCard
                    certTitle="CTO"
                    year="September, 2020 - January, 2021"
                    school="Agric & Social Innovation Hub, Makurdi"
                    accomplishment="Improved the scalability, maintainability, and responsiveness of cross-browser code on
                    all company websites and client's websites. Oversaw the administration of front-end web development technologies  to deliver clients' web projects."
                />
            </div>
        </div>
    )
}

export default Experience
