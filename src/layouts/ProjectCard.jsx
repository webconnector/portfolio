import React from 'react'

const ProjectCard = (props) => {
    return (
        <div className='flex flex-col space-y-4 justify-center text-secondaryColor mb-8'>
            <h2 className='text-xl font-medium'>{props.projectTitle}</h2>
            <h2 >{props.client}</h2>
            <p>{props.projectShortDetail}</p>
            <div className='flex flex-col gap-4 lg:flex-row lg:gap-6'>
            <p className='font-medium'>Githuh Link: <a href={props.projectLink} className='text-hover cursor-pointer'>View Github Repo</a></p>
            <p className='font-medium'>Live Link: <a href={props.demoLink} className='text-hover cursor-pointer'>View Demo</a></p>
            </div>
            {/* <a href={props.projectDetail} className='text-hover cursor-pointer'>View Detail</a> */}
        </div>
    )
}

export default ProjectCard
