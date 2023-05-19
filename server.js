import express from 'express';
import path from 'path';
import fs from 'fs';
const app = express();
const PORT = 5500;

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', function(request, response) {
  console.log('Home page visited!');
  const filePath = path.resolve(__dirname, './dist', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    
    // replace the special strings with server generated strings

    let result = data.replace(/\$OG_TITLE/g, 'Save - Spend - Earn and manage your finances at ease | Payscribe');
    result = result.replace(/\$OG_DESCRIPTION/g, "Stay connected and manage your finances with Payscribe. Our platform offers a wide range of services including airtime and data purchase, electricity payments, and savings. Experience the convenience of cashless transactions and secure payments with Payscribe. Sign up now!");
    result = result.replace(/\$meta_title/g, "Efficiently Manage Your Daily Essentials and Savings with Payscribe");
    result = result.replace(/\$OG_IMAGE/g, 'https://payscribe.ng/assets/notice.jpeg');
    result = result.replace(/\$OG_SITENAME/g, 'Payscribe');
    result = result.replace(/\$OG_URL/g, 'https://payscribe.ng/');
    result = result.replace(/\$OG_KEYWORDS/g, 'Airtime,Data,Electricity payment,Savings,Cashless payments,Digital transactions,Mobile recharge,Bill payment,Daily essentials,Convenience,Secure payments,Online top-up,Mobile wallet,Cashless living,Financial management,Utility payments,Smart payments,Easy recharge,Mobile credit,Digital wallet,Online bill payments,E-payments,Electronic payments,Mobile top-up,Digital airtime,Online data,Secure bill payments,Airtime recharge,Data bundle,Mobile money,Online savings,Electronic top-up,Mobile bill payments,Online electricity payments,Digital savings,Convenient payments,Mobile payments,Digital bill payments,Secure transactions,Mobile money payments,Digital credit,Online utility payments,Electronic bill payments,Mobile savings,Online top-up services,Airtime purchase,Data purchase,Mobile top-up services,Digital payments,Online payments,Secure mobile payments,Mobile transactions,Cashless society,Digital financial services,Airtime top-up,Data top-up,Mobile banking,Online banking,Secure online payments,Mobile services,Digital services,Cashless transactions,Financial services,Mobile financial services,Online financial services,Digital cash,Mobile cash,Online cash,Secure online banking,Mobile banking services,Digital banking services,Online banking services,Mobile money services,Digital money services,Online money services,Secure online transactions,Mobile transactions services,Digital transactions services,Online transactions services,Mobile savings services,Digital savings services,Online savings services,Secure online savings,Mobile savings account,Digital savings account,Online savings account,Mobile banking account,Digital banking account,Online banking account,Secure online banking account,Mobile money account,Digital money account,Online money account,Secure online money account');
    response.send(result);
  });
});

app.get('/about-us', function(request, response) {
  console.log('About page visited!');
  const filePath = path.resolve(__dirname, './dist', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/\$OG_TITLE/g, 'About Payscribe - The Future of Cashless Transactions and Daily Essentials');
    result = result.replace(/\$OG_DESCRIPTION/g, "Learn more about Payscribe and our mission to revolutionize the way people manage their daily essentials and savings. Our platform offers a wide range of services including airtime and data purchase, electricity payments, and savings. Experience the convenience of cashless transactions and secure payments with Payscribe.");
    result = result.replace(/\$meta_title/g, "About Payscribe - The Future of Cashless Transactions and Daily Essentials");
    result = result.replace(/\$OG_IMAGE/g, 'https://payscribe.ng/assets/notice.jpeg');
    result = result.replace(/\$OG_SITENAME/g, 'Payscribe');
    result = result.replace(/\$OG_URL/g, 'https://payscribe.ng/about-us');
    result = result.replace(/\$OG_KEYWORDS/g, 'Payscribe, About Us, Cashless Transactions, Daily Essentials, Airtime Purchase, Data Purchase, Electricity Payments, Savings, Secure Payments, Convenience, Financial Management, Digital Transactions, Online Bill Payments, Mobile Recharge');
    response.send(result);
  });
});
app.get('/sell-giftcards', function(request, response) {
  console.log('Sell Giftcards');
  const filePath = path.resolve(__dirname, './dist', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/\$OG_TITLE/g, 'Sell Your Gift Cards for Cash with Payscribe');
    result = result.replace(/\$OG_DESCRIPTION/g, "Convert your unused gift cards into cash with Payscribe. Our platform offers an easy and secure way to sell gift cards from popular retailers. Get cash for your gift cards today with Payscribe.");
    result = result.replace(/\$meta_title/g, "Sell Your Gift Cards for Cash with Payscribe");
    result = result.replace(/\$OG_IMAGE/g, 'https://payscribe.ng/assets/notice.jpeg');
    result = result.replace(/\$OG_SITENAME/g, 'Payscribe');
    result = result.replace(/\$OG_URL/g, 'https://payscribe.ng/sell-giftcards');
    result = result.replace(/\$OG_KEYWORDS/g, 'Sell gift cards,    Gift card cash,    Gift card exchange,    Payscribe,    Gift card trading,    Cash for gift cards,    Gift card resale,    Retailer gift cards,    Gift card buyback,    Gift card redemption,    Gift card to cash,    Gift card sales,    Convert gift cards,    Gift card value,    Sell unwanted gift cards,    Sell unused gift cards');
    response.send(result);
  });
});
app.get('/rewards', function(request, response) {
  console.log('Rewards');
  const filePath = path.resolve(__dirname, './dist', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/\$OG_TITLE/g, 'Earn Rewards and Save with Payscribe\'s Loyalty Program');
    result = result.replace(/\$OG_DESCRIPTION/g, "Maximize your savings and earn rewards with Payscribe's loyalty program. Our platform offers a wide range of services including airtime and data purchase, electricity payments, and savings. Sign up now and start earning rewards for your transactions with Payscribe.");
    result = result.replace(/\$meta_title/g, "Earn Rewards and Save with Payscribe's Loyalty Program");
    result = result.replace(/\$OG_IMAGE/g, 'https://payscribe.ng/assets/notice.jpeg');
    result = result.replace(/\$OG_SITENAME/g, 'Payscribe');
    result = result.replace(/\$OG_URL/g, 'https://payscribe.ng/rewards');
    result = result.replace(/\$OG_KEYWORDS/g, 'Rewards, Loyalty program, Payscribe, Savings, Cashless payments, Digital transactions, Mobile recharge, Bill payment, Daily essentials, Convenience, Secure payments, Online top-up, Mobile wallet, Cashless living, Financial management, Utility payments, Smart payments, Easy recharge, Mobile credit, Digital wallet, Online bill payments, E-payments, Electronic payments, Mobile top-up, Digital airtime, Online data, Secure bill payments, Airtime recharge, Data bundle, Mobile money, Online savings, Electronic top-up, Mobile bill payments, Online electricity payments, Digital savings, Convenient payments, Mobile payments, Digital bill payments, Secure transactions, Mobile money payments, Digital credit, Online utility payments, Electronic bill payments, Mobile savings, Online top-up services, Airtime purchase, Data purchase, Mobile top-up services, Digital payments, Online payments, Secure mobile payments, Mobile transactions, Cashless society, Digital financial services, Airtime top-up, Data top-up, Mobile banking, Online banking, Secure online payments, Mobile services, Digital services, Cashless transactions, Financial services, Mobile financial services, Online financial services, Digital cash, Mobile cash, Online cash, Secure online banking, Mobile banking services, Digital banking services, Online banking services, Mobile money services, Digital money services, Online money services, Secure online transactions, Mobile transactions services, Digital transactions services, Online transactions services, Mobile savings services, Digital savings services, Online savings services, Secure online savings, Mobile savings account, Digital savings account, Online savings account, Mobile banking account, Digital banking account, Online banking account, Secure online banking account, Mobile money account, Digital money account, Online money account, Secure online money account.');
    response.send(result);
  });
});
app.get('/airtime-to-cash', function(request, response) {
  console.log('Airtime to cash');
  const filePath = path.resolve(__dirname, './dist', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/\$OG_TITLE/g, 'Convert Airtime to Instant Cash Effortlessly with Payscribe');
    result = result.replace(/\$OG_DESCRIPTION/g, "Experience a new level of convenience with Payscribe's airtime to cash feature. Easily convert your airtime to cash and use it for payments, savings, and more. Sign up now to access this feature and many more on Payscribe's platform.");
    result = result.replace(/\$meta_title/g, "Convert Airtime to Instant Cash Effortlessly with Payscribe");
    result = result.replace(/\$OG_IMAGE/g, 'https://payscribe.ng/assets/notice.jpeg');
    result = result.replace(/\$OG_SITENAME/g, 'Payscribe');
    result = result.replace(/\$OG_URL/g, 'https://payscribe.ng/airtime-to-cash');
    result = result.replace(/\$OG_KEYWORDS/g, 'Airtime, Airtime to cash, Airtime-to-cash');

    response.send(result);
  });
});

app.get('/why-payscribe', function(request, response) {
  console.log('Why Payscribe');
  const filePath = path.resolve(__dirname, './dist', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/\$OG_TITLE/g, 'Why Payscribe - The Best Solution for Digitizing Cash Payments and Daily Essentials');
    result = result.replace(/\$OG_DESCRIPTION/g, "Discover the benefits of using Payscribe for digitizing cash payments and managing daily essentials like airtime and data purchase. Learn how Payscribe's secure and convenient platform can help you improve your financial management and stay connected on-the-go. Check out our website to learn more.");
    result = result.replace(/\$meta_title/g, "Why Payscribe - The Best Solution for Digitizing Cash Payments and Daily Essentials");
    result = result.replace(/\$OG_IMAGE/g, 'https://payscribe.ng/assets/notice.jpeg');
    result = result.replace(/\$OG_SITENAME/g, 'Payscribe');
    result = result.replace(/\$OG_URL/g, 'https://payscribe.ng/why-payscribe');
    result = result.replace(/\$OG_KEYWORDS/g, 'Payscribe, digitize cash payments, daily essentials, airtime purchase, data purchase, secure payments, financial management, convenience, cashless transactions.');
    response.send(result);
  });
});
app.get('/faq', function(request, response) {
  console.log('Faq');
  const filePath = path.resolve(__dirname, './dist', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/\$OG_TITLE/g, 'Frequently Asked Questions (FAQs) about Payscribe');
    result = result.replace(/\$OG_DESCRIPTION/g, "Find answers to common questions about Payscribe's services, features, and how to use our platform. Our FAQ page covers everything from account setup to transaction details and troubleshooting. Get the information you need to make the most of Payscribe's digitized cash payments and daily essentials services.");
    result = result.replace(/\$meta_title/g, "Frequently Asked Questions (FAQs) about Payscribe");
    result = result.replace(/\$OG_IMAGE/g, 'https://payscribe.ng/assets/notice.jpeg');
    result = result.replace(/\$OG_SITENAME/g, 'Payscribe');
    result = result.replace(/\$OG_URL/g, 'https://payscribe.ng/faq');
    result = result.replace(/\$OG_KEYWORDS/g, 'FAQ, Payscribe, Frequently Asked Questions, services, features, platform, account setup, transaction details, troubleshooting, digitized cash payments, daily essentials services, help, support, questions, answers');
    response.send(result);
  });
});

app.get('/developers', function(request, response) {
  console.log('Developers');
  const filePath = path.resolve(__dirname, './dist', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/\$OG_TITLE/g, 'API documentation and resources for Developers - Payscribe');
    result = result.replace(/\$OG_DESCRIPTION/g, "Unlock the power of Payscribe's services for your business with our API documentation and resources for developers. Easily integrate our platform for digitizing cash payments, airtime and data purchase, electricity payments, and savings into your application. Start building today!");
    result = result.replace(/\$meta_title/g, "API documentation and resources for Developers - Payscribe");
    result = result.replace(/\$OG_IMAGE/g, 'https://payscribe.ng/assets/notice.jpeg');
    result = result.replace(/\$OG_SITENAME/g, 'Payscribe');
    result = result.replace(/\$OG_URL/g, 'https://payscribe.ng/developers');
    result = result.replace(/\$OG_KEYWORDS/g, 'API, Developers, Payscribe, Digitizing cash payments, Airtime and data purchase, Electricity payments, Savings, Business, Integration, Platform, Application, Building');
    response.send(result);
  });
});
app.get('/privacy', function(request, response) {
  console.log('Privacy');
  const filePath = path.resolve(__dirname, './dist', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/\$OG_TITLE/g, 'Privacy Policy | Payscribe');
    result = result.replace(/\$OG_DESCRIPTION/g, "Read about How we protect your information");
    result = result.replace(/\$meta_title/g, "Privacy Policy | Payscribe");
    result = result.replace(/\$OG_IMAGE/g, 'https://payscribe.ng/assets/notice.jpeg');
    result = result.replace(/\$OG_SITENAME/g, 'Payscribe');
    result = result.replace(/\$OG_URL/g, 'https://payscribe.ng/privacy');
    result = result.replace(/\$OG_KEYWORDS/g, 'Privacy, Payscribe, Policy');
    response.send(result);
  });
});
app.get('/terms', function(request, response) {
  console.log('Terms');
  const filePath = path.resolve(__dirname, './dist', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/\$OG_TITLE/g, 'Terms of Service | Payscribe');
    result = result.replace(/\$OG_DESCRIPTION/g, "Read about Payscribe's Terms of Service");
    result = result.replace(/\$meta_title/g, "Terms of Service | Payscribe");
    result = result.replace(/\$OG_IMAGE/g, 'https://payscribe.ng/assets/notice.jpeg');
    result = result.replace(/\$OG_SITENAME/g, 'Payscribe');
    result = result.replace(/\$OG_URL/g, 'https://payscribe.ng/Terms');
    result = result.replace(/\$OG_KEYWORDS/g, 'Terms, Terms and Conditions, Terms of Service');
response.send(result);
  });
});
app.get('/contact-us', function(request, response) {
  console.log('Contact us');
  const filePath = path.resolve(__dirname, './dist', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/\$OG_TITLE/g, 'Contact Payscribe - Get in Touch with Our Support Team');
    result = result.replace(/\$OG_DESCRIPTION/g, "Looking for assistance with Payscribe? Our dedicated support team is here to help. Contact us today through our website or email and we will respond promptly to any queries or concerns you may have. Reach Payscribe Support now!");
    result = result.replace(/\$meta_title/g, "Contact Payscribe - Get in Touch with Our Support Team");
    result = result.replace(/\$OG_IMAGE/g, 'https://payscribe.ng/assets/notice.jpeg');
    result = result.replace(/\$OG_SITENAME/g, 'Payscribe');
    result = result.replace(/\$OG_URL/g, 'https://payscribe.ng/contact-us');
    result = result.replace(/\$OG_KEYWORDS/g, 'Payscribe, contact, support, assistance, customer service, help, inquiry, customer care, customer support');
response.send(result);
  });
});
app.get('/how-it-works', function(request, response) {
  console.log('How it works');
  const filePath = path.resolve(__dirname, './dist', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/\$OG_TITLE/g, 'Understand How Payscribe Works and Digitize Your Cash Payments');
    result = result.replace(/\$OG_DESCRIPTION/g, "Learn about the features and benefits of Payscribe, the platform that helps you digitize your cash payments and access daily essentials like airtime and data purchase. Discover how easy it is to use and how it can improve your financial management. Visit our website to learn more.");
    result = result.replace(/\$meta_title/g, "Understand How Payscribe Works and Digitize Your Cash Payments");
    result = result.replace(/\$OG_IMAGE/g, 'https://payscribe.ng/assets/notice.jpeg');
    result = result.replace(/\$OG_SITENAME/g, 'Payscribe');
    result = result.replace(/\$OG_URL/g, 'https://payscribe.ng/how-it-works');
    result = result.replace(/\$OG_KEYWORDS/g, 'Payscribe, how it works, digitize cash payments, digital transactions, airtime purchase, data purchase, financial management, secure payments, online top-up, mobile wallet, cashless living, financial management, digital financial services');
    response.send(result);
  });
});
app.get('/bills-payment', function(request, response) {
  console.log('Rewards');
  const filePath = path.resolve(__dirname, './dist', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/\$OG_TITLE/g, "Easily manage and pay your bills with Payscribe's bill payment service.");
    result = result.replace(/\$OG_DESCRIPTION/g, "Easily manage and pay your bills with Payscribe's bill payment service. Our platform offers a secure and convenient way to pay bills online, including electricity, water, and credit card bills. Experience the convenience of cashless transactions and schedule automatic payments with Payscribe. Sign up now!");
    result = result.replace(/\$meta_title/g, "Easily manage and pay your bills with Payscribe's bill payment service.");
    result = result.replace(/\$OG_IMAGE/g, 'https://payscribe.ng/assets/notice.jpeg');
    result = result.replace(/\$OG_SITENAME/g, 'Payscribe');
    result = result.replace(/\$OG_URL/g, 'https://payscribe.ng/bills-payment');
    result = result.replace(/\$OG_KEYWORDS/g, 'bill payment, bills, pay bills, online bill payment, secure bill payment, automatic bill payment, electricity bill, water bill, credit card bill, cashless transactions, schedule bill payment, Payscribe');
    response.send(result);
  });
});

app.get('/send-receive-money', function(request, response) {
  console.log('Send Receive Money');
  const filePath = path.resolve(__dirname, './dist', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/\$OG_TITLE/g, 'Effortlessly Send and Receive Money with Payscribe');
    result = result.replace(/\$OG_DESCRIPTION/g, "Easily transfer money to friends and family with Payscribe's Send and Receive Money feature. Our platform offers secure and convenient online money transfer services, with low fees and fast processing times. Sign up now and experience the ease of Payscribe!");
    result = result.replace(/\$meta_title/g, "Effortlessly Send and Receive Money with Payscribe");
    result = result.replace(/\$OG_IMAGE/g, 'https://payscribe.ng/assets/notice.jpeg');
    result = result.replace(/\$OG_SITENAME/g, 'Payscribe');
    result = result.replace(/\$OG_URL/g, 'https://payscribe.ng/send-receive-money');
    result = result.replace(/\$OG_KEYWORDS/g, 'Send money,    Receive money,    Online money transfer,    Secure money transfer,    Convenient money transfer,    Low fees,    Fast processing,    Payscribe,    Money transfer,    Digital money transfer,    Online payments,    Secure payments,    Mobile money transfer,    Digital wallet,    Electronic money transfer,    Mobile payments,    Digital payments,    Online banking,    Secure online payments,    Mobile banking services,    Digital banking services,    Online banking services,    Mobile money services,    Digital money services,    Online money services,    Secure online transactions,    Mobile transactions services,    Digital transactions services,    Online transactions services,    Mobile banking account,    Digital banking account,    Online banking account,    Secure online banking account,    Mobile money account,    Digital money account,    Online money account,    Secure online money account,    Cashless society,    Digital financial services');
    response.send(result);
  });
});

app.get('/events', function(request, response) {
  console.log('Events');
  const filePath = path.resolve(__dirname, './dist', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/\$OG_TITLE/g, 'Stay Up-to-Date with the Latest Payscribe Event');
    result = result.replace(/\$OG_DESCRIPTION/g, "Stay informed and be the first to know about the latest Payscribe events, updates, and promotions. Discover new ways to use our platform to digitize cash payments, purchase daily essentials, and manage your savings. Check out our events page now!");
    result = result.replace(/\$meta_title/g, "Stay Up-to-Date with the Latest Payscribe Event");
    result = result.replace(/\$OG_IMAGE/g, 'https://payscribe.ng/assets/notice.jpeg');
    result = result.replace(/\$OG_SITENAME/g, 'Payscribe');
    result = result.replace(/\$OG_URL/g, 'https://payscribe.ng/events');
    result = result.replace(/\$OG_KEYWORDS/g, 'Payscribe events, updates, promotions, cashless payments, digital transactions, daily essentials, savings, financial management, secure payments, cashless living, utility payments, digital financial services, mobile financial services, online financial services, digital banking services, mobile banking services, online banking services');
    response.send(result);
  });
});

app.get('/save-earn', function(request, response) {
  console.log('Save Earn');
  const filePath = path.resolve(__dirname, './dist', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/\$OG_TITLE/g, "Save and Earn with Payscribe's new feature");
    result = result.replace(/\$OG_DESCRIPTION/g, "Unlock the power of saving and earning with Payscribe's new feature. Effortlessly manage your daily transactions and earn rewards for using the platform. Experience the convenience of cashless payments and secure transactions with Payscribe. Sign up now!");
    result = result.replace(/\$meta_title/g, "Save and Earn with Payscribe's new feature");
    result = result.replace(/\$OG_IMAGE/g, 'https://payscribe.ng/assets/notice.jpeg');
    result = result.replace(/\$OG_SITENAME/g, 'Payscribe');
    result = result.replace(/\$OG_URL/g, 'https://payscribe.ng/save-earn');
    result = result.replace(/\$OG_KEYWORDS/g, 'Payscribe, savings, earning, rewards, cashless payments, digital transactions, secure transactions, daily essentials, airtime, data, electricity payments, financial management, mobile payments, online payments, digital services, savings account, rewards program');
    response.send(result);
  });
});
app.get('/developers-hub', function(request, response) {
  console.log('Developers');
  const filePath = path.resolve(__dirname, './dist', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/\$OG_TITLE/g, 'Developers Hub');
    result = result.replace(/\$OG_DESCRIPTION/g, "Payscribe Developers Hub");
    result = result.replace(/\$meta_title/g, "Developers Hub");
    result = result.replace(/\$OG_IMAGE/g, 'https://payscribe.ng/assets/notice.jpeg');
    result = result.replace(/\$OG_SITENAME/g, 'Payscribe');
    result = result.replace(/\$OG_URL/g, 'https://payscribe.ng/developers-hub');
    result = result.replace(/\$OG_KEYWORDS/g, 'Developers, Developers Hub');
    response.send(result);
  });
});
app.use(express.static(path.resolve(__dirname, './dist')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './dist', 'index.html');
  response.sendFile(filePath);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
export default app;