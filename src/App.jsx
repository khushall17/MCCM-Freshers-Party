import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import Registration from "./components/Registration";
import Venue from "./components/Venue";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Pay from "./components/Pay";
import Hurry from "./components/Hurry";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Schedule />
        {/* <Competition /> */}
        <Gallery />
        <Registration />
        <Pay />
        <Venue />
        <Hurry />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
