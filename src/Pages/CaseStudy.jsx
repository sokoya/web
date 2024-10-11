import React from 'react'
import ContentComponent from '../Components/ContentComponent'
import { Helmet } from 'react-helmet'

// Gamepride (Nigeria)
// Connect.eo (fintech) (virtual card) (Madagascar)
// 

function CaseStudy() {
  return (
    <div>
         <Helmet>
        <meta charSet="utf-8" />
    

        <title>Case studies | Payscribe</title>
      </Helmet>
        <div className='p-10 bg-black'>
        <ContentComponent
        bgColor="bg-black rounded-6xl"
        title="Case-studies"
        subtitle="Real-World success stories with Payscribe"
        description="Discover how Payscribe's innovative solutions have transformed businesses across diverse sectors.Explore how we're shaping the future of finance, e-commerce, gaming and SaaS."
        primaryLink="/book-a-demo"
        primaryLinkText="Get started"
        customLinkStyle="bg-transparent border-white hover:bg-white hover:text-slate-800"
        />
        </div>

        <div className='bg-white p-10'>
        <ContentComponent
        bgColor="bg-white"
        textColor="text-black"
        title="Fintech"
        subtitle="Empowering Fintech Innovators."
        description="In the fast-paced world of fintech, we've partnered with trailblazers to power their financial services."
        primaryLink="/book-a-demo"
        primaryLinkText="Get started"
        customLinkStyle="bg-transparent border-black hover:bg-black hover:text-white"
        imageSrc="https://via.placeholder.com/150"
        imagePosition='left'
        />
        </div>
        <div>

        <h2 className='font-bold m-10 text-2xl'>Explore case studies</h2>
        </div>
    </div>
  )
}

export default CaseStudy