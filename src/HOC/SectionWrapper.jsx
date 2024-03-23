import React from 'react'
import { motion } from 'framer-motion' 
import { staggerContainer } from '../utils/motion'
import { styles } from '../style'
 const SectionWrapper=(Component, idName) => function HOC(){
  return (
    <motion.section
        variants={ staggerContainer() }
        initial='hidden'
        viewport={{once:true, amount:0.25}}
        whileInView='Show'
        className={` mx-auto max-w-7xl realtive ${ styles.padding }`}
    >
       <span className=' hash-span' id={idName}>
         &nbsp;
       </span> 
       <Component/>

    </motion.section>
  )
}
  
export default SectionWrapper 

