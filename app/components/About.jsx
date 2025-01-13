import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
    //   id는 문서내 고유한 식별자 역할, 다른곳에서 id를 참조해서 이동가능
      <div id='about' className='w-full px-[12%] py-10 scroll-mt-18'>
          <h4 className='mb-2 text-lg text-center font-Ovo'>Introduction</h4>
            <h2 className='text-5xl text-center font-Ovo'>About me</h2>
            
            <div className='flex flex-col items-center w-full gap-20 my-20 lg:flex-row'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user'
                        className='w-full rounded-3xl' />
                </div>

                <div className='flex-1 '>
                    <p
                        className='max-w-2xl mb-10 font-Ovo'
                    >I am an experienced Frontend Developer with over a decade of professional expertise in the field.
                    </p>

                    <ul className='grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3'>
                        {infoList.map(({icon, iconDark, title, description}, index) => (
                            <li
                                className='border-[0.5px] border-gray-400 cursor-pointer hover:shadow-black rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500'
                                key={index}>
                                
                                <Image src={icon} alt={title} className='mt-3 w-7' />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-sm text-gray-600'>{description}</p>
                            </li>
                        ))
                        }
                    </ul>

                    <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>

                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {
                            toolsData.map((tool, index) => (
                                <li
                                    className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 sm:2-14 aspect-square'
                                    key={index}>
                                    <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default About