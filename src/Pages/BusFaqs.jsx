import { useState, useEffect } from 'react';
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { Helmet } from 'react-helmet';
import { RxCross2 } from "react-icons/rx";
import HeroComponent from '../Components/HeroComponent';
import FaqPhone from "/assets/exports/FaqPhone.svg"
import WhiteStar from "/assets/exports/WhiteStar.svg"

const faqData = [
  { 
    question: "How do I get started with Payscribe?",
    answer: "It is pretty easy and seamless, kindly create an account by clicking visiting https://app.payscribe.ng. The onbarding prcess takes few minutes." 
  },
  { 
    question: "How secure are the transactions made through your platform?", 
    answer: "We have stringent security measures in place to ensure your transactions are safe. All transactions are 100% secured" 
  },
  { 
    question: "Can I use your payment links for international transactions?", 
    answer: "Yes, you can use your payment links for international transactions."
   },
   {
    question: "How can payscribe improve my business?",
    answer: "",
   },
   {
    question: "How long is the onboarding proccess?",
    answer: "",
   },
   {
    question: "How do I get the API documentation",
    answer: "On your dashboard, click on your profile > API",
   },
   {
    question: "",
    answer: "",
   }
];

const BusFAQs = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which FAQ is open
  const [searchQuery, setSearchQuery] = useState(''); // Search query state
  const [searchActive, setSearchActive] = useState(false); // Search activation state

  // Toggle open state for the clicked FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Toggle search bar visibility with "/" or "Ctrl + K"
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' || (e.ctrlKey && e.key === 'k')) {
        e.preventDefault();
        setSearchActive(true);
      }
      if (e.key === 'Escape') {
        setSearchActive(false);
        setSearchQuery('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter FAQ data based on search query
  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle result click and open the corresponding FAQ
  const handleResultClick = (index) => {
    setOpenIndex(index); // Open the selected FAQ
    setSearchActive(false); // Close the search bar
    setTimeout(() => {
      const element = document.getElementById(`faq-${index}`);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Delay to let search bar close before scroll
  };

  return (
    <div className={`relative ${searchActive ? 'overflow-hidden' : ''}`}>
      <Helmet>
                <meta charSet="utf-8" />
                
                <title>FAQs | Payscribe</title>
            </Helmet>
      {/* Search Button */}
      <HeroComponent
      customSectionStyle='-my-5'
        title="FAQ"
        subtitle="You've got any questions?"
        description="Go through our FAQs to find the answer you're looking for."
        primaryLink="/start"
        primaryLinkText="Create account"
        secondaryLink="/book-a-demo"
        secondaryLinkText="Contact Support"
        // bgColor="bg-gradient-to-r from-purple-600 to-blue-500"
        textColor="text-white"
        additionalImage={FaqPhone}
        additionalContent={
          <div>
            <img src={WhiteStar} alt="" className="absolute left-[50%] top-[15%] glow" />
            <img src={WhiteStar} alt="" className="absolute left-[55%] top-[45%] glow" />
            <img src={WhiteStar} alt="" className="absolute left-[90%] top-[20%] glow" />

          </div>
        }
        columns={2}
        order={['text', 'image', 'additionalContent']}
      />
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setSearchActive(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <FiSearch className="mr-2" />
          Search FAQs
        </button>
      </div>

      {/* Search Overlay */}
      <div className={`fixed inset-0 z-50 flex justify-center items-start ${searchActive ? 'bg-black bg-opacity-50 backdrop-blur-md' : 'hidden'}`}>
        <div className={`relative bg-white shadow-lg rounded-lg p-5 w-full max-w-md mt-20 transform transition-all duration-300 ${searchActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <button
            onClick={() => setSearchActive(false)}
            className="absolute top-1 right-1 text-gray-500"
          >
            <RxCross2/>
          </button>
          
          {/* Display search results below search bar */}
          {filteredFAQs.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg border border-gray-300 mt-2 z-50  rounded-lg">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleResultClick(faqData.indexOf(faq))} // Use index of original FAQ
                >
                  <h3 className="text-md font-medium py-2 px-4">{faq.question}</h3>
                </div>
              ))}
            </div>
          )}
          
          {filteredFAQs.length === 0 && (
            <p className="text-center text-gray-500 mt-5">No results found.</p>
          )}
        </div>
      </div>

      {/* FAQ Content */}
      <div className={`max-w-4xl mx-auto p-5 md:my-20 transition-all duration-300 ease-in-out ${searchActive ? 'blur-sm' : ''}`}>
        <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
        
        {faqData.map((faq, index) => (
          <div key={index} id={`faq-${index}`} className="border-b py-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)} 
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {openIndex === index ? (
                <IoChevronUp className="text-xl" />
              ) : (
                <IoChevronDown className="text-xl" />
              )}
            </div>

            {/* Drop down FAQ answer */}
            {openIndex === index && (
              <p className="mt-3 text-gray-600 transition-all duration-300 ease-in-out">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusFAQs;
