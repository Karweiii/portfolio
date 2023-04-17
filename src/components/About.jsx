import React from 'react'
import Tilt from 'react-tilt';
import {motion} from 'framer-motion'
import { styles } from '../style';
import { services } from '../constants';
import{fadeIn,textVariant} from '../utils/motion'
import {SectionWrapper} from '../hoc'
import { LinearCard } from './linearcard';
const About = () => {

  const ServiceCard=({index,title,icon})=>{
    return(
      <Tilt className="xs:w-[250px] w-full ">
        <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div options={{
            max:45,
            scale:1,
            speed:450
          }} 
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ">
            <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>  

          </div>
        </motion.div>
      </Tilt>
    )
  }
  return (
    <div className='p-10 bg-[rgba(255,255,255,0.35)] rounded-3xl backdrop-blur-md z-[1] relative'>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      Hello, my name is Tan Kar Wei and I'm currently studying Bachelor of Software Engineering at Sunway University. 
      As a quick learner, I'm always eager to implement the skills that I learn in my daily life. 
      While I'm studying software engineering, I do also have a high passion and interest in big data and artificial intelligence related field. 
      I'm excited about the potential in these fields to transform the way of how we live and work, and that's why I'm eager to explore 
      the possibilities and contribute myself to the development. I'm also enthusiastic about collaborating with others and 
      learning from their experiences. Thank you for taking the time to learn a bit more about me  ^_^
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center '>
        {services.map((service,index)=>(
          <LinearCard key={service.title}index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About,'about')