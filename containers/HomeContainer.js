import { Text, Button } from "@nextui-org/react";
import CardDish from "components/CardDish";
import { MdRestaurantMenu } from "react-icons/md";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HomeContainer({ product }) {
  const todayName = new Date().toLocaleDateString("es", { weekday: "long" });
  const router = useRouter();

  const [daysOpen, setDaysOpen] = useState(false);

  useEffect(() => {
    const today = new Date().getDay();
    if (
      today === 2 ||
      today === 3 ||
      today === 4 ||
      today === 5 ||
      today === 6 ||
      today === 0
    ) {
      setDaysOpen(true);
    } else {
      setDaysOpen(false);
    }
  }, []);

  return (
    <div className="flex flex-col w-full h-full items-center justify-center p-4 gap-4">
      {daysOpen ? (
        <>
          <div className="flex flex-col bg-indigo-900/20 md:flex-row animate__animated animate__fadeInDown md:border-4 md:border-x-indigo-700 md:border-y-indigo-400 md:border-opacity-70 rounded-lg md:shadow-xl items-center justify-center md:mt-4 py-6 w-full h-max ">
            {" "}
            <div className="flex flex-col items-center justify-center w-full h-full">
              <Text
                h2
                className="text-center w-full
          text-gray-800
          text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl"
              >
                Hoy{" "}
                <span className="text-indigo-700 font-medium uppercase font-sans text-xl md:text-3xl">
                  {todayName}
                </span>{" "}
                nuestro horario es de
              </Text>
              <Text
                h3
                className="text-center text-gray-800 w-full text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl"
              >
                10:00 a 15:00 y de 18:30 a 23:00
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <Button
                aria-label="Hace tu pedido"
                className="w-11/12 md:w-4/12 h-12 text-black text-lg bg-white rounded-full shadow-md hover:shadow-none md:hover:w-3/12 transition-all duration-300 ease-linear transform"
                bordered
                borderWeight={2}
                color={"#000"}
                onClick={() => router.push("/menu")}
                iconRight={<MdRestaurantMenu size={20} />}
              >
                Hace tu pedido
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-2 w-full h-max">
            <Text
              h2
              className="text-center text-gray-800 text-xl md:text-4xl mb-4 animate__animated animate__zoomInUp"
            >
              ¡10% de descuento abonando en efectivo!
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-full h-max">
            <Text
              h2
              className="text-center text-gray-800 text-3xl mb-4 animate__animated animate__zoomInUp"
            >
              {`Nuestro plato del día`}
            </Text>
            <CardDish product={product} />
          </div>
        </>
      ) : (
        <div
          className="
          flex flex-col items-center justify-center w-full h-full"
        >
          <Text
            h2
            className="
          text-center
          text-gray-800
          text-3xl
        "
          >
            {`Hoy ${todayName} nos tomamos un descanso, volvemos el miercoles.`}
          </Text>
        </div>
      )}
    </div>
  );
}
