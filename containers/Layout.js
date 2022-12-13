import Header from "./Header";
import Footer from "./Footer";
import { Container } from "@nextui-org/react";

export default function Layout({ children }) {
  return (
    <div className="h-screen min-h-screen w-screen flex-auto flex flex-col items-center justify-between">
      <Header />
      <Container
        as="main"
        xl
        className="flex-auto flex flex-col items-center justify-center bg-indigo-200/20"
      >
        {children}
      </Container>
      <Footer />
    </div>
  );
}
