import React from 'react'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
import { motion } from "framer-motion";
import SectionWrapper from '../HOC';
const Hero = () => {
  return (
    <section className='relative w-full h-[130vh] mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto
                            flex flex-row  items-start gap-5`}>
            {/* for indication bar  */}                  
            <div className='flex flex-col  items-center  mt-5'>
               <div className='w-5 h-5 rounded-full bg-[#b64ed9]'/> 
               <div className='w-1 sm:h-80 h-40 violet-gradient'/>  
            </div>  
            {/* for details information   */}   
            <div className=''>
                <h1 className={`${styles.heroHeadText}`}>Hi, i'm
                   <span className='text-[#915EFF]'>Abdo</span>
                </h1>
                <p className={`${styles.heroSubText} max-w-[805px] text-white-100`}>
                          I'ma software engineer who loves building mobile apps and web applications.
                             <span className='sm:block hidden'>
                                  I'm skilled in both frontend and backend development, and I also know about DevOps.
                            </span> 
               </p> 
             </div>              
            
      </div>
       <ComputersCanvas/>   
    </section> 
  )
}

export default SectionWrapper(Hero,'hero')