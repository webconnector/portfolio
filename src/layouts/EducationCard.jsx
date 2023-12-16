import React from 'react'

const EducationCard = (props) => {
    return (
        <div className='flex flex-col lg:flex-row py-4 text-secondaryColor'>
            <div className='w-full lg:w-2/4'>
                <h2 className='font-semibold'>{props.certTitle}</h2>
                <div className='mt-2'>
                    {/* <p>Sutdent</p> */}
                    <p>{props.year}</p>
                </div>
            </div>

            <div>
                <h2 className='font-semibold mt-2 lg:mt-0'>{props.school}</h2>
                <p className='mt-2'>{props.accomplishment}</p>
                <div className='bg-secondaryColor w-full h-0.5 mt-2'></div>
            </div>
        </div>
    )
}

export default EducationCard
