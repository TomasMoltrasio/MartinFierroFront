import Header from "./Header";
import Footer from "./Footer";
import { Container } from "@nextui-org/react";

export default function Layout({ children }) {
  return (
    <div className="h-screen min-h-screen w-screen flex flex-col items-center justify-between">
      <Header />
      <main className="flex flex-col min-h-max w-full items-center justify-center bg-indigo-200/20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
