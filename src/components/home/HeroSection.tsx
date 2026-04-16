"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "../Container";

const HeroSection = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-full overflow-hidden min-h-[95vh] lg:min-h-[85vh] xl:min-h-[750px] flex items-center bg-[#1A2E44]">
      {/* Background Image & Light Animation Wrapper */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden mix-blend-screen">
        {/* You can replace this URL with your chosen background image */}
        <div className="absolute inset-0 w-full h-full bg-[url('/background/hero-section.svg')] bg-cover bg-center bg-no-repeat origin-center animate-[subtleZoom_20s_ease-in-out_infinite_alternate] opacity-70" />
      </div>

      {/* Gradient Overlay for Text Legibility and Depth */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E30]/40 via-[#0F1E30]/0 to-transparent z-0"></div> */}

      <Container className="relative z-10 w-full h-full pt-20 pb-12 sm:pb-16 lg:pt-24 lg:pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-8 w-full h-full">
          {/* Left Content Area */}
          <div
            className="flex-1 w-full max-w-3xl flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6 lg:space-y-8 animate-[slideInLeft_1s_ease-out_forwards] opacity-0"
            style={{ animationFillMode: "forwards" }}
          >
            <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white tracking-tight leading-[1.1] sm:leading-[1.15]">
              The art of velocity <span className="opacity-80">. . .</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/95 max-w-xl font-light leading-relaxed">
              Discover the UK's most curated selection of performance and luxury
              vehicles. Where engineering meets pure editorial aesthetics.
            </p>

            {/* Actions: Pill Container */}
            <div className="bg-white/95 backdrop-blur-sm rounded-4xl sm:rounded-full p-2 sm:p-2 flex flex-col sm:flex-row gap-2 sm:gap-0 shadow-2xl items-center w-full max-w-xs sm:max-w-[460px] mt-2 sm:mt-4 transition-transform hover:scale-[1.02] duration-300">
              <Link
                href="/inventory"
                className="w-full sm:flex-1 bg-[#0047FF] hover:bg-[#0038cc] text-white px-6 py-3.5 sm:py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center text-center shadow-lg shadow-blue-500/25 text-sm sm:text-base relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 w-12 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-in-out"></div>
                Browse inventory
              </Link>
              <Link
                href="/sell"
                className="w-full sm:flex-1 px-6 py-3.5 sm:py-4 rounded-full font-medium text-[#0047FF] hover:bg-gray-50 transition-all duration-300 text-center text-sm sm:text-base"
              >
                Sells your vehicle
              </Link>
            </div>

            {/* Statistics */}
            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-4 sm:gap-8 pt-6 sm:pt-8 w-full border-t border-white/20 mt-6 sm:mt-8">
              <div className="flex flex-col items-center lg:items-start px-2 sm:px-0">
                <span className="text-xl sm:text-2xl font-bold text-white mb-1">
                  2.4 k +
                </span>
                <span className="text-xs sm:text-sm font-medium text-white/90">
                  Premium listing
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-l border-white/20 pl-4 sm:pl-8 pr-2 sm:pr-0">
                <span className="text-xl sm:text-2xl font-bold text-white mb-1">
                  15 min
                </span>
                <span className="text-xs sm:text-sm font-medium text-white/90">
                  Valuation speed
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-l lg:border-white/20 pl-4 sm:pl-8 mt-4 lg:mt-0 w-full lg:w-auto">
                <span className="text-xl sm:text-2xl font-bold text-white mb-1">
                  UK Wide
                </span>
                <span className="text-xs sm:text-sm font-medium text-white/90">
                  Concierge delivery
                </span>
              </div>
            </div>
          </div>

          {/* Right Image Area */}
          <div
            className="flex-1 w-full relative min-h-[300px] sm:min-h-[450px] lg:min-h-[600px] flex items-center justify-center lg:justify-end animate-[fadeIn_1.5s_ease-out_0.5s_forwards] opacity-0 mt-8 lg:mt-0"
            style={{ animationFillMode: "forwards" }}
          >
            <div className="relative w-full h-full lg:w-[140%] right-0 lg:right-[-10%] z-10 flex items-center animate-[float_6s_ease-in-out_infinite]">
              {!imageError ? (
                <img
                  src="https://freepngimg.com/thumb/porsche/22238-5-porsche-macan-transparent-image.png"
                  alt="Green Luxury SUV"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] sm:drop-shadow-[0_35px_45px_rgba(0,0,0,0.4)] transform scale-[1.12] sm:scale-125 lg:scale-[1.15] origin-center"
                  loading="eager"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-[400px] border-2 border-dashed border-white/40 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-sm">
                  <span className="text-white font-medium">
                    Add Vehicle Image Here
                  </span>
                </div>
              )}
            </div>

            {/* Floor highlight underneath car for realism */}
            <div className="absolute bottom-[5%] lg:bottom-[15%] left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] h-12 bg-white/40 blur-2xl rounded-[100%] z-0"></div>
          </div>
        </div>
      </Container>

      {/* Inline styles for custom animations that work perfectly with Tailwind without config changes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes subtleZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
      `,
        }}
      />
    </div>
  );
};

export default HeroSection;
