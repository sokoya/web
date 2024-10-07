import React from 'react'

function ForBusiness() {
  return (
    <div>
        <motion.p  
            initial="hidden"
            whileInView="reveal"
            transition={{staggerChildren: 0.02}}
            className='whotext'>
            {whotextchars.map((char) => (
          <motion.span key={char}
           transition={{ duration: 0.5 }}
           variants={charVariants}>
            {char}
          </motion.span>
        ))}
            </motion.p>
      </div>
  )
}

export default ForBusiness