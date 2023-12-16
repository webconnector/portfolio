import React from 'react'
import { HiOutlineArrowCircleDown } from "react-icons/hi"

const Button2 = (props) => {

  const handleDownload = () => {
    const fileLink =
  'https://drive.google.com/uc?export=download&id=1a7Y4FC-_jBSomX56IG8IJgOklzh8n-DH';
    // Replace 'YOUR_FILE_ID' with the actual ID of your Google Drive file
  
    // Create a temporary link element
    const downloadLink = document.createElement('a');
    downloadLink.href = fileLink;
    downloadLink.target = '_blank';
    downloadLink.download = 'Loyablaise_CV.pdf'; // Provide a desired filename

    // Append the link to the document and trigger the click event
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Clean up the link element
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <button className='flex flex-row justify-center items-center text-hover gap-4 border-2 border-hover hover:bg-secondaryColor  hover:text-white hover:border-secondaryColor tansition-all px-4 py-2 rounded-md cursor-pointer'
        onClick={handleDownload}
      >
        {props.title}
        <HiOutlineArrowCircleDown />
      </button>
    </div>
  )
}

export default Button2
