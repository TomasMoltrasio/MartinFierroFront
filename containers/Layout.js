import Header from "./Header";
import Footer from "./Footer";
import { Container } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-screen w-screen flex flex-auto flex-col items-center justify-center">
          <Image
            src="/LogoMartinFierro.svg"
            alt="logo"
            width={200}
            height={200}
          />
          <h1 className="text-2xl font-bold text-gray-800">
            Martin Fierro Comida Casera
          </h1>
          <h2 className="text-xl font-bold text-gray-800">
            Comida casera para disfrutar en tu casa o en nuestro salón
          </h2>
          <h3 className="text-xl font-bold text-gray-800">
            Preparate para hacer tu pedido...
          </h3>
        </div>
      ) : (
        <div className="h-screen min-h-screen w-screen flex flex-auto flex-col items-center justify-between">
          <Header />
          <Container
            as="main"
            xl
            className="flex-auto flex flex-col items-center justify-center bg-gradient-to-b from-indigo-600/10 via-indigo-600/20 to-indigo-600/30"
          >
            {children}
          </Container>
          <Footer />
        </div>
      )}
    </>
  );
}
