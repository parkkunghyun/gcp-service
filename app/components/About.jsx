import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react';

const About = ({isDarkMode}) => {
    return (
    //   id는 문서내 고유한 식별자 역할, 다른곳에서 id를 참조해서 이동가능
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{duration: 1 }}
            id='about' className='w-full px-[12%] py-10 scroll-mt-18'>
            <motion.h4
                initial={{ opacity: 0, y:-20 }}
                whileInView={{opacity: 1, y:0}}
                transition={{duration: 0.5, delay: 0.3 }}
                className='mb-2 text-lg text-center font-Ovo'>
                Introduction
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, y:-20 }}
                whileInView={{opacity: 1, y:0}}
                transition={{duration: 0.5, delay: 0.5 }}
                className='text-5xl text-center font-Ovo'>About me
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, }}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8 }}
                className='flex flex-col items-center w-full gap-20 my-20 lg:flex-row'>
                
                <motion.div
                    initial={{ opacity: 0, scale:0.9 }}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 1 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user'
                        className='w-full rounded-3xl' />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.6, delay: 0.8 }}
                    className='flex-1 '>
                    <p
                        className='max-w-2xl mb-10 font-Ovo'
                    >I am an experienced Frontend Developer with over a decade of professional expertise in the field.
                    </p>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.8, delay: 1 }}
                        className='grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3'>
                        {infoList.map(({icon, iconDark, title, description}, index) => (
                            <motion.li
                                whileHover={{scale: 1.05}}
                                className='dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 border-[0.5px] border-gray-400 cursor-pointer hover:shadow-black rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500'
                                key={index}>
                                <Image src={isDarkMode ?  iconDark : icon} alt={title} className='mt-3 w-7' />
                                <h3 className='my-4 dark:text-white font-semibold text-gray-700'>{title}</h3>
                                <p className='text-sm dark:text-white/80 text-gray-600'>{description}</p>
                            </motion.li>
                        ))
                        }
                    </motion.ul>

                    <motion.h4
                         initial={{ y:20, opacity: 0 }}
                         whileInView={{y:0, opacity: 1}}
                         transition={{duration: 1.3, delay: 0.5}}
                        className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</motion.h4>

                    <motion.ul
                         initial={{ opacity: 0 }}
                         whileInView={{opacity: 1}}
                         transition={{duration: 1.5, delay: 0.6 }}
                        className='flex items-center gap-3 sm:gap-5'>
                        {
                            toolsData.map((tool, index) => (
                                <motion.li
                                    
                                    whileHover={{scale: 1.1}}
                                    
                                    className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 sm:2-14 aspect-square'
                                    key={index}>
                                    <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                                </motion.li>
                            ))
                        }
                    </motion.ul>
                </motion.div>
            </motion.div>
    </motion.div>
  )
}

export default About