import { Text } from "@nextui-org/react";
import CardDish from "components/CardDish";
import { useState, useEffect } from "react";
import HomeCategory from "./HomeCategory";

export default function HomeContainer({ product }) {
  const todayName = new Date().toLocaleDateString("es", { weekday: "long" });

  const [daysOpen, setDaysOpen] = useState(false);

  useEffect(() => {
    const today = new Date().getDay();
    if (today === 1 || today === 2) {
      setDaysOpen(false);
    } else {
      setDaysOpen(true);
    }
  }, []);

  return (
    <div className="flex flex-col w-full h-full items-center justify-center p-4 gap-4">
      {daysOpen ? (
        <>
          <div className="flex flex-col items-center justify-start w-full h-max">
            <Text h2 className="text-center text-gray-800 text-3xl mb-4">
              {`Nuestro plato del día`}
            </Text>
            <CardDish product={product} />
          </div>
          <HomeCategory />
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
