import React from 'react';
import Container from '../Container';
import { FaStar } from 'react-icons/fa';

const ConciergeSection = () => {
  return (
    <section className="bg-[#050505] py-20 lg:py-32 w-full overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-20 lg:gap-12">

          {/* Left Content Area */}
          <div className="flex-1 w-full max-w-2xl flex flex-col space-y-12 px-4 lg:px-2">
            <h2 className="text-[2rem] sm:text-4xl lg:text-[2.75rem] font-bold text-white uppercase tracking-wider leading-[1.3] lg:leading-tight">
              UK’S HIGHEST RATED <br className="hidden sm:block" /> CONCIERGE <br className="hidden sm:block" /> MARKETPLACE
            </h2>

            <div className="flex flex-col space-y-10">
              {/* Feature 1 */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2.5">FCA regulated finance</h3>
                <p className="text-white/70 text-[15px] sm:text-base leading-relaxed tracking-wide max-w-lg">
                  Tailored PCP and HP agreements with our network of premier UK lenders.
                  Decisions in under 60 minutes.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2.5">Nationwide Covered Delivery</h3>
                <p className="text-white/70 text-[15px] sm:text-base leading-relaxed tracking-wide max-w-lg">
                  Your new vehicle delivered anywhere in the UK mainland in a
                  climate-controlled trailer for ultimate protection.
                </p>
              </div>

              {/* Feature 3 */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2.5">120-Point Technical Check</h3>
                <p className="text-white/70 text-[15px] sm:text-base leading-relaxed tracking-wide max-w-lg">
                  Every listing undergoes a rigorous multi-point inspection and full HPI
                  history verification.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="flex-1 w-full relative flex justify-center lg:justify-end lg:pr-6 mt-4 lg:mt-0">

            {/* Actual Image container */}
            <div className="relative w-full max-w-[400px] sm:max-w-md lg:max-w-[480px] aspect-4/5 rounded-[40px] overflow-hidden border border-white/5 shadow-2xl">
              <img
                src="/images/conciger.png"
                alt="Concierge Team"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
              />
            </div>

            {/* Floating Review Card */}
            <div className="absolute -bottom-12 lg:-bottom-16 left-2 sm:-left-4 lg:-left-16 bg-white rounded-[24px] p-6 sm:p-8 shadow-2xl max-w-[320px] sm:max-w-[400px] z-10 transition-transform hover:-translate-y-2 duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex text-[#FF9F29] text-xl sm:text-2xl gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="font-bold text-gray-900 text-sm sm:text-base ml-1">Excellent 4.9/5</span>
              </div>
              <p className="text-gray-800 text-[15px] italic leading-relaxed mb-5 font-medium">
                "The most seamless car purchase I've ever experienced in the UK. Professional from start to finish."
              </p>
              <p className="text-black font-bold text-[15px]">
                — James Harrison, London
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default ConciergeSection;
