import React from 'react'
import{ BsArrowRight } from 'react-icons/bs'

const Button = (props) => {
  return (
    <div>
      <button className='flex flex-row justify-center items-center text-white gap-4 bg-hover hover:bg-secondaryColor  hover:text-white tansition-all px-4 py-2 rounded-md cursor-pointer'>
        {props.title}
        <BsArrowRight/>
      </button>
    </div>
  )
}

export default Button
