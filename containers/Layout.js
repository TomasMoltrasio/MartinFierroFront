import Header from "./Header";
import Footer from "./Footer";
import { Container } from "@nextui-org/react";
import { useEffect, useState } from "react";
import ChargeContainer from "./ChargeContainer";

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);
  // const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  // if (isDisabled) {
  //   return (
  //     <div className="h-screen min-h-screen w-screen flex flex-auto flex-col items-center justify-between">
  //       <Container
  //         as="main"
  //         xl
  //         className="flex-auto flex flex-col items-center justify-center bg-slate-100"
  //       >
  //         <div className="flex flex-col items-center justify-center">
  //           <h1 className="text-4xl font-bold text-center mb-4">
  //             Sitio en mantenimiento
  //           </h1>
  //           <p className="text-lg text-center mb-4">
  //             Estamos trabajando para brindarte una mejor experiencia
  //           </p>
  //         </div>
  //       </Container>
  //     </div>
  //   );
  // }

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
