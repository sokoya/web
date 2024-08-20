import React from "react";
import Navigation from "../../components/nav";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";

import FaqDisplay from "../../components/faq";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import ArrowRightMain from "../../assets/images/arrow-up-right.svg";
import ArrowRightGrayMain from "../../assets/images/arrow-up-right-gray.svg";

import PhoneImg from "../../assets/images/homepage/phone.png";
import ProductStories from "../../components/product-pages-story";

const AbtPage = () => {
  let breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3.2,
      spaceBetween: 40,
    },
  };
  return (
    <div>
      <Navigation />
      <div className="about-hero">
        <div className="grid-2">
          <div className="text-ba">
            <div className="text-bar">
              <h5>Buy and Sell Giftcards</h5>
              <h2>
                Effortless Gift Card Trading: Buy and Sell with Ease and
                Flexibility.
              </h2>
              <p>
                Easily find the best deals on gift cards and turn your unused
                cards into cash. Our platform ensures a secure and hassle-free
                experience, whether you're buying or selling. Maximize your
                savings and earn extra money with every transaction.
              </p>
              <div className="button-flex mt_3">
                <Link className="btn btn-white" to="/">
                  Open a Free Account{" "}
                  <img src={ArrowRightMain} alt="arrow right" />
                </Link>
                <Link className="btn btn-default" to="/">
                  Reach out to us{" "}
                  <img src={ArrowRightGrayMain} alt="arrow right" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="story-hero-img"></div>
          </div>
        </div>
      </div>
      <div className="summary-block py_5">
        <div className="contain">
          <div className="mobile-only">
            <Swiper
              centeredSlides={false}
              loop={false}
              breakpoints={breakpoints}
            >
              <SwiperSlide key={1}>
                <div>
                  <ion-icon name="file-tray-full-outline"></ion-icon>
                  <h4>Wide Variety of Gift Cards</h4>
                  <p>
                    Explore a diverse selection of gift cards tailored to suit
                    all your needs and preferences. Whether you're looking for
                    the perfect card for yourself or a gift for someone else,
                    you'll find plenty of options.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide key={2}>
                <div>
                  <ion-icon name="diamond-outline"></ion-icon>
                  <h4>Competitive Buy and Sell Rates</h4>
                  <p>
                    Enjoy rates that guarantee you get the best value for your
                    gift cards. With our service, you can maximize your earnings
                    with every transaction, ensuring you always make the most
                    out of your cards.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide key={3}>
                <div>
                  <ion-icon name="lock-closed-outline"></ion-icon>
                  <h4>Secure and Easy Transactions</h4>
                  <p>
                    Experience secure transactions with Payscribe. Your data and
                    funds are always protected, giving you peace of mind. Enjoy
                    the convenience and safety of managing your transactions
                    confidently.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="desktop-only">
            <div className="grid-3">
              <div>
                <ion-icon name="file-tray-full-outline"></ion-icon>
                <h4>Wide Variety of Gift Cards</h4>
                <p>
                  Explore a diverse selection of gift cards tailored to suit all
                  your needs and preferences. Whether you're looking for the
                  perfect card for yourself or a gift for someone else, you'll
                  find plenty of options.
                </p>
              </div>
              <div>
                <ion-icon name="diamond-outline"></ion-icon>
                <h4>Competitive Buy and Sell Rates</h4>
                <p>
                  Enjoy rates that guarantee you get the best value for your
                  gift cards. With our service, you can maximize your earnings
                  with every transaction, ensuring you always make the most out
                  of your cards.
                </p>
              </div>
              <div>
                <ion-icon name="lock-closed-outline"></ion-icon>
                <h4>Secure and Easy Transactions</h4>
                <p>
                  Experience secure transactions with Payscribe. Your data and
                  funds are always protected, giving you peace of mind. Enjoy
                  the convenience and safety of managing your transactions
                  confidently.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contain mt_5">
          <h3 className="sec-title">
            Maximize Your Savings <br /> and Convenience with Gift Cards
          </h3>
          <div className="grid-3 how-to mt_2">
            <div className="how-to-single">
              <div className="how-to-img"></div>
              <div className="how-to-story mt_5">
                <h4>Create a free account</h4>
                <p>
                  To get started, the first step is to create an account. Simply
                  click on the "Create a Free Account" button, fill in your
                  details, and you're ready to go. Creating an account is quick,
                  easy, and free!
                </p>
              </div>
            </div>
            <div className="how-to-single">
              <div className="how-to-img"></div>
              <div className="how-to-story mt_5">
                <h4>Pick Your Plan and Enter Details</h4>
                <p>
                  After creating your account, go to the "Gift cards" section.
                  Choose the type of gift card you want to sell, and enter the
                  necessary details to get started. It's easy and
                  straightforward!
                </p>
              </div>
            </div>
            <div className="how-to-single">
              <div className="how-to-img"></div>
              <div className="how-to-story mt_5">
                <h4>Complete Transaction</h4>
                <p>
                  Finally, enter your gift card amount and proceed to complete
                  the transaction. Carefully input the details of your gift
                  card, review all the information, and confirm to finalize the
                  buy or sell process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductStories />
      <FaqDisplay />
      <div className="width-60">
        <div className="join-us">
          <div className="grid-2">
            <div>
              <h3>Start Building Today</h3>
              <p>
                Sign up in seconds and start processing payments right away!
                Alternatively, our experts are here to help you craft a tailored
                payment solution that perfectly suits your business needs - just
                reach out to us!.
              </p>
              <div className="flex-div">
                <Link className="btn btn-accent" to="">
                  Start Building{" "}
                  <img
                    src={ArrowRightMain}
                    className="button-arrow"
                    alt="arrow right"
                  />
                </Link>
                <Link className="btn btn-gray-border" to="">
                  Contact Sales{" "}
                  <img
                    src={ArrowRightGrayMain}
                    className="button-arrow"
                    alt="arrow right"
                  />
                </Link>
              </div>
            </div>
            <div></div>
            <div>
              <div className="phone-block">
                <img src={PhoneImg} className="phone" alt="Phone" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AbtPage;
