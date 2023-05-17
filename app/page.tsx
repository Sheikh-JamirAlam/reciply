import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Featured from "./components/Featured";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

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
      <Testimonial />

      {/* Footer */}
      <Footer />
    </main>
  );
}
