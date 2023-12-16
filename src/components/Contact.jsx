import React from 'react'
import { useRef } from 'react';
import { PiPhoneCallFill } from "react-icons/pi";
import { MdMarkEmailUnread } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
// import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jrn585i', 'template_5jqhnrn', form.current, 'KfDM2LHtWILlvRlTz')
            .then((result) => {
                console.log(result.text);
                showAlert("Message sent successfully!", "text-green-600"); // Alert for successful message send
            }, (error) => {
                console.log(error.text);
                showAlert("Failed to send message. Please try again.", "text-red-600"); // Alert for message send failure
            });
    };

    const showAlert = (message, textColor) => {
        alert(message);
        // You can also use a more sophisticated alert or notification library here
        // if you want to style it further with Tailwind classes
    };


    return (
        <div className='min-h-screen flex flex-col justify-center px-5 lg:gap-8 lg:px-32 mb-8 p-5'>
            <div className='mt-24'>
                <h1 className='text-4xl font-semibold text-secondaryColor text-center lg:mt-2'>Let's Get Intouch🌟</h1>
            </div>

            <div className='flex flex-col justify-start space-y-8 mt-8 lg:flex-row'>

                <div className='w-full  flex flex-col items-start lg:pr-12 space-y-8  text-secondaryColor'>
                    <p className='text-xl font-medium'>Ready to turn your ideas into reality? </p>
                    <p>I'm thrilled to collaborate on your next project! To get started, simply drop me a message with a brief description of your project, goals, and any specific requirements you have in mind.
                        Whether it's a web development venture, UI/UX design challenge, or SEO optimization task, your vision is my priority.
                        Feel free to include any inspirations or preferences you may have.
                        I'm here to transform your concepts into impactful digital solutions.
                        Let's bring your ideas to life!
                    </p>
                    <div className='text-xl font-medium'>
                        <p><a href="tel:+08145599439"> <PiPhoneCallFill  className='inline'/> 08145599439</a></p>
                        <p><a href="mailto:loyablaise@gmail.com"> <MdMarkEmailUnread className='inline'/> loyablaise@gmail.com</a></p>
                        <p><a href="http://www.loyablaise.com" target="_blank" rel="noopener noreferrer"><TbWorldWww className='inline' /> www.blissnaija.com</a></p>
                    </div>

                </div>


                <form ref={form} onSubmit={sendEmail} className="space-y-8 flex flex-col w-full">
                    {/* <div className="flex flex-row justify-between gap-4"> */}
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Enter your name"
                        className="p-2 border border-gray-300 rounded-md focus:outline-none"
                        required
                    />
                    <input
                        type="email"
                        name="from_email"
                        placeholder="Enter your email"
                        className="p-2 border border-gray-300 rounded-md  focus:outline-none"
                        required
                    />
                    {/* </div> */}
                    <textarea
                        name="message"
                        placeholder="Describe what you would love me to do for your here"
                        className="p-2 border border-gray-300 rounded-md focus:outline-none"
                        rows="5"
                        required
                    ></textarea>
                    <input
                        type="submit"
                        value="Send Message"
                        className="p-2 bg-hover text-white rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-brightColor transform hover:scale-105"
                    />
                </form>


            </div>
        </div>
    )
}

export default Contact
