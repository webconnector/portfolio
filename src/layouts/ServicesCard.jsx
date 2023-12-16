import React from 'react'

const ServicesCard = (props) => {
  return (
    <div className='flex flex-col items-center p-5 bg-backgroundColor text-primaryColor hover:bg-secondaryColor hover:text-white transition-all hover:-translate-y-2 w-full lg:w-2/6 gap-4 cursor-pointer rounded-md'>
      <div>
        <span>{props.icon}</span>
      </div>
      <h2 className='text-xl font-semibold text-center'>{props.title}</h2>
      <p className='text-center'>{props.intro}</p>
    </div>
  )
}

export default ServicesCard
