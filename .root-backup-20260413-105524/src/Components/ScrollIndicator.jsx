// import { motion, useScroll } from "framer-motion"

// export const CircleIndicator = () => {
//   const { scrollYProgress } = useScroll()

//   return (
//     <motion.path
//       d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
//       style={{ pathLength: scrollYProgress }}
//     />
//   )
// }

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ScrollIndicator() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateScrollY = () => setScrollY(window.scrollY / (document.body.scrollHeight - window.innerHeight));
    window.addEventListener("scroll", updateScrollY);
    return () => window.removeEventListener("scroll", updateScrollY);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-1/2 transform -translate-x-1/2 h-1 bg-blue-700 origin-center bring"
      style={{ width: `${scrollY * 100}%` }}
      initial={{ width: "0%" }}
      animate={{ width: `${scrollY * 100}%` }}
      transition={{ duration: 0.1 }}
    />
  );
}

export default ScrollIndicator