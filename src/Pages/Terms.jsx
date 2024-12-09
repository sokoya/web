import React, { useState, useRef} from 'react'
import HeroComponent from '../Components/HeroComponent'
import { Helmet } from 'react-helmet'

function Terms() {

  
  return (
    <div>
          <Helmet>
                <meta charSet="utf-8" />
                
                <title>Terms and Conditions | Payscribe</title>
            </Helmet>
        <HeroComponent
         main="min-h-auto"
        customSectionStyle="flex flex-col justify-center mt-[5em] items-center m-0 w-screen z-10"
        columns={1}
        title={<span className="text-center">Terms of use</span>}
        subtitle={<span className="text-center">Terms and Conditions for Payscribe</span>}
        description={<span className="text-center">Read below the terms of use of payscribe</span>}
         />

        <div className='md:p-20 p-5'>
        <h2 className='font-bold text-black text-2xl my-5'>Payscribe’s Terms of Use</h2>
<h2 className='font-bold text-black text-2xl my-5'>TERMS OF SERVICE</h2>
<h2 className='font-bold text-black text-2xl my-5'>INTRODUCTION</h2>

These Terms of Service ("Terms") is hereby entered between Payscribe Limited, (“we, “us”, or “our”) and you to govern your access and use of Payscribe ("Payscribe", "https://payscribe.co", "we", "us" or "our") websites, services, and applications (collectively the "Service"). Your access to and use of the service is conditioned in your acceptance of and compliance with these Terms of Service. These terms applies to all visitors, users, agents and others who access or make use of this service or platform.

We are an independent contractor for all purposes, providing this website and our services on an independent service provider basis. We do not have control or assume the liability or legality for the products or services that are paid for with our service. We do not guarantee any user’s identity and cannot ensure that a buyer or seller will complete a transaction.

<h2 className='font-bold text-black text-2xl my-5'>YOUR USE OF THE SERVICE</h2>

By accessing or using the Service you agree to be bound by these Terms. If you are using the Service on behalf of an organization or entity ("Organization"), then you are agreeing to these Terms on behalf of that Organization and you represent and warrant that you have the authority to bind the Organization to these Terms. In that case, "you" and "your" refers to you and that Organization. You may use the Service only if you can form a binding contract with Payscribe, and only in compliance with these Terms and all applicable local, state, national, and international laws, rules, and regulations. The Service may change from time to time as we evolve, refine, or add more features to the platform, often without prior notice to you. In addition, Payscribe may temporarily or permanently stop providing the Service, or any features within the Service to you or users generally and may not be able to provide you with prior notice.

<h2 className='font-bold text-black text-2xl my-5'>ACCURACY OF MATERIALS</h2>

The materials appearing on our website could include technical, typographical, or photographic errors. Payscribe does not warrant that any of the materials on its website are accurate, complete, or current. Payscribe may make changes to the materials contained on its website at any time without notice. However, Payscribe does not make any commitment to update the materials.

<h2 className='font-bold text-black text-2xl my-5'>IDENTITY VERIFICATION</h2>

In order to use certain features of Payscribe, you may be required to provide Payscribe with personal information, including, but not limited to, your name, location, mobile number, e-mail address, date of birth, National ID card, and information regarding your bank account (e.g., financial institution and account number). By submitting these or any other personal information as may be required, you confirm that the information provided is accurate and authentic, and you agree to update Payscribe if any information changes.

You hereby authorise Payscribe to, directly or through third parties, make any inquiries we consider necessary to verify your identity and/or protect against fraud, including to query identity information contained in public reports (e.g., your name, address, past addresses, or date of birth), to query account information associated with your linked bank account (e.g., name or account balance), and to take action we reasonably deem necessary based on the results of such inquiries and reports. You further authorise any and all third parties to which such inquiries or requests may be directed to fully respond to such inquiries or requests.

<h2 className='font-bold text-black text-2xl my-5'>DISPUTES & REVERSAL</h2>

If you believe that an unauthorized or otherwise problematic transaction has taken place, you agree to notify us immediately, to enable us take action to help prevent financial loss.

All claims against us related to payments should be made within 24 hours after the date of such payment. It will be taken that you waive all claims against us, to the fullest extent of the law after the said period of time.

We may intervene in disputes between users and merchants concerning payments but have no obligation to do so.

Your transaction ID and/or transaction details will be required to resolve all disputes.

<h2 className='font-bold text-black text-2xl my-5'>AGE RESTRICTION</h2>

Our website and services are not directed to children under 18. We do not knowingly transact or provide any services to children under 18.

<h2 className='font-bold text-black text-2xl my-5'>COMPUTER VIRUSES</h2>

We shall not bear any liability, whatsoever, for any damage or interruptions caused by any computer viruses, spyware, scareware, Trojan horses, worms or other malware that may affect your computer or other equipment, or any phishing, spoofing or other attack. We advise the regular use of a reputable and readily available virus screening and prevention software. You should also be aware that SMS and email services are vulnerable to spoofing and phishing attacks and should use care in reviewing messages purporting to originate from Payscribe. Always log into your Payscribe Account through the Payscribe application to review any transactions or required actions if you have any uncertainty regarding the authenticity of any communication or notice.

<h2 className='font-bold text-black text-2xl my-5'>ACCOUNT SECURITY</h2>

You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with Payscribe or a third-party service. We encourage you to use “strong” passwords that use a combination of upper and lower case letters, numbers, and symbols with your account. You agree not to disclose your password to any third party. Payscribe cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements. You must notify Payscribe immediately upon becoming aware of any breach of security or unauthorized use of your account.

<h2 className='font-bold text-black text-2xl my-5'>UPDATES, MODIFICATIONS & AMENDMENTS</h2>

We may need to update, modify, or amend our Terms of Use as our technology evolves. We reserve the right to make changes to this Terms of Use at any time by giving notice to users on this page.

We advise that you check this page often, referring to the date of the last modification on the page If a user objects to any of the changes to the Terms of Use, the User must cease using our website and/or services immediately.

<h2 className='font-bold text-black text-2xl my-5'>THIRD-PARTY LINKS</h2>

The Service may have links to third-party websites, advertisers, services, special offers, or other events or activities that are not owned or controlled by us. We do not endorse or assume any responsibility for any of these third-party sites, information, materials, products, or services. If you access a third-party website from the Service, you do so at your own risk, and you understand that these Terms and our Privacy Policy do not apply to your use of those sites. You expressly relieve Payscribe from any and all liability arising from your use of any third-party website, service, or content and agree that your dealings with any third-party website, service, or content are only between you and such third parties. You agree that we are not responsible for any loss or damage of any sort in your dealings with such advertisers.

<h2 className='font-bold text-black text-2xl my-5'>ONLINE-PAYMENT TERMS</h2>

Any fees which the Company may charge you for the Software or Services are exclusive of all taxes and levies which are due immediately and are non-refundable. This no refund policy shall apply at all times regardless of your decision to terminate your usage, our decision to terminate your usage, the disruption caused to our Software or Services either planned, accidental, or intentional, or any reason whatsoever. The Company reserves the right to determine the final prevailing pricing ‐ Please note the pricing information published on the website may not reflect the prevailing pricing.

Payscribe is not associated with any of the trademarks that might appear visible in the Online Payment method lists or payment gateways. Payscribe does not itself support these payment methods or claim to be in partnership with them. The Company, at its sole discretion, may make promotional offers with different features and different rates to any of our customers. These promotional offers, unless made to you, shall have no bearing whatsoever on your offer or contract. The Company may change the fees for our Services or Software as we deem necessary for our business. We encourage you to check back at our website periodically if you are interested in how we charge for the Services or Software.

<h2 className='font-bold text-black text-2xl my-5'>INTERNET DELAYS</h2>

The company's service and software may be subject to limitations, delays, and other problems inherent in the use of the Internet and electronic communications. The company is not responsible for any delays, transaction failures, or other damage resulting from such problems.

<h2 className='font-bold text-black text-2xl my-5'>INDEMNIFICATION</h2>

You agree to defend, indemnify, and hold harmless Payscribe and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney’s fees) arising from your use of and access to the Service, including any data or Content transmitted or received by you, any other party’s access or use of the Service with your username and password, or your violation of these Terms, applicable law, rule or regulation.

<h2 className='font-bold text-black text-2xl my-5'>ACCOUNT USAGE AND RESPONSIBILITIES</h2>

Authorized Use: By accessing and using Payscribe ("the App"), you agree to use the App only for lawful and authorized purposes. You are solely responsible for ensuring that your use of the App complies with all applicable laws and regulations.

Prohibited Activities: You expressly agree not to use the App for any illegal, fraudulent, or unauthorized purpose. Prohibited activities include, but are not limited to:
<ol className='list-disc'>
    <li className=''>Participating in illegal activities or fraud. </li>
<li className=''>Exploiting glitches, errors, or inaccuracies in the system to gain unjust rewards, profits, or credits.</li>

<li className=''>Manipulating foreign exchange conversion rates for personal gain when such rates are inconsistent with current market realities.</li>

<li className=''>Engaging in activities that manipulate other websites or applications for unjust rewards or profits.</li>

</ol>


Virtual Cards Usage: You agree not to use virtual cards provided by the App for any unauthorized or fraudulent activities, including but not limited to credit card fraud or chargeback fraud.

<h2 className='font-bold text-black text-2xl my-5'>CONSEQUENCES OF VIOLATION</h2>

Account Termination: In the event that you engage in any prohibited activities outlined above, or if you exploit glitches or errors in the system, Payscribe reserves the right to terminate your account immediately, without prior notice.

Recovery of Unjust Rewards: If you gain unjust rewards or profits due to system glitches or errors, Payscribe reserves the right to recover such amounts from your account.

Legal Action: Payscribe may take legal action against users engaging in illegal activities, fraud, or any other prohibited activities, as outlined in these terms and conditions.

<h2 className='font-bold text-black text-2xl my-5'>REPORTING VIOLATIONS</h2>

If you become aware of any violations of these terms and conditions or suspect fraudulent activities on the App, please report them immediately to support@Payscribe.com.

<h2 className='font-bold text-black text-2xl my-5'>GOVERNING LAW</h2>

These Terms shall be interpreted and governed in accordance with the Laws of the Federal Republic of Nigeria, the Republic of Cameroon and you submit to the non-exclusive jurisdiction of the State and Federal Courts located in Nigeria and Cameroon for the resolution of any dispute.

<h2 className='font-bold text-black text-2xl my-5'>CONTACT US</h2>

If you have any questions or concerns relating to these terms of service, please contact us at: hello@Payscribe.com
Date of last revision: %th of December 2024

        </div>
    </div>
  )
}

export default Terms