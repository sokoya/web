import React from 'react'
import HeroComponent from '../Components/HeroComponent'

function BillsPayment() {
  return (
    <div>
      <HeroComponent
        customSectionStyle=""
        title="Pay bills with ease"
        subtitle="Hassle free payment of bills"
        description="Bills payments has never gotten easier, few taps and you are all done"
        primaryLink="/start"
        primaryLinkText="Create account"
        secondaryLink="/book-a-demo"
        secondaryLinkText="Contact Support"
        textColor="text-white"
        // additionalContent={
        //   <div>
        //     <img src={WhiteStar} alt="" className="absolute md:left-[50%] left-[75%] top-[25%]" />
        //     {/* <img src={WhiteStar} alt="" className="absolute left-[55%] top-[65%]" />
        //     <img src={WhiteStar} alt="" className="absolute left-[60%] top-[50%]" /> */}

        //   </div>
        // }
        columns={1}
        order={['text']}
        customimgstyle="md:scale-[80%] scale-[70%] md:-translate-y-0 -translate-y-[22.5em]"
      />
    </div>
  )
}

export default BillsPayment
