import { Image } from "@nextui-org/react";
import { useState } from "react";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";
import { BsWhatsapp } from "react-icons/bs";

export default function SalonContainer() {
  const images = [
    "salon/salon-1.jpg",
    "salon/salon-2.jpg",
    "salon/salon-3.jpg",
    "salon/salon-4.jpg",
    "salon/salon-5.jpg",
    "salon/salon-6.jpg",
    "salon/salon-7.jpg",
    "salon/salon-8.jpg",
    "salon/salon-9.jpg",
    "salon/salon-10.jpg",
    "salon/salon-11.jpg",
    "salon/salon-12.jpg",
    "salon/salon-13.jpg",
    "salon/salon-14.jpg",
    "salon/salon-15.jpg",
    "salon/salon-16.jpg",
    "salon/salon-17.jpg",
    "salon/salon-18.jpg",
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
      <div className="w-full md:w-3/6 lg:w-3/6 xl:w-3/6 2xl:w-3/6 h-4/5 mt-4 flex flex-col items-center relative justify-center">
        <Image
          src={images[index]}
          alt="Salon"
          height="540px"
          width="100%"
          objectFit="cover"
          className="rounded-2xl shadow-2xl"
        />
        <button onClick={handlePrev}>
          <TfiArrowCircleLeft
            size={40}
            className="
            absolute
            top-1/2
            left-0
            transform
            text-3xl
            text-white
            bg-black
            rounded-full
            p-1
            hover:bg-gray-800
            transition
            duration-300
            ease-in-out 
          "
          />
        </button>
        <button onClick={handleNext}>
          <TfiArrowCircleRight
            size={40}
            className="
            absolute
            top-1/2
            right-0
            transform
            text-3xl
            text-white
            bg-black
            rounded-full
            hover:bg-gray-800
            p-1
            transition
            duration-300
            ease-in-out
            "
          />
        </button>
      </div>
      <div className="w-full md:w-3/6 lg:w-3/6 xl:w-3/6 2xl:w-3/6 h-max my-4 px-2 flex flex-row items-center justify-between">
        <div
          className="
            flex flex-row w-full items-center justify-center gap-2 p-1 rounded-xl border-2 px-4 border-black hover:scale-105 hover:border-lime-500 hover:text-lime-500 transition duration-300 ease-in-out hover:font-semibold"
        >
          <a
            href="https://api.whatsapp.com/send?phone=+5492241527444&text=Hola,%20queria%20reservar%20una%20mesa"
            target="_blank"
            rel="noreferrer"
            className="w-full flex flex-row items-center justify-center gap-2"
          >
            <h2 className="text-xl font-normal text-center">Hace tu reserva</h2>
            <BsWhatsapp size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
