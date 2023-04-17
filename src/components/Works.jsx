import React from 'react'
import { styles } from '../style'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../utils/motion';
import { motion } from 'framer-motion'
import Tilt from 'react-tilt'
import { useRef } from 'react'

const ProjectCard=({index,name,description,tags,image,source_code_link})=>{
  const ref=useRef(null);

  return(
    <motion.div variants={fadeIn('right','spring',index*0.5,0.75)}>
      <div className='bg-[rgba(255,255,255,0.45)] p-5 rounded-2xl sm:w-[338px] w-full'>
      <Tilt options={{max:45,scale:1,speed:450}} ref={ref}>
        <div className='relative w-full h-[230px] border-solid border-[5px] border-[rgba(108,122,137,0.35)] rounded-xl'>
        <a href='https://karweiii.github.io/immac/'>
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
        </a>
        </div>
      </Tilt>
      <div className='mt-5'>
          <h3 className='text-black font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-2 flex flex-wrap gap-2 justify-between'>
          <div className='gap-2 flex place-items-center'>
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
          </div>
          <div>
            <div onClick={()=>window.open(source_code_link,"_blank")} className="bg-white w-12 h-12 rounded-full flex justify-center items-center cursor-pointer mr-[5px] group border-[3px] border-[rgba(108,122,137,0.35)]  hover:border-red-500 hover:bg-black" >
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain  filter grayscale brightness-0 invert-0 sepia-7 saturate-98 hue-rotate-346 contrast-86 
                    group-hover:brightness-95 group-hover:invert-0 group-hover:hue-rotate-346 group-hover:saturate-100 group-hover:contrast-100 transition ease-in-out duration-300'/>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Works = () => {
  return (
    <div className='bg-[rgba(255,255,255,0.35)] p-10 rounded-3xl backdrop-blur-md'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      </motion.div>

      <div className='w-full-flex'>
        <motion.p variants={fadeIn("","",0.1,1)} className="mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Here are some projects to showcases my skills and experience through real-world examples of my work. 
        Each project is briefly described with links to code repositories and live demos in it. 
        It reflects my ability and knowledge to solve complex problems with different kind of skills and technologies,
        and also proven that I am able to manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project,index)=>(
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>

    </div>
  )
}

export default SectionWrapper(Works,"")