import React from 'react'
import { motion } from "framer-motion";
const HomeMain: React.FC = () => {
    const header = "SAFE VOTING THROUGHT INTERNET";
  return (
        <motion.div initial={{opacity: 0 , y: 100}} animate={{opacity: 1 , y: 0}} transition={{duration: 0.7 , ease: "easeOut"}} className='flex justify-center items-center flex-col'>
            <div className='my-20'>
                <h1 className='text-5xl font-black text-white my-5'>
                    {header.split("").map((letter, index) => (
                        <motion.span
                        key={index}
                        initial={{ color: "#ffffff" }}
                        animate={{ color: "#EE6C4D" }}
                        transition={{ duration: 1 ,
                            delay: index * 0.1,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                        >
                        {letter == " " ? "\u00A0" : letter}      
                        </motion.span>
                    ))}
                </h1>
                <h2 className='text-2xl font-black text-white'>Create elections for your school or institution in moments</h2>
                <h2 className='text-2xl font-black text-white my-5'>Voters can vote from anywhere on their personal devices.</h2>
                <button className='bg-[#EE6C4D] text-white py-2 px-4 w-160 h-15 text-2xl rounded-2xl'>Create an <span className='font-bold'>election</span></button>
            </div>  
            <div >
            </div>
        </motion.div>
  )
}

export default HomeMain