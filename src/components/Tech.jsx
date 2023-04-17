import React from 'react'
import {Ball,Stars} from "./canvas"
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import {Tcircle} from './TechCircle'
import {motion} from 'framer-motion'
import { textVariant,fadeIn } from '../utils/motion';
import { styles } from '../style';
const Tech = () => {
  return (
    <div className='bg-[rgba(255,255,255,0.35)] p-10 rounded-3xl backdrop-blur-md'>
      
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            What I know
          </p>
          <h2 className={styles.sectionHeadText}>
            Skills
          </h2>
      </motion.div>
    

    
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
      {technologies.map((technology,index)=>( 
        <div className='w-28 h-28 ' key={technology.name}>
          {/* <Ball icon={technology.icon} name={technology.name}/> */}
          <Tcircle icon={technology.icon} sname={technology.name} index={index} />
        </div>
      ))}
    </div>
    
    </div>
  )
}

export default  SectionWrapper(Tech,"") 