"use client";
import Carousel from "./components/Carousel";
import AboutSection from "./components/AboutSection";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";
import AutoScrollFlyer from "./components/AutoScrollFlyer";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-995 relative overflow-hidden">
      {/* Wrapper div around AutoScrollFlyer with margin-bottom */}
      <div className="mb-5">
        <AutoScrollFlyer />
      </div>

      {/* Content container with adjusted positioning */}
      <div className="relative">
        {/* Join Waitlist Button - positioned absolutely relative to this container */}
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

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}