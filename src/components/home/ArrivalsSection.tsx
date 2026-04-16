import Container from '../Container';
import Link from 'next/link';
import { Button } from 'antd';

const ArrivalsSection = () => {
  return (
    <Container className="py-12 lg:py-16">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <div>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold uppercase tracking-tight text-gray-900 mb-2 font-sans">
            Curated Arrivals
          </h2>
          <p className="text-gray-700 text-lg">
            Hand-picked excellence from across the United Kingdom.
          </p>
        </div>
        <Link href="/inventories">
          <Button
            shape="round"
            className="bg-[#EAEAEA] hover:bg-[#D9D9D9]! text-gray-900 font-medium px-8 py-5 border-none shadow-none text-base"
          >
            See all
          </Button>
        </Link>
      </div>

      {/* Masonry Grid Layout for Screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-5 gap-4 lg:gap-5 lg:h-[650px] xl:h-[700px]">

        {/* Card 1: Tall (Spans 1 column, 2 rows) */}
        <div className="group relative w-full h-[450px] lg:h-full lg:col-span-1 lg:row-span-5 rounded-3xl overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-gray-200 overflow-hidden">
            <img
              src="/images/arrival1.svg"
              alt="Curated Arrival Porsche"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Text Content */}
          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col justify-end transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
            <h3 className="text-white font-bold text-xl uppercase tracking-wide mb-2 drop-shadow-md">
              Curated Arrivals
            </h3>
            <p className="text-white/80 text-sm font-medium mb-5 leading-relaxed drop-shadow-sm max-w-[90%]">
              Hand-picked excellence from across the United Kingdom.
            </p>
            <span className="text-white font-extrabold text-2xl drop-shadow-md">
              $ 12,000
            </span>
          </div>
        </div>

        {/* Card 2: Wide (Spans 2 columns, 1 row) */}
        <div className="group relative w-full h-[350px] lg:h-full lg:col-span-2 lg:row-span-3 rounded-3xl overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-gray-200 overflow-hidden">
            <img
              src="/images/arrival2.svg"
              alt="Curated Arrival Red SUV"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Text Content */}
          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
            <div>
              <h3 className="text-white font-bold text-xl uppercase tracking-wide mb-2 drop-shadow-md">
                Curated Arrivals
              </h3>
              <p className="text-white/80 text-sm font-medium leading-relaxed drop-shadow-sm max-w-sm">
                Hand-picked excellence from across the United Kingdom.
              </p>
            </div>
            <span className="text-white font-extrabold text-2xl drop-shadow-md">
              $ 12,000
            </span>
          </div>
        </div>

        {/* Card 3: Small 1 */}
        <div className="group relative w-full h-[350px] lg:h-full lg:col-span-1 lg:row-span-2 rounded-3xl overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-gray-200 overflow-hidden">
            <img
              src="/images/arrival3.svg"
              alt="Curated Arrival Blue SUV"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col justify-end transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
            <h3 className="text-white font-bold text-lg sm:text-xl uppercase tracking-wide mb-2 drop-shadow-md">
              Curated Arrivals
            </h3>
            <p className="text-white/80 text-xs sm:text-sm font-medium mb-5 leading-relaxed drop-shadow-sm max-w-[90%]">
              Hand-picked excellence from across the United Kingdom.
            </p>
            <span className="text-white font-extrabold text-xl sm:text-2xl drop-shadow-md">
              $ 12,000
            </span>
          </div>
        </div>

        {/* Card 4: Small 2 */}
        <div className="group relative w-full h-[350px] lg:h-full lg:col-span-1 lg:row-span-2 rounded-3xl overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-gray-200 overflow-hidden">
            <img
              src="/images/arrival4.svg"
              alt="Curated Arrival Generic Vehicle"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col justify-end transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
            <h3 className="text-white font-bold text-lg sm:text-xl uppercase tracking-wide mb-2 drop-shadow-md">
              Curated Arrivals
            </h3>
            <p className="text-white/80 text-xs sm:text-sm font-medium mb-5 leading-relaxed drop-shadow-sm max-w-[90%]">
              Hand-picked excellence from across the United Kingdom.
            </p>
            <span className="text-white font-extrabold text-xl sm:text-2xl drop-shadow-md">
              $ 12,000
            </span>
          </div>
        </div>

      </div>
    </Container>
  );
};

export default ArrivalsSection;
