import ContentComponent from "../Components/ContentComponent"
import Img1 from '../assets/images/homepage/thepeer.png'
import { Helmet } from "react-helmet"

function UseCases() {
  return (
    <div>
       <Helmet>
        <meta charSet="utf-8" />

        <title>Use Cases | Payscribe</title>
      </Helmet>
        <ContentComponent
        title="Fintech"
        subtitle="You are one step away from launching our fintech solution."
        description="We help you build better Fintech products"
        features=
        {[
            "Use Payscribe's account issuance APIs, digital wallet APIs, and card Issuance APIs to go to market faster.",
             'Offer a comprehensive suite of financial services with secure and reliable transactions.'
        ]}
        primaryLinkText="Get started"
        primaryLink="/register"
        customLinkStyle="bg-transparent border-white hover:bg-white hover:text-slate-800"
        />

<ContentComponent
        title="Health"
        subtitle="Innovative solution for health services."
        description="We help you build and enhance health tech products"
        features=
        {[
            "Leverage Payscribe's bank accounts integration API for seamless health insurance premium management.",
             "Implement Payscribe's savings feature for efficient health savings plans.",
             "Integrate the card issuance API for convenient health service payments."
        ]}
        primaryLinkText="Get started"
        primaryLink="/register"
        bgColor="bg-white"
        textColor="text-black"
        customLinkStyle="bg-white border-black hover:bg-black hover:text-white"
        imageSrc="Img1"
        imagePosition="left"
        />

<ContentComponent
        title="Retail"
        subtitle="Enhance your customers’ retail experiences."
        description="We help you build and enhance better Retail products"
        features=
        {[
            "Implement Payscribe's digital wallet APIs to provide customers with a convenient payment option.",
             'Integrate Anchor’s card issuance APIs to issue branded cards for smoother transactions.'
        ]}
        primaryLinkText="Get started"
        primaryLink="/register"
        customLinkStyle="bg-transparent border-white hover:bg-white hover:text-slate-800"
        />

<ContentComponent
        title="Logistics"
        subtitle="Efficient logistics operations."
        description="We help you build and enhance your Logistics products"
        features=
        {[
            "Use Payscribe's branded programmable cards API to simplify operations for riders and drivers.",
             "Enable secure and efficient transactions with Payscribe's Digital Wallet APIs."
        ]}
        primaryLinkText="Get started"
        primaryLink="/register"
        bgColor="bg-white"
        textColor="text-black"
        customLinkStyle="bg-white border-black hover:bg-black hover:text-white"
        imagePosition="left"
        imageSrc="Img1"
        />

    </div>
  )
}

export default UseCases