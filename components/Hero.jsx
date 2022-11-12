import React from "react";

const Hero = ({ heading, message }) => {
    return (
        <div
          className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover mb-[1000px]'
          style={{backgroundImage: "linear-gradient(#e66465, #9198e5)"}}
        >
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]' />
            <div className='p-5 text-white z-[2] mt-[-10rem]'>
                <h2 className='text-5xl font-bold'>{heading}</h2>
                <p className='py-5 text-xl w-[100%] md:w-[75%]'>{message}</p>
            </div>
        </div>
    )
}

export default Hero