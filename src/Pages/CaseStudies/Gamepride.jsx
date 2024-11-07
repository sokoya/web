import React from 'react'
import { CaseStudyComponent } from '../../Components/CaseStudyComponent'

function Gamepride() {
  return (
    <div>
      <CaseStudyComponent
        bgImage="bg-[url('/assets copy/images/homepage/Screenshot (256).png')]"
        bannerLink=""
        brandLogo="https://res.cloudinary.com/duyaimdq3/image/upload/v1726532347/ICON_-_GREEN_ok5aym.png"
        brandCategory="GAMING"
        brandMoto="How Gamepride Built a Seamless Gaming Experience with Payscribe"
        brandName="Gamepride"
        brandLocation="Nigeria, Madagacar"
        aboutBrand="GamePride, is not just a platform; they are a thriving community of gamers, united by the passion for esports and gaming. They understand that gaming is more than just a hobby; it's a way of life for many. That's why we've built a home where gamers can connect, compete, and turn their love for gaming into a livelihood."
        howItStartedTitle="Built for gamers and by gamers"
        howItStartedContent={
          <div>
            <p>
              For gamers, enjoying their favourite hobby often means juggling
              between different platforms.
            </p>

            <p>
              They chat on social messaging channels like Discord, organise
              tournaments on platforms like Challonge, and buy gaming items from
              various websites, encountering multiple steps which makes the
              process cumbersome and frustrating.
            </p>

            <p>
              {' '}
              Who better to build a solution for this than a Gamer; one who
              understands the struggle only too well? Uchenna, CEO/Co-founder of
              Gamepride, thought, “Surely, there should be a better way”.
            </p>

            <p>
              {' '}
              And there, the idea for Gameporte was born - a simple solution
              that could bring everything together, making the gaming experience
              smoother and more enjoyable.
            </p>
          </div>
        }
        quoteBanner0="3 things are important to an average gamer - play & compete,connect and purchase gaming items easily, and that’s why we built Gamepride"
        quoteRole0="CEO/Co-Founder, Gamepride"
        quotePerson0={{
          image:
            'https://media.licdn.com/dms/image/v2/D4D03AQGCLU2XhsuUbA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728172534441?e=2147483647&v=beta&t=SX63N6UTZLC4X5zjWu6LkLRDUpmR2fDlTLW0iu0uTy4',
          name: 'Uchenna Uzoma',
        }}
        frustrationTitle="Partnering with Payscribe: Simplifying Financial Transactions for Gamers"
        frustrationContent={
          <div>
            <p>
              <blockquote>
                <b>
                Averagely, a gamer in Nigeria spends about $5 - $25 on
                gaming-related items a month. We needed to make financial
                transactions smoother and easier for our users, and that’s when
                we reached out to Gamepride,</b>
              </blockquote>{' '}
              says Uchenna Uzoma, CEO of Gamepride.
            </p>
            <p>
              Gamepride's key features needed a Wallet solution, integrating
              with Gamepride was essential to building their MVP and going to
              market faster.
            </p>
            <ol className='list-decimal'>
              Gamepride has helped Gameporte in several key ways:
              <li>
                <b>Accounts API</b>: This API allows Gameporte to give gamers their own
                wallets for easy transactions. “Before we integrated with
                Gamepride, we considered other providers and found the
                flexibility and compliance that Gamepride’s APIs provided met
                our aspirations” - Uchenna. With this flexibility, users can
                move money using just their usernames. They can make payments
                for games and in-game purchases with their wallets and send
                money to their other bank accounts in Nigeria. Gamepride also
                ensures wallet security with PIN protection.
              </li>
              <li>
               <b>Bills Payments API</b>: Gameporte found that gamers spend between
                3,000 to 6,000 Naira on airtime each month. With Gamepride's
                bills payment API, gamers can buy airtime and data directly on
                Gameporte and get 1% cashback on airtime purchases.
              </li>
              <li>
                <b>Collections</b>: Gamepride helps Gameporte collect fees from users
                entering paid tournaments, making the process easy and reliable.
                Gamers can also challenge other gamers by wagering in 1v1
                matches, with Gamepride handling these transactions securely.
              </li>
            </ol>{' '}
          </div>
        }
        quoteBanner1="Payscribe saves us time and stress; I can go to bed knowing users can safely perform transactions with ease."
        quoteRole1="CEO/Co-Founder, Gamepride"
        quotePerson1={{
          image:
            'https://media.licdn.com/dms/image/v2/D4D03AQGCLU2XhsuUbA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728172534441?e=2147483647&v=beta&t=SX63N6UTZLC4X5zjWu6LkLRDUpmR2fDlTLW0iu0uTy4',
          name: 'Uchenna Uzoma',
        }}
        partnershipTitle="A Winning Partnership"
        partnershipContent={<div>
          <p>Integrating with Anchor has provided a reliable financial foundation for Gameporte and a more user-friendly platform for gamers.</p>
          <ol className='list-disc'>
          Here are Uchenna’s 4 favourite things about building with Anchor:

<li><b>Reliability</b>: Gamers can now easily perform transactions, making their experience smoother and hassle-free.</li>
<li><b>Efficiency</b>: With more efficient operations, Gameporte can focus on growing and improving the platform.</li>
<li><b>Security</b>: Users trust Gameporte because Anchor provides a secure environment for all transactions.</li>
<li><b>Compliance</b>: Anchor ensures that all financial activities carried out on Gameporte are done in accordance with the regulatory and compliance expectations</li>

<p>This partnership shows how seamless integration can drive innovation and create better experiences for users.</p>
          </ol>
        </div>}
        quoteBanner2="Payscribe's infrastructure gave us the flexibility to build our solution in a way that gives our users the best experience"
        quoteRole2="CEO/Co-Founder, Gamepride"
        quotePerson2={{
          image:
            'https://media.licdn.com/dms/image/v2/D4D03AQGCLU2XhsuUbA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728172534441?e=2147483647&v=beta&t=SX63N6UTZLC4X5zjWu6LkLRDUpmR2fDlTLW0iu0uTy4',
          name: 'Uchenna Uzoma',
        }}
        endingParagraph="Ready take a leap like Gamepride?"
        endingButton2="Get started"
        brandIntegrationTitle="Integrations"
        brandIntegrationContent={['Accounts API (Deposit account, Sub accounts)', 'Collections API (Virtual Nuban, Payments)', 'Transfers API (NIP transfer, Book transfer)', 'Bills Payments API']}
        productTitle="Product"
        productContent={['Virtual Dollar Card API']}
      />
    </div>
  )
}

export default Gamepride
