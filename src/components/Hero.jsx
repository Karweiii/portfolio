import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { tkw } from '../assets'
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`} >
      <div className={`absolute inset-0 mt-[40px]  max-w-6xl mx-auto sm:px-8 px-6 `}>
        <div className=' lg:flex-row flex-col-reverse flex overflow-hidden bg-[rgba(255,255,255,0.35)] h-[70%] rounded-3xl backdrop-blur-md'> 
            <div className='flex '>
            <div className='flex flex-col justify-center items-center mt-5 mr-[10px] ml-[10px]'>
              <div className='w-5 h-5 rounded-full bg-[#ffffff]' />
              <div className='w-1 sm:h-40 h-40 grey-gradient' />
            </div>

            <div className='self-center'>
              <h1 className={`${styles.heroHeadText} text-[#797979]`}>
                Hi, I'm <span className='text-[#FFBF00]'>Kar Wei</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-secondary`}>
                I am a software engineering student <br className='sm:block hidden' />
                I am currently studying at Sunway University
              </p>
            </div>
            </div>
            

            <div className=' self-center  xl:flex-1 xl:h-auto'>
              
                <img className='mx-auto rounded-full  xl:h-[300px] h-[250px]' src={tkw}></img>
              
            </div>
        </div>
      </div>


      <div className='absolute xs:bottom-20 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;