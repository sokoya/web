import ContentComponent from "../Components/ContentComponent"

function Overview() {
  return (
    <div>
      <CaseStudyComponent
  bannerLink="/case-studies"
  brandLogo="path/to/logo.png"
  brandCategory="Technology"
  brandMoto="Innovation at its Best"
  brandName="Brand XYZ"
  brandLocation="San Francisco, CA"
  aboutBrand="Brand XYZ is a leading innovator in tech solutions..."
  howItStartedTitle="How It Started"
  howItStartedContent="It all began with a simple idea..."
  frustrationTitle="From Frustration to Innovation"
  frustrationContent="They faced several challenges early on, but these frustrations led to innovative breakthroughs..."
  quoteBanner1="Innovation is the key to success."
  quotePerson1={{ image: "path/to/person1.jpg", name: "John Doe" }}
  quoteRole1="CEO"
  partnershipTitle="Partnership"
  partnershipContent={<p>We partnered with leading tech companies to deliver high-quality products...</p>}
  quoteBanner2="Our partnerships have transformed industries."
  endingButton1="Learn More"
  endingButton2="Contact Us"
  brandIntegrationTitle="Brand Integration"
  brandIntegrationContent={['Feature 1', 'Feature 2', 'Feature 3']}
  productTitle="Products"
  productContent={['Product A', 'Product B', 'Product C']}
/>

    </div>
  )
}

export default Overview