import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ContentCarousel from "./ContentCarousel";
import dataDummy from "../../../data/dataCarousel_dummy"

const CarouselInfo = () => {
  return (
    <Swiper
      pagination={true}
      slidesPerView={2}
      spaceBetween={50}
      modules={[Pagination]}
      className="w-full h-full px-4 py-4 pb-[60px]"
    >
      {dataDummy.map((el:any) => (
        <SwiperSlide key={el.id}>
          <ContentCarousel data={el}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselInfo;
