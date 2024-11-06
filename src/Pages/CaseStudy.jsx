import ContentComponent from '../Components/ContentComponent'
import { Helmet } from 'react-helmet'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Projection from '../assets/exports/projection.svg'
import Studies from '../assets/exports/studies.svg'

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
        imageSrc={Studies}
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
        imageSrc={Projection}
        imagePosition='left'
        />
        </div>
        <div>

        <h2 className='font-bold m-10 text-2xl'>Explore case studies</h2>
        <div className='flex justify-center'>
            <div className=' p-5 items-center my-10 bg-slate-100 m-5 rounded-2xl'>
            <img src='https://res.cloudinary.com/duyaimdq3/image/upload/v1726532347/ICON_-_GREEN_ok5aym.png' className='h-20 w-20'/>
            <h2 className='m-10'>Gamepride</h2> 
            <Link to='/case-studies/gamepride'><span>Read more</span><FaArrowRight/></Link>
            </div>

            <div className=' p-5 items-center my-10 bg-slate-100 m-5 rounded-2xl'>
            <img src='https://connekit-eo.net/images/connekit-eo.png' className='h-20 w-20'/>
            <h2 className='m-10'>Connekit-eo</h2> 
            <Link to='/case-studies/connekit'><span>Read more</span><FaArrowRight/></Link>
            <div className='flex justify-center items-center'>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CaseStudy