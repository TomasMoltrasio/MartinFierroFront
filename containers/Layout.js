import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-between h-screen min-h-screen w-screen">
      <Header />
      <main className="flex flex-col h-full w-full">{children}</main>
      <Footer />
    </div>
  );
}
