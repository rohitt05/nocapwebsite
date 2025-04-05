"use client";
import Carousel from "./components/Carousel";
import AboutSection from "./components/AboutSection";
import Waitlist from "./components/Waitlist";
// import Contact from "./components/Contact";
import Footer from "./components/Footer"; // ⬅️ new import

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Join Waitlist Button - positioned absolutely */}
      <div className="absolute top-10 right-10 z-20">
        <button
          onClick={() => window.open('https://forms.gle/dfQzzzQBaf3E26367', '_blank')}
          className="text-white font-medium hover:text-black transition-colors px-6 py-2 rounded-[10px] border border-white hover:bg-white"
        >
          Join Waitlist
        </button>
      </div>

      {/* Full-screen carousel with logo centered */}
      <Carousel />

      {/* About section */}
      <AboutSection />

      {/* Floating Waitlist card at bottom center */}
      <Waitlist />

      {/* Contact email */}
      {/* <Contact /> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
