import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ContentCard = ({ logo, name, link, desc }) => (
  <div className="p-2 items-center my-10 bg-slate-100 m-5 rounded-2xl text-center">
    <div className='justify-center flex'>
    <img src={logo} alt={`${name} logo`} className="md:h-20 h-32 md:w-20 w-32 md:mx-20 mx-32 md:my-5 my-10" />
    </div>
    <h2 className="md:my-1 my-4 text-lg font-semibold">{name}</h2>
    <div className='flex w-full justify-center items-center'>
    <p className='mt-2 text-sm max-w-52  text-center flex justify-center'>{desc}</p>

    </div>
    <Link to={link} className="text-white bg-black md:p-2 p-3 rounded-xl md:mx-2 mx-3 md:my-8 my-5 font-medium flex items-center justify-center ">
      <span>Read more</span>
      {/* <FaArrowRight className="ml-2" /> */}
    </Link>
  </div>
);

export default ContentCard;
