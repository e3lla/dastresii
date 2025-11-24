// components/Slider/Slider2.jsx
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import ProductCard from "../ProductCard/ProductCard";
import { selectSliderProducts } from "../ProductCard/ProductCardSlice";

const Slider2 = () => {
  const products = useSelector(selectSliderProducts);

  return (
    <div className="w-full mx-auto">
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        autoplay={{
          delay: 3000, // هر ۳ ثانیه حرکت کنه
          disableOnInteraction: false, // بعد از کلیک یا درگ هم ادامه بده
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider2;
