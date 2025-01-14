import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react';

const Services = ({isDarkMode}) => {
  return (
    <div id="services" className='w-full px-[12%] py-10 scroll-mt-18'>
      <h4 className='mb-2 text-lg text-center font-Ovo'>What I offer</h4>
      <h2 className='text-5xl text-center font-Ovo'>My Services</h2>
      
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I am a frontend developer from California usa with 10 year of experience in multiple companies
      </p>
      <div className='grid grid-cols-auto gap-6 my-10'>
        {
          serviceData.map( ({icon, title, description, link}, index) => (
            <div
              className='dark:hover:bg-darkHover dark:hover:shadow-white  border border-gray-400 rounded-lg px-8 py-12 hover:bg-lightHover hover:-translate-y-1 duration-500  hover:shadow-black cursor-pointer '
              key={index}>
              <Image src={icon} alt='service icon' className='w-10' />
              <h3 className='dark:text-white text-lg my-4 text-gray-700'>{title}</h3>
              <p className='dark:text-white/80 text-sm text-gray-600 leading-5'>{description}</p>
              <a className='flex items-center gap-2 text-sm mt-5'
                href={link}>Read more <Image src={assets.right_arrow} className='w-4' alt='' /></a>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services