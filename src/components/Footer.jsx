import React from 'react'
import {socialMedia} from '../constants'
import { SectionWrapper } from '../hoc'
const Footer = () => {
  return (
    <div className='w-full justify-end flex items-center md:flex-row flex-col pt-6  sm:py-6 py-6 bg-[rgba(255,255,255,0.35)]'>
        

        <div className='social-icon flex flex-row md:mt-0 mt-6 gap-6 float-right'>
            {socialMedia.map((social,index)=>(
                    <a className="w-10 h-10  flex items-center justify-center rounded-full mr-2 border bg-[#797979]
                    border-white border-[2px] relative overflow-hidden hover:bg-white hover:border-[#797979] group cursor-pointer"
                    href={social.link} target="_blank">
                    <img className="w-5 h-5 filter grayscale brightness-95 invert-0 sepia-7 saturate-100 hue-rotate-346 contrast-100 
                    group-hover:grayscale
                    group-hover:brightness-0 
                    group-hover:invert-100
                    group-hover:hue-rotate-346 
                    group-hover:saturate-98 
                    group-hover:contrast-86 
                    group-hover:sepia-7
                    transition ease-in-out duration-300" 
                    src={social.icon} alt={social.id} key={social.id} />
                    </a>
            
            ))}
        </div>
    </div>
  )
}

export default Footer