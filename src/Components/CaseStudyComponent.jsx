import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
export function CaseStudyComponent({
  bgImage,
  bannerLink,
  brandLogo,
  brandCategory,
  brandMoto,
  brandName,
  brandLocation,
  aboutBrand,
  howItStartedTitle,
  howItStartedContent,
  frustrationTitle,
  frustrationContent,
  quoteBanner0,
  quotePerson0,
  quoteRole0,
  quoteBanner1,
  quotePerson1,
  quoteRole1,
  partnershipTitle,
  partnershipContent,
  quoteBanner2,
  quotePerson2,
  quoteRole2,
  endingParagraph,
  endingButton2,
  brandIntegrationTitle,
  brandIntegrationContent,
  productTitle,
  productContent,
}) {
  return (
    <div className="flex flex-col w-full relative md:p-10">
        <div className='flex justify-center'>
            <img src={brandLogo} className='w-32 h-32' />
        </div>
        <div className={`my-20 items-center ${bgImage} bg-[url('/assets/images/homepage/Screenshot (256).png')]`}>
      {/* Banner Link Back */}
      <div className="bg-gray-100 p-5">
        <Link to='/case-studies' className="text-blue-600 hover:text-blue-800 ">
          ← Case Studies
        </Link>
      </div>

      {/* Brand Details */}
      <div className="p-5 justify-around items-start ">
        <div className='items-center'>

        <div className="flex m-5 bg-gray-50">
        <img src={brandLogo} alt={`${brandName} logo`} className="h-20 w-20 mr-4" />
          <span className=" text-white my-5 uppercase font-semibold p-3 rounded-xl bg-black flex justify-center md:w-[15%] w-auto">{brandCategory}</span>
       </div>
       <div className=''>
          <p className="font-semibold md:text-6xl text-3xl text-center">{brandMoto}</p>
        </div>
        </div>
      </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[5fr_2fr] md:gap-6 gap-2 md:p-6 p-2">
        {/* Left Section */}
        <div className='p-5'>
          {/* Brand Name and About */}
          <h2 className="text-2xl font-semibold text-primary">{brandName}</h2>
          <p className="text-sm text-gray-500 mb-3 flex p-2 items-center"><span><IoLocationOutline/></span>{brandLocation}</p>
          <p className="mb-5">{aboutBrand}</p>

          {/* How It Started */}
          <h3 className="text-xl font-semibold text-primary">{howItStartedTitle}</h3>
          <p className="mb-5">{howItStartedContent}</p>
          {quoteBanner0 && (
            <div className="bg-basic-gradient p-4 text-white my-5 rounded-lg text-center">
              <blockquote className="italic text-2xl p-3">"{quoteBanner0}"</blockquote>
              {quotePerson0 && (
                <div className="flex items-center mt-4">
                  <img
                    src={quotePerson0?.image}
                    alt={quotePerson0?.name}
                    className="h-10 w-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">{quotePerson0?.name}</p>
                    <p className="text-sm text-slate-200">{quoteRole0}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          <hr className="my-4 border-gray-300" />

          {/* Frustration to Innovation */}
          <h3 className="text-xl font-semibold text-primary">{frustrationTitle}</h3>
          <p className="mb-5">{frustrationContent}</p>

          {/* Optional Quote Banner 1 */}
          {quoteBanner1 && (
            <div className="bg-basic-gradient p-4 text-white my-5 rounded-lg text-center">
              <blockquote className="italic text-2xl p-3">"{quoteBanner1}"</blockquote>
              {quotePerson1 && (
                <div className="flex items-center mt-4">
                  <img
                    src={quotePerson1?.image}
                    alt={quotePerson1?.name}
                    className="h-10 w-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">{quotePerson1?.name}</p>
                    <p className="text-sm text-slate-200">{quoteRole1}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          <hr className="my-4 border-gray-300" />

          {/* Partnership */}
          <h3 className="text-xl font-semibold text-primary">{partnershipTitle}</h3>
          <div className="mb-5">{partnershipContent}</div>

          {/* Optional Quote Banner 2 */}
          {quoteBanner2 && (
            <div className="bg-basic-gradient p-4 text-white my-5 rounded-lg text-center">
              <blockquote className="italic text-2xl p-3">"{quoteBanner2}"</blockquote>
              {quotePerson1 && (
                <div className="flex items-center mt-4">
                  <img
                    src={quotePerson2?.image}
                    alt={quotePerson2?.name}
                    className="h-10 w-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">{quotePerson2?.name}</p>
                    <p className="text-sm text-slate-200">{quoteRole2}</p>
                  </div>
                </div>
              )}
            </div>
          )}


          <hr className="my-4 border-gray-300" />

          {/* Ending Buttons */}
          <div className="md:flex block md:space-x-3 space-x-1">
            <p className=" py-2 px-4">
              {endingParagraph}
            </p>
            <Link to='/book-a-demo' className="bg-gray-200 text-black py-2 px-4 rounded-lg">
              {endingButton2}
            </Link>
          </div>
        </div>

        {/* Right Section: Integration & Product */}
        <div className=''>
            <div className='sticky top-[5.5em] bg-black text-white p-5 rounded-3xl m-1'>
          {/* Brand Integration */}
          <h3 className="text-xl font-semibold text-white">{brandIntegrationTitle}</h3>
          <ul className="mb-5">
            {brandIntegrationContent.map((item, idx) => (
              <li key={idx} className="text-white">{item}</li>
            ))}
          </ul>

          {/* Product */}
          <h3 className="text-xl font-semibold text-white">{productTitle}</h3>
          <ul className="">
            {productContent.map((item, idx) => (
              <li key={idx} className="text-white">{item}</li>
            ))}
          </ul></div>
        </div>
      </div>
    </div>
  );
}

// Define prop types for better reusability
CaseStudyComponent.propTypes = {
  bgImage: PropTypes.string,
  bannerLink: PropTypes.string.isRequired,
  brandLogo: PropTypes.string.isRequired,
  brandCategory: PropTypes.string.isRequired,
  brandMoto: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  brandLocation: PropTypes.string.isRequired,
  aboutBrand: PropTypes.string.isRequired,
  howItStartedTitle: PropTypes.string.isRequired,
  howItStartedContent: PropTypes.string.isRequired,
  frustrationTitle: PropTypes.string.isRequired,
  frustrationContent: PropTypes.string.isRequired,

  quoteBanner0: PropTypes.string,
  quotePerson0: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
  }),
  quoteRole0: PropTypes.string,

  quoteBanner1: PropTypes.string,
  quotePerson1: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
  }),
  quoteRole1: PropTypes.string,

  quoteBanner2: PropTypes.string,
  quotePerson2: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
  }),
  quoteRole2: PropTypes.string,

  partnershipTitle: PropTypes.string.isRequired,
  partnershipContent: PropTypes.node.isRequired,
  endingParagraph: PropTypes.string.isRequired,
  endingButton2: PropTypes.string.isRequired,
  brandIntegrationTitle: PropTypes.string.isRequired,
  brandIntegrationContent: PropTypes.arrayOf(PropTypes.string).isRequired,
  productTitle: PropTypes.string.isRequired,
  productContent: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CaseStudyComponent.defaultProps = {
  quoteBanner1: null,
  bgImage: null,
  quotePerson1: null,
  quoteRole1: null,
  quoteBanner2: null,
};
