"use client";

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'motion/react';

const Contact = ({isDarkMode}) => {
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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration: 1}}
          id='contact'
          className='dark:bg-none bg-[url("/footer-bg.color.png)] bg-no-repeat bg-[length:90%_auto] bg-center w-full px-[12%] py-10 scroll-mt-18'>
      <motion.h4
         initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y:0 }}
         transition={{duration: 0.5, delay:0.3}}
        className='mb-2 text-lg text-center font-Ovo'>Connect With me
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{duration: 0.5, delay:0.5}}
        className='text-5xl text-center font-Ovo'>Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.5, delay:0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                I am a frontend developer from California usa with 10 year of experience in multiple companies
          </motion.p>

      <motion.form
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{duration: 0.3, delay:0.9}}
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <motion.input
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x:0 }}
            transition={{duration: 0.6, delay:1.1}}
                      name="name"
                      className='dark:bg-darkHover/30 dark:border-white/90  flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                      type="text" placeholder='Enter Your name' required />
                  
          <motion.input
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x:0 }}
            transition={{duration: 0.6, delay:1.2}}
                      name="email"
                      className='dark:bg-darkHover/30 dark:border-white/90 flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                      type="email" placeholder='Enter Your email' required />
              </div>
        <motion.textarea
          initial={{ opacity: 0, y:100 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{duration: 0.6, delay:1.3}}
                  name="message"
                  className='dark:bg-darkHover/30 dark:border-white/90 w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'
                  rows='6' placeholder='Enter Your Message' required></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{duration: 0.3}}
          className='dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover py-3 px-8 flex items-center justify-between gap-2 text-white bg-black/80 rounded-full mx-auto hover:bg-black duration-500' type='submit' >Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.button>
          
        <p className='mt-4 dark:text-white'>{result}</p>
          </motion.form>
    </motion.div>
  )
}

export default Contact