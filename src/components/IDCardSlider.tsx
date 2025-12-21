import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface IDCardSliderProps {
  images: string[];
  onClick?: () => void;
}

const IDCardSlider = ({ images, onClick }: IDCardSliderProps) => {
  return (
    <div
  onClick={onClick}
  className="mb-6 break-inside-avoid w-full
             overflow-hidden rounded-xl border border-border/20 cursor-pointer"
>
  <div className="relative w-full aspect-[3/2]">

    {/* Top gradient + title */}
    <div className="absolute top-0 left-0 right-0 z-10 p-3
      bg-gradient-to-b from-black/60 via-black/20 to-transparent">
      <p className="text-white text-sm font-medium tracking-wide">
        Custumized magazine pages
      </p>
    </div>

    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop
      slidesPerView={1}
      className="w-full h-full overflow-hidden rounded-xl"
    >
      {images.map((src, i) => (
        <SwiperSlide key={i} className="w-full h-full overflow-hidden rounded-xl">
          <img
            src={src}
            alt={`ID Card ${i + 1}`}
            className="w-full h-auto object-contain bg-white"
          />
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
</div>



  );
};

export default IDCardSlider;
