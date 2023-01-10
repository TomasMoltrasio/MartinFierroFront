import { Image } from "@nextui-org/react";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { EffectCards } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

export default function SalonContainer() {
  const images = [
    "salon/salon-1.webp",
    "salon/salon-2.webp",
    "salon/salon-3.webp",
    "salon/salon-4.webp",
    "salon/salon-5.webp",
    "salon/salon-6.webp",
    "salon/salon-7.webp",
    "salon/salon-8.webp",
    "salon/salon-9.webp",
    "salon/salon-10.webp",
    "salon/salon-11.webp",
    "salon/salon-12.webp",
    "salon/salon-13.webp",
    "salon/salon-14.webp",
    "salon/salon-15.webp",
    "salon/salon-16.webp",
    "salon/salon-17.webp",
    "salon/salon-18.webp",
  ];
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  };

  return (
    <div className="w-full h-max flex flex-col items-center justify-start">
      <div className="w-full md:w-3/6 lg:w-3/6 xl:w-3/6 2xl:w-3/6 h-max mt-4 flex flex-col items-center relative justify-center">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          className="w-full h-max"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt="Salon"
                height="540px"
                width="100%"
                objectFit="cover"
                className="rounded-xl shadow-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full md:w-3/6 lg:w-3/6 xl:w-3/6 2xl:w-3/6 h-max my-4 px-2 flex flex-row items-center justify-between">
        <div className="group flex flex-row w-full items-center justify-center gap-2 p-1 rounded-xl border-2 px-4 border-black hover:scale-105 hover:border-lime-500 hover:text-slate-800 transition duration-300 ease-in-out hover:font-semibold">
          <a
            href="https://api.whatsapp.com/send?phone=+5492241527444&text=Hola,%20queria%20reservar%20una%20mesa"
            target="_blank"
            rel="noreferrer"
            className="w-full flex flex-row items-center justify-center gap-2"
          >
            <h2 className="text-xl font-normal text-center group-hover:hidden">
              Hace tu reserva
            </h2>
            <BsWhatsapp className="group-hover:text-lime-500" size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
