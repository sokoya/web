import { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

interface CardProps extends PropsWithChildren {
  className?: string
  onClick?: () => void
}

const Card = ({ children, className, onClick }: CardProps) => {
  return (
    <motion.div
      whileHover={{ scale: onClick ? 1.02 : 1 }}
      className={twMerge(
        'bg-white rounded-lg shadow-sm p-6',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

export default Card