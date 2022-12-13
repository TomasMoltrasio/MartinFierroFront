import { Text, Button, Image } from "@nextui-org/react";
import CardDish from "components/CardDish";
import { MdRestaurantMenu } from "react-icons/md";
import { useRouter } from "next/router";

export default function HomeContainer({ product }) {
  const todayName = new Date().toLocaleDateString("es", { weekday: "long" });
  const router = useRouter();

  return (
    <div className="flex flex-col  w-full h-max items-center justify-start">
      {todayName !== "lunes" ? (
        <>
          <div className="flex flex-col bg-indigo-900/20 md:flex-row border-2 border-black rounded-lg shadow-xl items-center justify-start py-6 w-full h-full my-4 gap-4">
            {" "}
            <div className="flex flex-col items-center justify-center w-full h-full">
              <Text
                h2
                className="text-center w-full
          text-gray-800
          text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl"
              >
                {`Hoy ${todayName} nuestro horario es de`}
              </Text>
              <Text
                h3
                className="text-center text-gray-800 w-full text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl"
              >
                10:00 a 15:00 y de 19:00 a 23:30
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <Button
                className="w-11/12 md:w-4/12 h-12 text-black text-lg bg-white rounded-full shadow-md hover:shadow-none hover:scale-105 transition-all duration-300 ease-linear transform"
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
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Text h2 className="text-center text-gray-800 text-3xl mb-4">
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
            {`Hoy ${todayName} nos tomamos un descanso, volvemos mañana.`}
          </Text>
        </div>
      )}
    </div>
  );
}
