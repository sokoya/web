import React from "react";
import Cards from "../Cards";
import { featuresList } from "../../listData/homepage";
import { Swiper, SwiperSlide } from "swiper/react";
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
// import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

type Props = {};

const Features = (props: Props) => {
  const FeaturesJSX = (
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
        navigation
        pagination={{
          clickable: true,
          // bulletClass: "swiper-pagination-bullet-active",
        }}
        scrollbar={{ draggable: true }}
        className="mySwiper cursor-grab mt-[3rem]"
      >
        {featuresList.map((el, index) => (
          <SwiperSlide key={el.header}>
            <Cards
              backgroundColor={el.backgroundColor}
              body={el.body}
              color={el.color}
              header={el.header}
              cardImg={el.cardImg}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
  return (
    <section className="mt-[5rem]">
      <div className=" mb-[5rem]">
        <h1 className=" text-center font-bold mb-3 text-4xl xxs:text-5xl">
          Who can use Payscribe
        </h1>
        <p className="mx-auto w-[90%] sm:w-[40%] text-center  text-lg text-secondary1">
          Payscribe is specially crafted to meet all your daily essential
          payments. This makes it easy for business and personal use.
        </p>
      </div>
      <div className="">{FeaturesJSX}</div>
    </section>
  );
};


export default Features;