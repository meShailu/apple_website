import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Modal from "./components/Modal";
import Features from "./components/Features";
import * as Sentry from "@sentry/react";
import HowITWorks from "./components/HowITWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Modal />
      <Features />
      <HowITWorks />
      <Footer />
    </main>
  );
}

export default Sentry.withProfiler(App);
