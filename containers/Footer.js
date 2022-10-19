import { BsInstagram, BsTelephone, BsWhatsapp } from "react-icons/bs";
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
            Made by Tomas Moltrasio
          </Text>
        </a>
      </div>
      <div className="flex flex-row items-end gap-8 justify-end w-max mr-2">
        <a
          href="https://www.instagram.com/mariscosfrescos/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram size={24} />
        </a>
        <a href="https://wa.me/5491130000000" target="_blank" rel="noreferrer">
          <BsWhatsapp size={24} />
        </a>
        <a href="tel:+5491130000000" target="_blank" rel="noreferrer">
          <BsTelephone size={24} />
        </a>
      </div>
    </footer>
  );
}
