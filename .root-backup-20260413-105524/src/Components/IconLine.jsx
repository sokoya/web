import React, { useEffect, useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Overlay from '/assets/exports/overlay.png';
import { Link } from 'react-router-dom';
const IconLine = () => {
  const iconRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (iconRef.current) observer.observe(iconRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="line-container md:hidden flex">
      <motion.div
        className="line"
        animate={inView ? { backgroundColor: '#fff' } : { backgroundColor: '#ccc' }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        ref={iconRef}
        className="icon-container"
        initial={{ scale: 1 }}
        animate={inView ? { scale: 1.2, filter: 'drop-shadow(0 0 10px #1D4ED8) drop-shadow(0 0 20px #1D4ED8) drop-shadow(0 0 30px #1D4ED8)' } : { scale: 1, filter: 'none' }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {/* <FaStar className="icon" /> */}
        <Link to="/"><img src={Overlay} className='icon h-10'/></Link>

      </motion.div>
      <motion.div
        className="line"
        animate={inView ? { backgroundColor: '#fff' } : { backgroundColor: '#ccc' }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};
// import React, { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import PropTypes from 'prop-types';

// const IconLine = ({
//   glowColor = '#1D4ED8',
//   lineColor = '#ccc',
//   glowingLineColor = '#fff',
//   iconColor = '#fff',
//   children
// }) => {
//   const iconRef = useRef(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setInView(entry.isIntersecting),
//       { threshold: 0.5 }
//     );
//     if (iconRef.current) observer.observe(iconRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="line-container flex md:hidden">
//       {/* Left line segment */}
//       <motion.div
//         className="line"
//         style={{ backgroundColor: inView ? glowingLineColor : lineColor }}
//         animate={inView ? { backgroundColor: glowingLineColor } : { backgroundColor: lineColor }}
//         transition={{ duration: 0.5 }}
//       />
//       {/* Icon or content */}
//       <motion.div
//         ref={iconRef}
//         className="icon-container"
//         style={{ color: iconColor }}
//         initial={{ scale: 1 }}
//         animate={inView ? { scale: 1.2, filter: `drop-shadow(0 0 10px ${glowColor}) drop-shadow(0 0 20px ${glowColor}) drop-shadow(0 0 30px ${glowColor})` } : { scale: 1, filter: 'none' }}
//         transition={{ delay: 0.5, duration: 0.5 }}
//       >
//         {children}
//       </motion.div>
//       {/* Right line segment */}
//       <motion.div
//         className="line"
//         style={{ backgroundColor: inView ? glowingLineColor : lineColor }}
//         animate={inView ? { backgroundColor: glowingLineColor } : { backgroundColor: lineColor }}
//         transition={{ duration: 0.5 }}
//       />
//     </div>
//   );
// };

// IconLine.propTypes = {
//   glowColor: PropTypes.string,
//   lineColor: PropTypes.string,
//   glowingLineColor: PropTypes.string,
//   iconColor: PropTypes.string,
//   children: PropTypes.node.isRequired,
// };

// export default IconLine;

export default IconLine;
// import { FaStar } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Overlay from 'path-to-your-overlay-image'; // Ensure path is correct

// const ExampleUsage = () => (
//   <IconLine
//     glowColor="#FF5733"         // Custom glow color
//     lineColor="#888"             // Custom line color when not glowing
//     glowingLineColor="#FFD700"   // Custom line color when glowing
//     iconColor="#FFD700"          // Optional: color of icon content
//   >
//     {/* Any content you want to glow */}
//     <Link to="/">
//       <img src={Overlay} alt="Overlay Icon" className="icon h-10" />
//     </Link>
//   </IconLine>
// );
