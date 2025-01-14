import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react";

const Header = ({isDarkMode}) => {
  return (
      <div className='flex flex-col items-center justify-center w-11/12 h-screen max-w-3xl gap-4 mx-auto text-center'>
          <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{duration: 0.8, type: 'spring', stiffness: 100}}
              className='mt-4'>
              <Image src={assets.profile_img} alt='user'
                  className='w-32 rounded-full' />
          </motion.div>
          <motion.h3
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{duration: 0.6, delay: 0.3}}
              className='flex items-end gap-2 mb-3 text-xl font-Ovo md:text-2xl'>
                  Hi! I'm 박경현
              <Image src={assets.hand_icon} alt='hand-icon' className='w-6' />
          </motion.h3>
          <motion.h1
               initial={{ y: -30, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{duration: 0.8, delay: 0.5}}
              className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
              frontend web developer based in korea.
          </motion.h1>
          <motion.p
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{duration: 0.6, delay: 0.7}}
              className='max-w-2xl mx-auto font-Ovo'>
              I am a frontend developer from 캘리포니아, use with 10 years of 경험 In multiple companies like Microsoft, Tesla and Apple.
          </motion.p>

          <div className='flex flex-col items-center gap-4 mt-4 sm:flex-row'>
              <motion.a
                   initial={{ y: 30, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   transition={{duration: 0.6, delay: 1}}
                  className='dark:bg-transparent flex items-center gap-2 px-10 py-3 text-white bg-black border border-white rounded-full'
                  href="#contact">
                  contact me <Image src={assets.right_arrow_white} alt='right arrow'
                  className='w-4' />
              </motion.a>
              <motion.a
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{duration: 0.6, delay: 1.2}}
                  href="/sample-resume.pdf" download
                  className='dark:text-black bg-white flex items-center gap-2 px-10 py-3 border border-gray-500 rounded-full'>my resume <Image src={assets.download_icon} alt='resume'
                  className='w-4' />
              </motion.a>
          </div>
      </div>
  )
}

export default Header