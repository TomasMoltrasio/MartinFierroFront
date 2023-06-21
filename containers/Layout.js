import Header from "./Header";
import Footer from "./Footer";
import { Container } from "@nextui-org/react";
import { useEffect, useState } from "react";
import ChargeContainer from "./ChargeContainer";

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <ChargeContainer />
      ) : (
        <div className="h-screen min-h-screen w-screen flex flex-auto flex-col items-center justify-between">
          <Header />
          <Container
            as="main"
            xl
            className="flex-auto flex flex-col items-center justify-center bg-slate-100"
          >
            {children}
          </Container>
          <Footer />
        </div>
      )}
    </>
  );
}
