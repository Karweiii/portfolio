import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {styles} from '../style'
import {navLinks} from '../constants'
import {logo,kwlogowhite,menu,close,tkw2} from '../assets'
import {socialMedia} from '../constants'

const Navbar = () => {
  const[active,setActive]=useState(""); 
  const[toggle,setToggle]=useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex  py-5  top-0 z-20 bg-[rgba(255, 255, 255, .4)]`} id='home'>
      <div className='w-full flex justify-between items-center  mx-auto'>
        <Link to="/" className="flex items-center gap-2" onClick={()=>{setActive(""); window.scrollTo(0,0);}}>
          <img src={kwlogowhite} alt="logo" className="w-9 h-9 object-contain" />
          <p className='text-white text-[18px] font-bold cursor-pointer flex' >Kar Wei &nbsp;<span className='md:block hidden'>| Personal Portfolio</span></p>
        </Link>
      </div>
      <button className='nav-toggler w-[50px] h-[50px] cursor-pointer rounded-full fixed	right-[3%] z-[1000] ' onClick={()=>setToggle(!toggle)}>
          <span></span>
      </button>
      <div className={`nav-menu ${!toggle? ' ':'active'} bg-gradient-to-l from-[#EFEFBB] to-[#D4D3DD]`}>
        <div className='nav-inner justify-between sm:flex-row flex-col flex md:h-[80%] sm:mt-[10%] xl:mt-[5%] mt-[15%]  '>
          <div className='items-center flex left-[10%] '>
            <ul>
              <li><a href='#home' className='nav-item flex-row' onClick={()=>setToggle(!toggle)}><div className='items-center w-fit whitespace-nowrap flex text-[#797979]'>home</div></a></li>
              <li><a href='#about' className='nav-item' onClick={()=>setToggle(!toggle)}><div className='items-center w-fit whitespace-nowrap flex text-[#797979]'>about</div></a></li>
              <li><a href='#work' className='nav-item' onClick={()=>setToggle(!toggle)}><div className='items-center w-fit whitespace-nowrap flex text-[#797979]'>work</div></a></li>
              <li><a href='#contact' className='nav-item' onClick={()=>setToggle(!toggle)}><div className='items-center w-fit whitespace-nowrap flex text-[#797979]'>contact</div></a></li>
            </ul>
          </div>
          <div className='items-center w-[35%] p-[20px] sm:flex-col flex-row self-center flex justify-center'>
            <div className='mb-[20px] sm:block  hidden'>
              <img src={tkw2} alt="photo" className='h-[80%] aspect-square rounded-full '/>
            </div>
            <div className='flex gap-10'>
                {socialMedia.map((social,index)=>(
                    <a className="w-10 h-10 bg-[#797979] flex items-center justify-center rounded-full mr-2 border 
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
        </div>
        
      </div>
      
    </nav>
    
  )
}

export default Navbar