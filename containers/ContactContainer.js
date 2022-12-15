import { Grid, Text, User } from "@nextui-org/react";

export default function ContactContainer() {
  return (
    <div className="w-full h-max flex flex-col items-center justify-start">
      <Grid.Container gap={2}>
        <Grid justify="center" xs={12}>
          <Text
            h1
            className="
            text-4xl
            font-normal
            text-center
            text-gray-800
            mb-4
            mt-4
            "
          >
            Contactate con nosotros
          </Text>
        </Grid>
        <Grid justify="center" xs={12}>
          <Text
            h1
            className="
                text-2xl
                font-normal
                text-center
                text-gray-800
                mb-4
                "
          >
            Podes hacer tu reserva para nuestro salon por los siguientes medios
          </Text>
        </Grid>
        <Grid justify="center" direction="column" xs={12}>
          <Grid justify="flex-start" xs={12}>
            <User
              src="/wp-logo.png"
              size="xl"
              name="2241527444"
              zoomed
              className="w-full"
            >
              <User.Link
                href="https://wa.me/5492241527444"
                target="_blank"
                rel="noreferrer"
              >
                Ir a whatsapp
              </User.Link>
            </User>
          </Grid>
          <Grid justify="flex-start" xs={12}>
            <User
              src="/tel-icon.png"
              size="xl"
              name="2241527444"
              zoomed
              className="w-full"
            >
              <User.Link
                href="tel:+5492241527444"
                target="_blank"
                rel="noreferrer"
              >
                Llamar
              </User.Link>
            </User>
          </Grid>
          <Grid justify="flex-start" xs={12}>
            <User
              src="/insta-logo.png"
              size="xl"
              name="Instagram"
              zoomed
              className="w-full"
            >
              <User.Link
                href="https://www.instagram.com/martinfierrocomidacasera/"
                target="_blank"
                rel="noreferrer"
              >
                Ir a instagram
              </User.Link>
            </User>
          </Grid>
          <Grid justify="center" xs={12}>
            <Text
              h1
              className="
                text-2xl
                font-normal
                text-center
                text-gray-800
                
                w-full
                "
            >
              O podes acercarte a nuestro local en Alvear 679.
            </Text>
          </Grid>
        </Grid>
        <Grid justify="center" xs={12}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d573.7363303088554!2d-58.01469320394766!3d-35.564992180569796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95980debb55c5c29%3A0xca7f0f8b04a6b690!2sMartin%20Fierro%20Comida%20Casera!5e0!3m2!1ses-419!2sar!4v1666270059422!5m2!1ses-419!2sar"
            width={400}
            height={250}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="
            w-full
            h-full
            md:w-1/2
            lg:w-1/2
            xl:w-1/2
            2xl:w-1/2
            3xl:w-1/2
            4xl:w-1/2
            "
          />
        </Grid>
      </Grid.Container>
    </div>
  );
}
