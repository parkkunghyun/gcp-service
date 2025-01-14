"use client";

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {
    const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dbea5a80-c593-4f83-95f0-25b548a45486");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
      <div
          id='contact'
          className='bg-[url("/footer-bg.color.png)] bg-no-repeat bg-[length:90%_auto] bg-center w-full px-[12%] py-10 scroll-mt-18'>
            <h4 className='mb-2 text-lg text-center font-Ovo'>Connect With me</h4>
            <h2 className='text-5xl text-center font-Ovo'>Get in touch</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                I am a frontend developer from California usa with 10 year of experience in multiple companies
          </p>

          <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
              <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                  <input
                      name="name"
                      className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                      type="text" placeholder='Enter Your name' required />
                  <input
                      name="email"
                      className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                      type="email" placeholder='Enter Your email' required />
              </div>
              <textarea
                  name="message"
                  className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'
                  rows='6' placeholder='Enter Your Message' required></textarea>
              <button className='py-3 px-8 flex items-center justify-between gap-2 text-white bg-black/80 rounded-full mx-auto hover:bg-black duration-500' type='submit' >Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' /></button>
              
              <p className='mt-4'>{result}</p>
          </form>
    </div>
  )
}

export default Contact