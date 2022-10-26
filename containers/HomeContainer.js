import { Text, Button } from "@nextui-org/react";
import CardDish from "components/CardDish";
import { MdRestaurantMenu } from "react-icons/md";
import { useRouter } from "next/router";

export default function HomeContainer({ product }) {
  const todayName = new Date().toLocaleDateString("es", { weekday: "long" });
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {todayName !== "lunes" ? (
        <>
          <div
            className="
        flex flex-col items-center justify-center
        w-full h-full
      "
          >
            <Text
              h2
              className="
          text-center
          text-gray-800
          text-3xl
        "
            >
              {`Hoy ${todayName} nuestro horario es de`}
            </Text>
            <Text
              h3
              className="
          text-center
          text-gray-800
          text-2xl
        "
            >
              10:30 a 15:00 y de 18:30 a 23:00
            </Text>
          </div>
          <div
            className="
          flex flex-col items-center justify-center w-full h-full"
          >
            <Button
              className="
          w-1/12
          h-12
          text-black
          text-lg
          bg-white
          rounded-full
          shadow-md
          hover:bg-gray-700
          hover:shadow-none
          hover:text-white
          hover:scale-110
        "
              bordered
              borderWeight={2}
              color={"#000"}
              onClick={() => router.push("/menu")}
              iconRight={<MdRestaurantMenu size={20} />}
            >
              Ir al menú
            </Button>
          </div>
          <div
            className="
            flex flex-col items-center justify-center
            w-full h-full
    
          "
          >
            <Text
              h2
              className="
          text-center
          text-gray-800
          text-3xl
          mb-4
        "
            >
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
