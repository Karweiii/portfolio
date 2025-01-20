import React from 'react'
import {motion} from 'framer-motion'
import{fadeIn} from '../utils/motion'
// bg-gradient-to-br from-[#D9D9D9] to-[#797979] relative group hover:from-[#797979] hover:to-[#D9D9D9]
export function Tcircle(props) {
  return(
    <motion.div variants={fadeIn("up","spring",0.3*props.index,0.75)}>
    <div className='w-28 h-28  relative group bg-[rgba(108,122,137,0.35)] duration-500 rounded-full'>
      <img className='w-[90px] absolute top-[50%] left-[50%] transition-opacity duration-500 ease-in-out transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0' src={props.icon}/>
      <p className='font-bold text-lg text-white w-full break-words  absolute top-[50%] left-[50%] text-center transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
        {props.sname}
        </p>
    </div>
    </motion.div>

  )
}