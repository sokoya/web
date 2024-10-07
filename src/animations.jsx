export const show = {
  hidden: { 
    opacity: 0, 
    y: 150 
  },
  hiddenimg: { 
    opacity: 0, 
    scale: 0 
  },
  imageshow: {
    opacity: 1,
    scale: 0.9,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 10,
      mass: 1,
      duration: 1.5,
      delayChildren: 0.5, // Delay between children
      staggerChildren: 0.3, // Stagger effect
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.3, // Stagger each child by 0.5s
      delayChildren: 0.3,   // Delay starting children animation by 0.3s
    },
  },
};


export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 }
  },
};

export const slideIn = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.8,
    },
  },
};

// Animation variants for the entire list container
export const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the appearance of children (list items)
    },
  },
};

// Animation variants for individual list items
export const itemVariants = {
  hidden: { opacity: 0, x: 20 }, // Start below and invisible
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 } // Ease the translation into view
  },
};

export const charVariants = {
  hidden: {opacity: 0},
  reveal: {opacity: 1},
}

export const menuListVariant = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2, // Staggering effect between list items
      when: 'beforeChildren', // Parent animates before children
    }
  },
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      when: 'afterChildren', // Children animate before parent hides
    }
  }
};

export const menuItemVariant = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 },
};

export const menuVariant = {
  open: {
    clipPath: 'circle(300% at 90% 50px)',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 400,
      damping: 60,
    },
  },
  closed: {
    clipPath: 'circle(30px at 92% 32px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  }
};