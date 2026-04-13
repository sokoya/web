import { useState } from "react";
import { motion } from "framer-motion";

function AnimatedMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Variants for the box animation
  const boxVariants = {
    closed: { scale: 1, x: 0, borderRadius: "0%", transition: { duration: 0.5 } },
    open: { scale: 0.8, x: -50, borderRadius: "15px", transition: { duration: 0.5 } },
  };

  // Variants for each menu item popping up
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {/* Box that animates when menu opens */}
      <motion.div
        className="w-40 h-40 bg-blue-500 flex items-center justify-center cursor-pointer"
        onClick={toggleMenu}
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={boxVariants}
      >
        <p className="text-white font-semibold">Menu</p>
      </motion.div>

      {/* Menu items that pop up one after another */}
      {menuOpen && (
        <div className="mt-5 space-y-3">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              className="text-lg font-medium text-gray-700"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ delay: index * 0.15 }} // Stagger the appearance of each item
            >
              {item}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AnimatedMenu;
