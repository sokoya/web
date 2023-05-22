import React from "react";
import tab1Img from "../assets/tab1.svg";
import tab2Img from "../assets/tab2.svg";
import tab3Img from "../assets/tab3.svg";
import { MdCastForEducation } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import Startups from "../assets/startup.png";
import microFinance from "../assets/micro-finance.png";
import Personal from "../assets/personal.png";
import Event from "../assets/event.png";
import Business from "../assets/Business.png";
import ReceiveMoney from "../components/lottie-animations/Receive money.json";
import Earn from "../components/lottie-animations/Earn as you spend.json";
import Airtime from "../components/lottie-animations/Airtime to cash.json";
import EventMan from "../components/lottie-animations/Event management.json";
import GTV from "../components/lottie-animations/Get more value.json";
import FinancialControl from "../components/lottie-animations/financial management.json";
import Lottie from "lottie-react";

export const aboutList = [
  {
    header: "Get More Value",
    body: "Say No to charges, hello rewards! With Payscribe you get whooping cashbacks and rewards for every transactions",
    icon: <Lottie style={{ height: "350px" }} animationData={GTV} />,
  },
  {
    header: "Receive Money",
    body: "Send or receive instant transfer from any bank account within Nigeria, or through your mobile phone number, payment link, or QR code.",
    icon: <Lottie style={{ height: "250px" }} animationData={ReceiveMoney} />,
  },
  {
    header: "Savings",
    body: "You dont have to spend it all,  Get 5% to 15% annual interest on every money you lock. Target a saving, spend and save and let it yield",
    icon: <Lottie style={{ height: "250px" }} animationData={Earn} />,
  },
  {
    header: "Airtime to Cash",
    body: "No more panic. Send Payscribe the airtime you erroneously recharged, and we will give you the equivalent cash. Easy and simple.",
    icon: <Lottie style={{ height: "250px" }} animationData={Airtime} />,
    bgColor: "#eec41b33",
    color: "#EEC21A",
  },
  {
    header: "Financial Control in your Pocket",
    body: "Upgrade your lifestyle with a secure and convenient way to pay bills, buy bulk internet data, send bulk SMS and lots more",
    icon: <Lottie style={{ height: "250px" }} animationData={FinancialControl} />,
  },
  {
    header: "Event Management",
    body: "Discover what is happening around you. Purchase event tickets without stress.",
    icon: <Lottie style={{ height: "250px" }} animationData={EventMan} />,
  },
];

export const tabs = [
  {
    label: <img src={tab1Img} alt="tab1img" />,
    header: "The only app you need",
    color: "#3362B0",
    isMarkup: true,
    body: "The Payscribe app was created to fit your busy lifestyle, with features like automatic renewal and tap-and-pay to make transactions quick and easy. Sending and receiving money has never been simpler. <br /> <br /> Save money as you spend with our spend-and-save feature and so much more!",
  },
  {
    label: <img src={tab2Img} alt="tab2img" />,
    header: "Secure & Guaranteed",
    color: "#3362B0",
    isMarkup: false,
    body: "Security is our top priority. Transactions are protected with the same 256-bit HTTPS SSL encryption used by banks. Start using Payscribe for secure and seamless transactions.",
  },
  {
    label: <img src={tab3Img} alt="tab2img" />,
    header: "24/7 Friendly Customer Support",
    color: "#3362B0",
    isMarkup: false,
    body: "We are social, available on all social media and not leaving you hanging anyday, anytime.",
  },
];

export const footerList = [
  {
    header: "Products",
    list: [
      {
        title: "Sell Giftcards",
        url: "/sell-giftcards",
        blank: false
      },
      {
        title: "Virtual Dollar(coming soon)",
        url: "/",
        blank: false
      },
      {
        title: "Rewards",
        url: "/rewards",
        blank: false
      },
      {
        title: "Airtime To Cash",
        url: "/airtime-to-cash",
        blank: false
      },
      {
        title: "Save & Earn",
        url: "/save-earn",
        blank: false
      },
      {
        title: "Events",
        url: "/events",
        blank: false
      },
    ],
  },
  {
    header: "For Business",
    list: [
      {
        title: "Why Payscribe",
        url: "/why-payscribe",
        blank: false
      }, 
      {
        title: "How It Works",
        url: "/how-it-works",
        blank: false
      },
      {
        title: "Ambassadors",
        url: "/ambassadors",
        blank: false
      }],
  },
  {
    header: "For Developers",
    list: [
      {
        title: "Overview",
        url: "/developers",
        blank: false
      },
     {
        title: "Api Documentation",
        url: "/",
        blank: false
      },
      {
        title: "Status Page",
        url: " https://payscribe.statuspage.io/ ",
        blank: true
      }],
  },
  {
    header: "Company",
    list: [
      {
        title: "About",
        url: "/about-us",
        blank: false
      },
     {
      title: "Blog",
      url: "/",
      blank: true
    },
    {
      title: "Privacy Policy",
      url: "/privacy",
      blank: false
    },     {
      title: "Terms and Conditions",
      url: "/terms",
      blank: false
    },
],
  },
];

export const featuresList = [
  {
    color: "#F16436",
    backgroundColor: "#f165360d",
    header: "Startups",
    cardImg: <img src={Startups} alt="For Startups" />,
    body: "Leverage on Payscribe lifestyle bills payment, power your app with our all-in-one solution.",
  },
  {
    color: "#00BEE7",
    backgroundColor: "#00bde70d",
    header: "Business ",
    cardImg: <img src={Business} alt="Business Use" />,
    body: "Looking to send run a bulk SMS, own a Point of Sale (POS) or to scale up your business? Payscribe got you cover",
  },
  {
    color: "#EEC21A",
    backgroundColor: "#eec41a0d",
    header: "Event Organizer",
    cardImg: <img src={Event} alt="Event Organizer" />,
    body: "Tap into the world of endless opportunites with our top-notch event ticketing system.",
  },
  {
    color: "#EEC21A",
    backgroundColor: "#eec41a0d",
    header: "Micro-finance and loan providers",
    cardImg: <img src={microFinance} alt="Micro-finance and loan providers" />,
    body: "Payscribe's API could be integrated into micro-finance and loan providers platforms, providing an easy way to manage savings and loan.",
  },
  {
    color: "#00BEE7",
    backgroundColor: "#00bde70d",
    header: "Personal Use",
    cardImg: <img src={Personal} alt="img" />,
    body: "Subscribe all daily essential lifestyle bills, ranging from Airtime purchase, internet data, electricity bill, vable subscription etc",
  },
];

export const reviewsList = [
  {
    name: "Jeff",
    role: "Founder/CEO Tradift",
    review:
      "We just integrated with Payscribe this week. The integration process was very smooth. Payscribe has one of the best API documentation, pretty simple",
  },
  {
    name: "Anonymous",
    role: "CTO",
    review:
      "We needed a stable and trusted API to savage the damage caused by our previous partners. Payscribe is one of the best choice we have made in this business.",
  },
  {
    name: "Douglas Ucheagwu",
    role: "Douch Enterprise",
    review: "Very reliable company. I have been using Payscribe for over a year now, and I barely message their customer support. Thumbs up guys", },
  {
    name: "Johnson Adepinle",
    role: "Personal Use",
    review:
      "Simply the best. instant delivery of services and prompt customer service.  I have never been disappointed of choosing Payscribe.",
  },
  
  // {
  //   name: "Aminu Aliyu",
  //   role: "",
  //   review:
  //     "Payscribe are doing great but please I suggest you reduce your data price if possible Regards",
  // },
];
export const reg_link = "https://app.payscribe.ng/auth/create";


export const developersCode = [
  {
    lang: 'Curl',
    code: `curl --location --request \n POST 'BASE_URL/airtime' \
    \n--header 'Authorization: Bearer PAYSCRIBE_API_TOKEN' \
    \n
    --data-raw '{
        "network": "mtn",
        "amount": 100,
        "recipient": ["08169254598", "07038067493"],
    }'`
  },

  {
    lang: 'PHP',
    code: `<?php
    $curl = curl_init();
    curl_setopt_array($curl, array(
      CURLOPT_URL => 'BASE_URL/airtime',
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => '',
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => 'POST',
      CURLOPT_POSTFIELDS =>'{
        "network": "mtn",
        "amount": 100,
        "recipient": "08169254598",
        "ported": false
    }',
      CURLOPT_HTTPHEADER => array(
        'Authorization: Bearer PAYSCRIBE_API_TOKEN'
      ),
    ));
    $response = curl_exec($curl);
    curl_close($curl);
    echo $response;
    `
  },

  {
    lang: 'Node.JS',
    code: `var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'BASE_URL/airtime',
      'headers': {
        'Authorization': 'Bearer PAYSCRIBE_API_TOKEN'
      },
      body: '{\n        "network": "mtn",\n        "amount": 50,\n        "recipient": "08169254598",\n       }'
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
    `
  },

  {
    lang: 'Java',
    code: `var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer PAYSCRIBE_API_TOKEN");
    var raw = "{\n    \"network\": \"mtn\",\n    \"amount\": 100,\n    \"recipient\": \"08169254598\",\n    \"ported\": false\n}";
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("BASE_URL/airtime", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));`
  },

  {
    lang: 'Python',
    code: `import requests
    url = "BASE_URL/airtime"
    payload = "{\n    \"network\": \"mtn\",\n    \"amount\": 100,\n    \"recipient\": \"08169254598\",\n    \"ported\": false\n}"
    headers = {
      'Authorization': 'Bearer PAYSCRIBE_API_TOKEN'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.text)` 
  }

];
export const bankCodes = {
  1: function(amount: any, account: any) {
    return `*901*1*${amount}*${account}#`;
  },
  2: function(amount: any, account: any) {
    return `*770*${account}*${amount}#`;
  },
  3: function(amount: any, account: any) {
    return `*894*${amount}*${account}#`;
  },
  4: function(amount: any, account: any) {
    return `*737*2*${amount}*${account}#`;
  },
  5: function(amount: any, account: any) {
    return `*332*030*${account}*${amount}#`;
  },
  6: function(amount: any, account: any) {
    return `*822*5*${amount}*${account}#`;
  },
  7: function(amount: any, account: any) {
    return `*826*2*${amount}*${account}#`;
  },
  8: function(amount: any, account: any) {
    return `*7799*2*${account}*${amount}#`;
  },
  9: function(amount: any, account: any) {
    return `*945*${account}*${amount}#`;
  },
  10: function(amount: any, account: any) {
    return `*966*${amount}*${account}#`;
  },
};