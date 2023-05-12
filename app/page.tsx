import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Featured from "./components/Featured";

export default function Home() {
  return (
    <main className="bg-platinum h-screen">
      {/* Header */}
      <Header />

      {/* Carousel */}
      <Carousel />

      {/* Featured */}
      <Featured />

      {/* Testimony */}

      {/* Footer */}
    </main>
  );
}
