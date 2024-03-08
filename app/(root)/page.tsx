'use client'

import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div id='home' className='w-full text-white pt-10 h-screen text-center'>

      <video src={require("../../public/video1.mp4")} autoPlay muted loop className='video' />


      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          transition={{ duration: 1 }}   >

          <motion.h1

            className='py-4 text-white'
          >
            Hi, I&#39;m <span className='text-amber-800'> Abhay</span>
          </motion.h1>
          <h1 className='py-2 text-amber-800  '>a Software Engineer</h1>
          <p className='py-4 text-[18px] text-amber-800 sm:max-w-[70%] m-auto'>
            Looking forward to a good opportunity to kickstart my career and be able
            to utilize the knowledge formerly gained, in a responsible and proper
            manner resulting in a value add to the organization and reaching the apex
            of my career in the process
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='http://www.linkedin.com/in/abhay-netawat'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg bg-white text-[#800020] shadow-pink-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg bg-white text-[#800020] shadow-pink-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/contact'>
              <div className='rounded-full shadow-lg bg-white text-[#800020] shadow-pink-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume.pdf' download>
              <div className='rounded-full shadow-lg bg-white text-[#800020] shadow-pink-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
