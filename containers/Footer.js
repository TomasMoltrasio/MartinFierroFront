import { BsInstagram, BsTelephone, BsWhatsapp, BsShop } from "react-icons/bs";
import { FcTrademark } from "react-icons/fc";
import { Text } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-between w-full h-12 border-t">
      <div className="flex flex-row items-center justify-start w-max h-full">
        <a
          href="https://www.linkedin.com/in/tomas-moltrasio-5193461b8/"
          target="_blank"
          rel="noreferrer"
        >
          <Text className="text-sm font-normal text-center mb-1 pl-2" h3>
            Made by
          </Text>
        </a>
        <FcTrademark
          className="ml-2 cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/tomas-moltrasio-5193461b8/",
              "_blank"
            )
          }
        />
      </div>
      <div className="flex flex-row items-end gap-8 md:gap-3 xl:gap-3 2xl:gap-3 3xl:gap-3 justify-end w-max mr-6">
        <a
          href="https://goo.gl/maps/fga2jDukc3buAU438"
          target="_blank"
          rel="noreferrer"
        >
          <BsShop size={24} />
        </a>
        <Text
          hideIn="xs"
          className="text-md font-normal text-center leading-none"
          h3
        >
          Alvear 679
        </Text>
        <a
          href="https://www.instagram.com/martinfierrocomidacasera/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram size={24} />
        </a>
        <Text
          hideIn="xs"
          className="text-md font-normal text-center leading-none"
          h3
        >
          @martinfierrocomidacasera
        </Text>
        <a href="https://wa.me/5492241527444" target="_blank" rel="noreferrer">
          <BsWhatsapp size={24} />
        </a>
        <Text
          hideIn="xs"
          className="text-md font-normal text-center leading-none"
          h3
        >
          2241527444
        </Text>
        <a href="tel:+5492241527444" target="_blank" rel="noreferrer">
          <BsTelephone size={24} />
        </a>
        <Text
          hideIn="xs"
          className="text-md font-normal text-center leading-none"
          h3
        >
          2241527444
        </Text>
      </div>
    </footer>
  );
}
