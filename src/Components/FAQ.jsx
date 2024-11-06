import { useState } from 'react';
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const faqData = [
    {
      question: "How do I get started with creating a USD/NGN card?",
      answer: "It is as eay as signing up on payscribe and following the instructions on our website."

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

  // Toggle open state for the clicked FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-5 md:my-20 m-10 ">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div 
          key={index} 
          className="border-b py-4"
        >
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
      ))}
    </div>
  );
};

export default FAQ;