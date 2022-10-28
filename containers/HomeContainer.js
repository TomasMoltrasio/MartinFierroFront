import { Text, Button } from "@nextui-org/react";
import CardDish from "components/CardDish";
import { MdRestaurantMenu } from "react-icons/md";
import { useRouter } from "next/router";

export default function HomeContainer({ product }) {
  const todayName = new Date().toLocaleDateString("es", { weekday: "long" });
  const router = useRouter();

  return (
    <div className="flex flex-col w-full h-max mt-8 gap-10 items-center justify-center">
      {todayName !== "lunes" ? (
        <>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Text
              h2
              className="text-center
          text-gray-800
          text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl"
            >
              {`Hoy ${todayName} nuestro horario es de`}
            </Text>
            <Text
              h3
              className="text-center text-gray-800 text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl"
            >
              10:30 a 15:00 y de 18:30 a 23:00
            </Text>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Button
              className="w-1/12 h-12 text-black text-lg bg-white rounded-full shadow-md hover:shadow-none hover:scale-110 transition-all duration-300 ease-in-out transform"
              bordered
              borderWeight={2}
              color={"#000"}
              onClick={() => router.push("/menu")}
              iconRight={<MdRestaurantMenu size={20} />}
            >
              Ir al menú
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Text h2 className="text-center text-gray-800 text-3xl mb-4">
              {`Nuestro plato del dia`}
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
