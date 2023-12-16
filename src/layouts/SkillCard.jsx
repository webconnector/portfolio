import React from 'react'

const SkillCard = (props) => {
  return (
    <div>
      <h3 className='mt-3 tect-xl text-primaryColor'>{props.title}</h3>
      <div>
        <h3 className='text-end text=secondaryColor'>{props.val}</h3>
        <div className='w-full h-2 bg-slate-300 rounded-full'>
            <div className={`${props.width} h-2 bg-secondaryColor rounded-full`}></div>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
