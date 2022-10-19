import { Grid, Text, Button } from "@nextui-org/react";
import NextLink from "next/link";
import CardDish from "components/CardDish";
import { MdRestaurantMenu } from "react-icons/md";

export default function HomeContainer() {
  const todayName = new Date().toLocaleDateString("es", { weekday: "long" });

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
            text-xl
            font-normal
            mb-2
            "
        >{`Hoy ${todayName} nuestro horario es de`}</Text>
      </Grid>
      <Grid xs={12} justify="center">
        <Text h1 className="text-center text-xl font-normal mb-5">
          10:30 a 15:00 y de 18:30 a 23:00
        </Text>
      </Grid>
      <Grid xs={12} justify="center">
        <NextLink href="/menu">
          <Button
            size="lg"
            auto
            rounded
            color="primary"
            iconRight={<MdRestaurantMenu fill="currentColor" />}
            className="text-black bg-violet-900/50 hover:scale-110"
          >
            Ir al menú
          </Button>
        </NextLink>
      </Grid>

      <Grid xs={12} justify="center">
        <Text
          className="
            text-2xl font-normal text-center mt-5 mb-1 p-2
        "
          h3
        >
          {todayName === "Lunes"
            ? "Hoy nos tomamos un descanso"
            : `Nuestro plato del dia`}
        </Text>
      </Grid>
      <Grid justify="center" xs={12}>
        <CardDish />
      </Grid>
    </Grid.Container>
  );
}
