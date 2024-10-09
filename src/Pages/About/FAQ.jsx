import { useState, useEffect } from 'react';
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const faqData = [
  {
    question: "How do I get started with creating a USD/NGN card?",
    answer: "It is as easy as signing up on Payscribe and following the instructions on our website."
  },
  { 
    question: "What is your return policy?", 
    answer: "Our return policy allows returns within 30 days of purchase." 
  },
  { 
    question: "How secure are the transactions made through your platform?", 
    answer: "We have stringent security measures in place to ensure your transactions are safe." 
  },
  { 
    question: "Can I use your payment links for international transactions?", 
    answer: "Yes, you can use your payment links for international transactions." 
  },
];

const FAQ = () => {
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

  return (
    <div className={`relative ${searchActive ? 'backdrop-blur-md' : ''}`}>
      <div className={`fixed inset-0 z-50 flex justify-center items-start ${searchActive ? 'bg-black bg-opacity-50' : 'hidden'}`}>
        <div className="bg-white shadow-lg rounded-lg p-5 w-full max-w-md mt-20">
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
            className="absolute top-4 right-4 text-gray-500"
          >
            Close
          </button>
        </div>
      </div>

      <div className={`max-w-4xl mx-auto p-5 md:my-20 ${searchActive ? 'blur-sm' : ''}`}>
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <div key={index} className="border-b py-4">
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

              {openIndex === index && (
                <p className="mt-3 text-gray-600 transition-all duration-300 ease-in-out">
                  {faq.answer}
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-5">
            Can't find an answer? <a href="/support" className="text-blue-500">Contact support</a>.
          </p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
