import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
      <div className='mt-20'>
          <div className='text-center'>
              <Image src={assets.logo} alt='logo' className='w-36 mx-auto mb-2' />
              <div className='w-max flex items-center gap-2 mx-auto'>
                  <Image src={assets.mail_icon} alt='mail icon' className='w-6' />
                  rudgus4620@gmail.com
              </div>
          </div>
          <div className='text-center sm:flex items-center justify-between border-gray-400 border-t mx-[10%] mt-12 py-6'>
              <p>@ 2025 박경현, All rights reserved.</p>
              <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
                  <li><a target='_blank' href="https://github.com/parkkunghyun">GitHub</a></li>
                  <li><a target='_blank' href="https://github.com/parkkunghyun">LinkedIn</a></li>
                  <li><a target='_blank' href="https://github.com/parkkunghyun">Twitter</a></li>
              </ul>
          </div>
    </div>
  )
}

export default Footer