import { Grid, Text, Button } from "@nextui-org/react";
import NextLink from "next/link";
import CardDish from "components/CardDish";
import { MdRestaurantMenu } from "react-icons/md";
import { useRouter } from "next/router";

export default function HomeContainer({ product }) {
  const todayName = new Date().toLocaleDateString("es", { weekday: "long" });
  const router = useRouter();

  return (
    <Grid.Container
      direction="column"
      justify="flex-start"
      className="w-screen h-full"
    >
      <Grid xs={12} justify="center">
        <Text
          h1
          className="
            text-center
            text-3xl
            font-normal
            mb-2
            "
        >{`Hoy ${todayName} nuestro horario es de`}</Text>
      </Grid>
      <Grid xs={12} justify="center">
        <Text h1 className="text-center text-2xl font-normal mb-5">
          10:30 a 15:00 y de 18:30 a 23:00
        </Text>
      </Grid>
      <Grid xs={12} justify="center">
        <Button
          size="lg"
          auto
          rounded
          iconRight={<MdRestaurantMenu fill="currentColor" />}
          onClick={() => router.push("/menu")}
          className="text-black bg-gradient-to-r from-indigo-900/50 via-indigo-800/50  to-violet-800/50 hover:scale-110"
        >
          Ir al menú
        </Button>
      </Grid>

      <Grid xs={12} justify="center">
        <Text
          className="
            text-3xl font-normal text-center mt-5 mb-1 p-2
        "
          h3
        >
          {todayName === "Lunes"
            ? "Hoy nos tomamos un descanso"
            : `Nuestro plato del dia`}
        </Text>
      </Grid>
      <Grid justify="center" xs={12}>
        <CardDish product={product} />
      </Grid>
    </Grid.Container>
  );
}
