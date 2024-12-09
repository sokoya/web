import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';

const socialMediaData = {
  facebook: { color: '#1877F2', icon: FaFacebookF, label: 'Facebook' },
  instagram: { color: '#E1306C', icon: FaInstagram, label: 'Instagram' },
  linkedin: { color: '#0077B5', icon: FaLinkedinIn, label: 'LinkedIn' },
  whatsapp: { color: '#25D366', icon: FaWhatsapp, label: 'WhatsApp' },
  twitter: { color: '#000000', icon: FaXTwitter, label: 'X' }, // Changed FaXTwitter to FaTwitter for consistency
};

const SocialMediaIcon = ({ platform, url, size = 24 }) => {
  const IconComponent = socialMediaData[platform]?.icon;
  const color = socialMediaData[platform]?.color;
  const label = socialMediaData[platform]?.label;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ filter: 'drop-shadow(0px 0px 0px transparent)' }}
      whileHover={{ scale: 1.2, filter: `drop-shadow(0px 0px 10px ${color})` }}
      whileTap={{ scale: 0.9 }}
      animate={{ filter: 'drop-shadow(0px 0px 0px transparent)' }}
      className="relative group p-2 m-1"
      style={{ color }}
    >
      {IconComponent && <IconComponent size={size} />}
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {label}
      </span>
    </motion.a>
  );
};


const SocialMediaIcons = ({ size }) => {
  return (
    <div className="flex justify-center space-x-4">
      <SocialMediaIcon platform="facebook" url="https://www.facebook.com/payscribe/" size={size} />
      <SocialMediaIcon platform="instagram" url="https://www.instagram.com/payscribe/?hl=en" size={size} />
      <SocialMediaIcon platform="linkedin" url="https://ng.linkedin.com/company/payscribe" size={size} />
      <SocialMediaIcon platform="whatsapp" url="https://wa.me/+2347038067493" size={size} />
      {/* <SocialMediaIcon platform="twitter" url="https://twitter.com" size={size} /> */}
    </div>
  );
};

export default SocialMediaIcons;
