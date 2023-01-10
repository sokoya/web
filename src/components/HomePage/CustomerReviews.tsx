import React from "react";
import { reg_link, reviewsList } from "../../listData/homepage";
import Button from "../Button";
import Customers from "../Customers";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/swiper.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
  Scrollbar,
  A11y,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);
const CustomerSection = () => {
  const reviewsJSX = (
    <>
      {reviewsList.map((el, index) => (
        <Customers
          index={index}
          key={el.name}
          comment={el.review}
          customer_name={el.name}
          role={el.role}
        />
      ))}
    </>
  );
  const reviews = (
    <>
      <Swiper
        breakpoints={{
          950: {
            slidesPerView: 3.5,
          },
          600: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 1.5,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{}}
        autoHeight={false}
        pagination={{
          clickable: true,
          // bulletClass: "swiper-pagination-bullet-active",
        }}
        
        scrollbar={{ draggable: true }}
        className="mySwiper cursor-grab"
      >
        {reviewsList.map((el, index) => (
          <SwiperSlide key={el.name}>
            <Customers
              index={index}
              comment={el.review}
              customer_name={el.name}
              role={el.role}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
  return (
    <section className="mt-[5rem]">
      <h1 className="font-bold text-4xl xxs:text-5xl mb-[2rem] text-center">
        What Our Customers Think
      </h1>
      <div className="">{reviews}</div>
      <div className="flex justify-center mt-[3rem]">
        <Button clicked={()=>window.open("https://g.page/r/Cfh9X-mmbYuOEB0/review")} class="bg-primary2 text-white px-[2rem] py-4">
          Read More Reviews
        </Button>
      </div>
    </section>
  );
};

export default CustomerSection;
