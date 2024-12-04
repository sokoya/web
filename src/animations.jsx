export const show = {
  hidden: { 
    opacity: 0, 
    y: 100 
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
      delayChildren: 0.5, 
      staggerChildren: 0.3,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.3, 
      delayChildren: 0.3,   
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
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 1.8,
    },
  },
};


export const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};


export const itemVariants = {
  hidden: { opacity: 0, x: 20 }, 
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 } 
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
      staggerChildren: 0.2, 
      when: 'beforeChildren', 
    }
  },
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      when: 'afterChildren', 
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
    clipPath: 'circle(30px at 92% 35px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  }
};

export const fadeSlideStagger = {
  hidden: { 
    opacity: 0, 
    // x: -50, 
  },
  show: {
    opacity: 1, 
    x: 0, 
    transition: {
      x: { type: 'spring', stiffness: 100, damping: 20 }, 
      opacity: { duration: 0.8 }, 
    },
  },
  container: {
    show: {
      transition: {
        staggerChildren: 0.3, 
      }
    }
  }
};


