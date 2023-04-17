import React from 'react'
import{BrowserRouter} from'react-router-dom'
import {About,Contact,Experience,Feedback,Hero,Loader,Tech,Works, Navbar, Stars,Particle,Footer,Bgcircle} from './components'
import {Parallax,ParallaxLayer} from '@react-spring/parallax'
import { Starfieldbg } from './assets'
const App=()=>{
  return(
    <BrowserRouter>
            <Bgcircle/>
            <Navbar/>
            <div className=''>
              <Hero/>
              
              <About/>
              </div>
              <Experience/>
              <Tech/>
              <Works/>
              <Contact/>
            
            <Footer/>
    </BrowserRouter>
  )
}

export default App
