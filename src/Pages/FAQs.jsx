import { useState, useEffect } from 'react'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
import { FiSearch } from 'react-icons/fi'
import { Helmet } from 'react-helmet'
import { RxCross2 } from 'react-icons/rx'
import HeroComponent from '../Components/HeroComponent'
import FaqPhone from '/assets/exports/FaqPhone.svg'
import WhiteStar from '/assets/exports/WhiteStar.svg'

const faqData = [
{
    question: "What services does Payscribe offer for businesses?",
answer: "Payscribe provides a comprehensive suite of financial services, including secure payment acceptance, virtual debit card issuance in USD/NGN, and financial management tools to streamline your operations and grow your business."
},
 {
  question: "How can my business accept payments using Payscribe?",
answer: "With Payscribe, you can integrate our API or use the dashboard to accept payments from multiple channels, including bank transfers, and mobile wallets, enabling a seamless experience for your customers."
},
 {
  question: "Can Payscribe support cross-border payments?",
answer: "Yes, Payscribe enables businesses to process cross-border transactions effortlessly with support for multiple currencies, ensuring secure and fast international payouts and settlements."
},
 {
  question: "How do I issue virtual cards through Payscribe?",
answer: "Using Payscribe’s card issuing API, you can create and manage virtual USD/NGN debit cards for your business or customers, giving them secure and flexible payment options."
},
 {
  question: "Is Payscribe suitable for small businesses and startups?",
answer: "Absolutely! Payscribe is designed to scale with your business, offering affordable and flexible solutions tailored to meet the needs of small businesses and startups."
},
 {
  question: "How secure is Payscribe’s platform?",
answer: "Payscribe employs advanced encryption and complies with global security standards to ensure all transactions and data are secure and protected from fraud."
},
 {
  question: "What industries does Payscribe support?",
answer: "Payscribe supports a variety of industries, including e-commerce, lending, payroll, marketplaces, mobility, and digital payment platforms, with customizable solutions to fit each sector’s unique needs."
},
 {
  question: "Can Payscribe handle recurring payments or subscriptions?",
answer: "Yes, Payscribe supports recurring payments, making it easy for subscription-based businesses to automate billing cycles and ensure consistent cash flow."
},
 {
  question: "How do I get started with Payscribe?",
answer: "Getting started is simple! Sign up for a Payscribe business account, integrate our API or use the dashboard, and start accessing our robust financial services. Our support team is available to guide you through the process."
},
{
  question: "What kind of customer support does Payscribe offer?",
answer: "We provide dedicated support via email, live chat to assist you with integration, troubleshooting, and optimizing your experience with Payscribe."
},
  
  // {
  //   question: 'Who is the developer of this site?',
  //   answer: 'Alpha-dev',
  // },
]

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null) // Track which FAQ is open
  const [searchQuery, setSearchQuery] = useState('') // Search query state
  const [searchActive, setSearchActive] = useState(false) // Search activation state

  // Toggle open state for the clicked FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Toggle search bar visibility with "/" or "Ctrl + K"
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' || (e.ctrlKey && e.key === 'k')) {
        e.preventDefault()
        setSearchActive(true)
      }
      if (e.key === 'Escape') {
        setSearchActive(false)
        setSearchQuery('')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Filter FAQ data based on search query
  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Handle result click and open the corresponding FAQ
  const handleResultClick = (index) => {
    setOpenIndex(index) // Open the selected FAQ
    setSearchActive(false) // Close the search bar
    setTimeout(() => {
      const element = document.getElementById(`faq-${index - 1}`)
      element?.scrollIntoView({ behavior: 'smooth' })
    }, 100) // Delay to let search bar close before scroll
  }

  return (
    <div className={`relative ${searchActive ? 'overflow-hidden' : ''}`}>
      <Helmet>
        <meta charSet="utf-8" />

        <title>FAQs | Payscribe</title>
      </Helmet>
      {/* Search Button */}
      <HeroComponent
        customSectionStyle="-my-5"
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
            <img
              src={WhiteStar}
              alt=""
              className="absolute left-[50%] top-[45%] glow"
            />
            <img
              src={WhiteStar}
              alt=""
              className="absolute left-[55%] top-[32%] glow"
            />
            <img
              src={WhiteStar}
              alt=""
              className="absolute left-[90%] top-[40%] glow"
            />
          </div>
        }
        columns={2}
        order={['text', 'image', 'additionalContent']}
        customimgstyle="md:static absolute md:scale-[80%] scale-[70%] "
      />
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setSearchActive(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <span className="md:flex hidden items-center justify-center">
            <span className="p-1 m-1 mx-2 px-3 bg-slate-300 rounded-full bg-opacity-10 font-medium">
              /
            </span>{' '}
            <span className="mx-2">to search</span>
          </span>
          <FiSearch className="mr-2" />
          Search FAQs
        </button>
      </div>

      {/* Search Overlay */}
      <div
        className={`fixed inset-0 z-50 flex justify-center items-start ${searchActive ? 'bg-black bg-opacity-50 backdrop-blur-md' : 'hidden'}`}
      >
        <div
          className={`relative bg-white shadow-lg rounded-lg md:p-5 p-2 md:w-full w-[80%] max-w-md md:my-[10em] my-[6em] transform transition-all duration-300 ${searchActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        >
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
            className="absolute md:top-7 top-4 md:right-6 right-3 text-gray-500 my-auto"
          >
            <RxCross2 className="text-2xl font-bold" />
          </button>

          {/* Display search results below search bar */}
          {filteredFAQs.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg border border-gray-300 md:mt-2 mt-5 z-50  ">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleResultClick(faqData.indexOf(faq))} // Use index of original FAQ
                >
                  <h3 className="text-md font-medium py-2 px-4">
                    {faq.question}
                  </h3>
                </div>
              ))}
            </div>
          )}

          {filteredFAQs.length === 0 && (
            <p className="text-center text-red-500 mt-5">No results found.</p>
          )}
        </div>
      </div>

      {/* FAQ Content */}
      <div
        className={`max-w-4xl mx-auto p-5 md:my-20 transition-all duration-300 ease-in-out ${searchActive ? 'blur-sm' : ''}`}
      >
        <h2 className="text-3xl font-semibold text-center mb-6">
          Frequently Asked Questions
        </h2>

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

      <div className="m-10 flex justify-center text-lg">
        <p className='p-5 bg-primary/20 rounded-2xl text-primary'>
          Got more questions? Email us at{' '}
          <a href="mailto:hello@payscribe.ng">hello@payscribe.ng</a>
        </p>
      </div>
    </div>
  )
}

export default FAQs
