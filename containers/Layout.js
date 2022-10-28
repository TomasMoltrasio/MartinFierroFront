import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="h-screen min-h-screen w-screen flex-auto flex flex-col items-center justify-between">
      <Header />
      <main
        className="flex flex-col h-full w-full"
        style={{
          height: "max-content",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
