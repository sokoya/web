import { motion } from "framer-motion";
import React from "react";

function SvgAnimation() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      <motion.path
        d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
        fill="transparent"
        stroke="#0f62fe"
        strokeWidth="5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </svg>
  );
}
