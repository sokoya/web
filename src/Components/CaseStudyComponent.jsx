import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function CaseStudyComponent({
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
  quoteBanner1,
  quotePerson1,
  quoteRole1,
  partnershipTitle,
  partnershipContent,
  quoteBanner2,
  endingButton1,
  endingButton2,
  brandIntegrationTitle,
  brandIntegrationContent,
  productTitle,
  productContent,
}) {
  return (
    <div className="flex flex-col w-full">
      {/* Banner Link Back */}
      <div className="bg-gray-100 p-3">
        <Link to={bannerLink} className="text-blue-600 hover:text-blue-800">
          ← Back to Case Studies
        </Link>
      </div>

      {/* Brand Details */}
      <div className="p-5 flex justify-between items-start bg-gray-50">
        <img src={brandLogo} alt={`${brandName} logo`} className="h-12 w-12 mr-4" />
        <div className="flex flex-col">
          <p className="text-sm text-gray-500">{brandCategory}</p>
          <p className="font-semibold text-lg">{brandMoto}</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[5fr_2fr] gap-6 p-6">
        {/* Left Section */}
        <div>
          {/* Brand Name and About */}
          <h2 className="text-2xl font-bold text-primary">{brandName}</h2>
          <p className="text-sm text-gray-500 mb-3">{brandLocation}</p>
          <p className="mb-5">{aboutBrand}</p>

          {/* How It Started */}
          <h3 className="text-xl font-semibold text-primary">{howItStartedTitle}</h3>
          <p className="mb-5">{howItStartedContent}</p>

          <hr className="my-4 border-gray-300" />

          {/* Frustration to Innovation */}
          <h3 className="text-xl font-semibold text-primary">{frustrationTitle}</h3>
          <p className="mb-5">{frustrationContent}</p>

          {/* Optional Quote Banner 1 */}
          {quoteBanner1 && (
            <div className="bg-blue-100 p-4 my-5 rounded-lg text-center">
              <blockquote className="italic text-lg">"{quoteBanner1}"</blockquote>
              {quotePerson1 && (
                <div className="flex items-center mt-4">
                  <img
                    src={quotePerson1?.image}
                    alt={quotePerson1?.name}
                    className="h-10 w-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">{quotePerson1?.name}</p>
                    <p className="text-sm text-gray-600">{quoteRole1}</p>
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
            <div className="bg-blue-100 p-4 my-5 rounded-lg text-center">
              <blockquote className="italic text-lg">"{quoteBanner2}"</blockquote>
            </div>
          )}

          <hr className="my-4 border-gray-300" />

          {/* Ending Buttons */}
          <div className="flex space-x-3">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
              {endingButton1}
            </button>
            <button className="bg-gray-200 text-black py-2 px-4 rounded-lg">
              {endingButton2}
            </button>
          </div>
        </div>

        {/* Right Section: Integration & Product */}
        <div>
          {/* Brand Integration */}
          <h3 className="text-lg font-semibold text-primary">{brandIntegrationTitle}</h3>
          <ul className="list-disc list-inside mb-5">
            {brandIntegrationContent.map((item, idx) => (
              <li key={idx} className="text-gray-600">{item}</li>
            ))}
          </ul>

          {/* Product */}
          <h3 className="text-lg font-semibold text-primary">{productTitle}</h3>
          <ul className="list-disc list-inside">
            {productContent.map((item, idx) => (
              <li key={idx} className="text-gray-600">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Define prop types for better reusability
CaseStudyComponent.propTypes = {
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
  quoteBanner1: PropTypes.string,
  quotePerson1: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
  }),
  quoteRole1: PropTypes.string,
  partnershipTitle: PropTypes.string.isRequired,
  partnershipContent: PropTypes.node.isRequired,
  quoteBanner2: PropTypes.string,
  endingButton1: PropTypes.string.isRequired,
  endingButton2: PropTypes.string.isRequired,
  brandIntegrationTitle: PropTypes.string.isRequired,
  brandIntegrationContent: PropTypes.arrayOf(PropTypes.string).isRequired,
  productTitle: PropTypes.string.isRequired,
  productContent: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CaseStudyComponent.defaultProps = {
  quoteBanner1: null,
  quotePerson1: null,
  quoteRole1: null,
  quoteBanner2: null,
};
