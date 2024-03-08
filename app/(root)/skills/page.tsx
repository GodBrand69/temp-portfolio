import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import C from '../../../public/c.png'
import Cpp from '../../../public/cpp.png';
import Flutter from '../../../public/flutter.png';
import Lua from '../../../public/lua.png';
import Github from '../../../public/github1.png';
import Python from '../../../public/python.png';
import NextJS from '../public/assets/skills/nextjs.png'
import Robotics from '../../../public/robotics.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full bg-gradient-to-b from-blue-100 to-red-100 object-cover pt-28 p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <h2 className='text-[#800020] text-4xl sm:text-5xl py-4'>Skills</h2>
        <p className='text-xl mx-auto tracking-widest font-bold mb-4  text-pink-700'>
          Technical Skills
        </p>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={C} width={64} height={64} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Cpp} width={64} height={64} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Flutter} width={64} height={64} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Lua} width={64} height={64} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Python} width={64} height={64} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
         
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Github} width={64} height={64} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Robotics} width={64} height={64} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Robotics</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto flex flex-col justify-center mt-20 pb-20 h-full'>
        <p className='text-xl mx-auto tracking-widest font-bold mb-4  text-pink-700'>
          Soft Skills
        </p>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 flex items-center justify-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className=' justify-center items-center'>
              <div className='flex flex-col items-center justify-center'>
                <h3>Team work</h3>
              </div>
            </div>
          </div>
          <div className='p-6 flex items-center justify-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className=' gap-4 justify-center items-center'>
              <div className='flex flex-col items-center justify-center'>
                <h3>Problem Solving</h3>
              </div>
            </div>
          </div>
          <div className='p-6 flex items-center justify-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className=' gap-4 justify-center items-center'>
              <div className='flex flex-col items-center justify-center'>
                <h3>Communication</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl flex items-center justify-center rounded-xl hover:scale-105 ease-in duration-300'>
            <div className=' gap-4 justify-center items-center'>
              <div className='flex items-center justify-center'>
                <h3 className=''>Data Management</h3>
              </div>
            </div>
          </div>
          <div className='p-6 flex items-center justify-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className=' gap-4 justify-center items-center'>
              <div className='flex flex-col items-center justify-center'>
                <h3>Quick Learner</h3>
              </div>
            </div>
          </div>
         
         
        </div>
      </div>
    </div>
  );
};

export default Skills;
