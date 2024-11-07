import React from 'react'
import { CaseStudyComponent } from '../../Components/CaseStudyComponent'

function Connect() {
  return (
    <div>
      <CaseStudyComponent
        bannerLink=""
        brandLogo="https://connekit-eo.net/images/connekit-eo.png"
        brandCategory="Fintech"
        brandMoto="How Connekit-eo Transformed Fintech Solutions with Payscribe"
        brandName="Connekit-eo"
        brandLocation="Nigeria, Madagasca"
        aboutBrand="Connekit-eo is more than just a financial service provider; they are revolutionizing how businesses and individuals manage their finances. Focused on creating seamless, secure, and efficient transactions, Connekit-eo empowers people to streamline their financial operations in today's fast-paced digital world."
        howItStartedTitle="Built for financial freedom"
        howItStartedContent={
          <div>
            <p>
              For businesses and individuals, managing finances often involves
              navigating through various platforms and services.
            </p>

            <p>
              They rely on multiple systems to handle payments, transfers, and
              other transactions, which can make the process complex and
              time-consuming.
            </p>

            <p>
              Who better to solve this problem than an experienced fintech
              entrepreneur? Mialisoa, CEO/Co-founder of Connekit-eo, thought,
              “There must be a simpler way to handle financial transactions
              seamlessly.”
            </p>

            <p>
              And with that, the idea for Connekit-eo was born – a platform
              designed to bring all financial services under one roof, making
              transactions effortless for businesses and individuals alike.
            </p>
          </div>
        }
        quoteBanner0="Three things matter most to our users – convenience, security, and efficiency, which is why we built Connekit-eo."
        quoteRole0="CEO/Co-Founder, Connekit-eo"
        quotePerson0={{
          image:
            'https://media.licdn.com/dms/image/v2/D4E03AQFPSLomsC3CJQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714027844957?e=2147483647&v=beta&t=eCgNZPZeiTmFyEEeQ59h8cv0oLidOLZipJslstmtV5U',
          name: 'Mialisoa Andrianasolo',
        }}
        frustrationTitle="Partnering with Payscribe: Simplifying Financial Transactions"
        frustrationContent={
          <div>
            <p>
              <blockquote>
                <b>
                  On average, individuals and businesses in Nigeria spend
                  between $5 - $50 a month on financial services. We needed to
                  make these transactions smoother and more accessible, and
                  that’s when we turned to Payscribe,
                </b>
              </blockquote>{' '}
              says Mialisoa Andrianasolo, CEO of Connekit-eo.
            </p>
            <p>
              Connekit-eo's key features required a robust Wallet solution, and
              integrating with Payscribe was critical in launching their MVP and
              getting to market quickly.
            </p>
            <ol className="list-decimal">
              Payscribe has enabled Connekit-eo in several key ways:
              <li>
                <b>Accounts API</b>: This API allows Connekit-eo users to have
                their own wallets for easy transactions. “We evaluated other
                providers, but the flexibility and compliance Payscribe offered
                were unmatched,” says Mialisoa. With this, users can transfer
                funds using just their usernames, make payments for services,
                and securely move money to their bank accounts in Nigeria, all
                while safeguarding their wallets with PIN protection.
              </li>
              <li>
                <b>Bills Payments API</b>: With Payscribe's Bills Payment API,
                Connekit-eo users can pay for utilities like airtime and data
                directly on the platform, enjoying a seamless experience and
                cashback on purchases.
              </li>
              <li>
                <b>Collections API</b>: Payscribe facilitates the easy
                collection of fees for services offered through Connekit-eo.
                Users can also securely send and receive money for a variety of
                financial needs.
              </li>
            </ol>{' '}
          </div>
        }
        quoteBanner1="Payscribe saves us time and stress; I can sleep soundly knowing our users can perform transactions effortlessly and securely."
        quoteRole1="CEO/Co-Founder, Connekit-eo"
        quotePerson1={{
          image:
            'https://media.licdn.com/dms/image/v2/D4E03AQFPSLomsC3CJQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714027844957?e=2147483647&v=beta&t=eCgNZPZeiTmFyEEeQ59h8cv0oLidOLZipJslstmtV5U',
          name: 'Mialisoa Andrianasolo',
        }}
        partnershipTitle="A Strong Partnership"
        partnershipContent={
          <div>
            <p>
              Integrating with Payscribe has given Connekit-eo the financial
              backbone it needed to deliver a reliable and user-friendly
              platform.
            </p>
            <ol className="list-disc">
              Here are Mialisoa’s top four reasons for choosing Payscribe:
              <li>
                <b>Reliability</b>: Connekit-eo users can perform transactions
                with ease, enhancing their overall experience.
              </li>
              <li>
                <b>Efficiency</b>: The platform’s operations are streamlined,
                allowing Connekit-eo to focus on scaling and enhancing its
                features.
              </li>
              <li>
                <b>Security</b>: Trust is built into the platform, as Payscribe
                provides a secure environment for all financial operations.
              </li>
              <li>
                <b>Compliance</b>: Payscribe ensures that all financial
                activities adhere to regulatory and compliance standards.
              </li>
              <p>
                This partnership has paved the way for innovation and an
                enhanced user experience.
              </p>
            </ol>
          </div>
        }
        quoteBanner2="Payscribe's infrastructure allowed us the flexibility to design a solution that offers users a seamless experience."
        quoteRole2="CEO/Co-Founder, Connekit-eo"
        quotePerson2={{
          image:
            'https://media.licdn.com/dms/image/v2/D4E03AQFPSLomsC3CJQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714027844957?e=2147483647&v=beta&t=eCgNZPZeiTmFyEEeQ59h8cv0oLidOLZipJslstmtV5U',
          name: 'Mialisoa Andrianasolo',
        }}
        endingParagraph="Ready to take your business to the next level like Connekit-eo?"
        endingButton2="Get started"
        brandIntegrationTitle="Integrations"
        brandIntegrationContent={[
          'Accounts API (Deposit accounts, Sub accounts)',
          'Collections API (Virtual Nuban, Payments)',
          'Transfers API (NIP transfer, Book transfer)',
          'Bills Payments API',
        ]}
        productTitle="Product"
        productContent={['Virtual Dollar Card API']}
      />
    </div>
  )
}

export default Connect
