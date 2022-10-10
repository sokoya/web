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
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 1,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="mySwiper cursor-grab"
      >
        {featuresList.map((el, index) => (
          <SwiperSlide key={el.header}>
            <Cards
              backgroundColor={el.backgroundColor}
              body={el.body}
              color={el.color}
              header={el.header}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
  return (
    <section className="mt-[5rem]">
      <div className=" mb-[5rem]">
        <h1 className=" text-center font-bold text-4xl xxs:text-5xl">
          Amazing Features We offer
        </h1>
      </div>
      <div className="">{FeaturesJSX}</div>
    </section>
  );
};

export default Features;
