import Image from "next/image";
import { Progress } from "@nextui-org/react";

export default function ChargeContainer() {
  return (
    <div className="h-screen w-screen flex flex-auto flex-col items-center justify-center">
      <Image
        src="/LogoMartinFierro.svg"
        alt="logo"
        width={200}
        height={200}
        priority={true}
      />
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Martin Fierro Comida Casera
      </h1>
      <h2 className="text-lg font-bold text-center text-gray-800">
        Comida casera para disfrutar en tu casa o en nuestro salón
      </h2>
      <h3 className="text-lg font-bold text-center text-gray-800 mb-4">
        Preparate para hacer tu pedido...
      </h3>
      <Progress
        indeterminated
        value={50}
        color="primary"
        status="success"
        className="w-1/2 md:w-1/3 lg:w-1/4"
      />
    </div>
  );
}
