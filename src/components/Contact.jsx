import React from 'react'
import { useState,useRef } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { Earth,Stars } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

//temp
//template_wkm7e67

//service_zj49sin

//OBDTxX9y-7SW-zRhg

const Contact = () => {
  const formRef=useRef(null)
  const [form,setForm]=useState({
    name:'',
    email:'',
    message:'',
  });
  const[loading,setLoading]=useState(false)

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setForm({...form,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
    //template_wkm7e67

//service_zj49sin

//OBDTxX9y-7SW-zRhg
    emailjs.send(
      'service_zj49sin',
      'template_wkm7e67',
      {
        from_name:form.name,
        to_name:'Kar Wei',
        from_email:form.email,
        to_email:'karwei2002@gmail.com',
        message:form.message
      },
      'OBDTxX9y-7SW-zRhg'
      ).then(()=>{
        setLoading(false),
        alert('Thank You. I will get back to you ASAP!');
        setForm({
          name:'',
          email:'',
          message:'',
        })
      },(error)=>{
        setLoading(false)
        console.log(error);
        alert("Oops something went wrong, email was not send successfully")
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden bg-[rgba(255,255,255,0.35)] rounded-3xl backdrop-blur-md'>
      
      <motion.div variants={slideIn('left','tween',0.2,1)}
      className="flex-[0.75]  p-8 rounded-2xl">
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider ">Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>

          <form ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
            <label className='flex flex-col'>
              <span className='text-secondary font-medium mb-4'>Your Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?"
              className="bg-[rgba(255,255,255,0.45)] py-4 px-6 placeholder:text-secondary text-[#797979] rounded-lg outlined:none border-none font-medium"></input>
            </label>

            <label className='flex flex-col'>
              <span className='text-secondary font-medium mb-4'>Your Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?"
              className="bg-[rgba(255,255,255,0.45)] py-4 px-6 placeholder:text-secondary text-[#797979] rounded-lg outlined:none border-none font-medium"></input>
            </label>

            <label className='flex flex-col'>
              <span className='text-secondary font-medium mb-4'>Your Message</span>
              <textarea style={{maxHeight:'224px'}} rows="8" name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?"
              className="bg-[rgba(255,255,255,0.45)] py-4 px-6 placeholder:text-secondary text-[#797979] rounded-lg outlined:none border-none font-medium"/>
            </label>
            {/* bg-[rgba(255,255,255,0.40)] py-3 px-8 outline-none w-fit text-[#797979] border-[1px] border-[rgba(255,255,255,0.25)] font-bold   rounded-xl */}
            <button type='submit' className='cont-bt '>
              {loading?'Sending...':'Send'}
            </button>
          </form>
      </motion.div>

      <motion.div variants={slideIn('right','tween',0.2,1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <Earth/>
      </motion.div>
    </div>

  )
}

export default SectionWrapper(Contact,"contact")