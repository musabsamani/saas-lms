import Footer from "./components/common/Footer";
import About from "./pages/landing/About";
import Blogs from "./pages/landing/Blogs";
// import Courses from "./pages/landing/Courses";
import Features from "./pages/landing/Features";
import Hero from "./pages/landing/Hero";
import Navbar from "./pages/landing/Navbar";
import Services from "./pages/landing/Services";
import Success from "./pages/landing/Success";
import Testemonials from "./pages/landing/Testemonials";
import Background from "./pages/landing/components/hero/Background";

export default function App() {
  return (
    <>
      <header className="relative h-[170dvh] lg:h-[110dvh] bg-[#49BBBD] lg:bg-transparent">
        <Background />
        <Navbar />
        <Hero />
      </header>
      <Success />
      <Services />
      <About />
      <Features />
      {/* <Courses /> */}
      <Testemonials />
      <Blogs />
      <Footer />
    </>
  );
}
