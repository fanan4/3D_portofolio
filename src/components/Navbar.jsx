import React,{ useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import { logo,menu,close } from '../assets'
import { styles } from '../style'
import { motion } from 'framer-motion'
const Navbar = () => {
  const [active,setActive]=useState('')
  const [toggle, setToggle]=useState(false)
  return (
    <nav className={` ${styles.paddingX } z-20  w-full flex items-center py-5 fixed top-0 bg-primary`} >
       <div className="w-full flex items-center justify-between mx-auto max-w-7xl"> 
             <Link
               to="/"
               className='flex items-center justify-between'
               onClick={()=>{
                   setActive(''); 
                   window.scrollTo(0,0);  
               }}
             >
                <img src={ logo } alt='logo'  className='w-12  h-12 object-contain '/>  
                <p className='text-white text-[18px] font-bold cursor-pointer'>
                  Fanan <span className='sm:block hidden'>|Abdelouahed</span> 
                </p>
             </Link>
              
             <ul className='list-none hidden sm:flex flex-row gap-10'>
                 {
                    navLinks.map((link)=>(
                      <motion.li  
                        whileHover={{
                          scale:1.2,
                          textShadow:'0px 0px 8px #f3f5e6', 
                          originX:1
                        }}
                        transition={{
                          type:'spring',
                          stiffness:300
                        }}
                         className={ `${active===link.id?
                                        "text-white":
                                        "text-secondary"} 
                                      hover:text-white text-[18px] font-medium `}
                          onClick={()=>{
                             setActive(link.id)
                          }}
                          
                      >
                          <a href={`#${link.id}`}>{link.title}</a> 
                      </motion.li>
                    ))
                 }  
            </ul>
            <div className='sm:hidden flex justify-end '>
                <img
                  src={ toggle ? close: menu}
                  className='w-30 h-30 cursor-pointer '
                  onClick={()=>{
                     setToggle(!toggle)

                  }}
                />
                  <div className={!toggle ? 'hidden' :
                                            'black-gradient min-w-[140px] p-6 absolute right-0 top-20 mx-4 z-10 rounded-xl'}> 
                             <ul className='list-none flex flex-col justify-end items-start gap-4'>
                 {
                    navLinks.map((link)=>(
                      <motion.li  
                      whileHover={{
                        scale:1.2,
                        textShadow:'0px 0px 8px #f3f5e6', 
                      }}
                         className={ `${active===link.id?
                                        "text-white":
                                        "text-secondary"} 
                                      hover:text-white text-[14px] font-medium `}
                          onClick={()=>{
                             setActive(link.id);
                             setToggle(!toggle);

                          }}
                          
                      >
                          <a href={`#${link.id}`}>{link.title}</a> 
                      </motion.li>
                    ))
                 }  
                      </ul>               
                  </div>    
            </div>
       </div>
    </nav>
  )
}

export default Navbar