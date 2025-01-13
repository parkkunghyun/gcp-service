import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
      <div className='flex flex-col items-center justify-center w-11/12 h-screen max-w-3xl gap-4 mx-auto text-center'>
          <div className='mt-4'>
              <Image src={assets.profile_img} alt='user'
                  className='w-32 rounded-full' />
          </div>
          <h3 className='flex items-end gap-2 mb-3 text-xl font-Ovo md:text-2xl'>
                  Hi! I'm 박경현
              <Image src={assets.hand_icon} alt='hand-icon' className='w-6' />
          </h3>
          <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>frontend web developer based in korea.</h1>
          <p className='max-w-2xl mx-auto font-Ovo'>
              I am a frontend developer from 캘리포니아, use with 10 years of 경험 In multiple companies like Microsoft, Tesla and Apple.
          </p>
          <div className='flex flex-col items-center gap-4 mt-4 sm:flex-row'>
              <a className='flex items-center gap-2 px-10 py-3 text-white bg-black border border-white rounded-full'
                  href="#contact">
                  contact me <Image src={assets.right_arrow_white} alt='right arrow'
                  className='w-4' />
              </a>
              <a href="/sample-resume.pdf" download
                  className='flex items-center gap-2 px-10 py-3 border border-gray-500 rounded-full'>my resume <Image src={assets.download_icon} alt='resume'
                  className='w-4' />
              </a>
          </div>
      </div>
  )
}

export default Header