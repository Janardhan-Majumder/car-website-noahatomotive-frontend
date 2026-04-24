"use client";

import Image from 'next/image';
import Link from 'next/link';
import { IoArrowBackOutline } from 'react-icons/io5';

interface AuthWrapperProps {
  children: React.ReactNode;
  title: string;
  showBackButton?: boolean;
  backButtonHref?: string;
  logoSrc?: string;
  variant?: 'default' | 'curve';
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({
  children,
  title,
  showBackButton = true,
  backButtonHref = "/",
  logoSrc = "/images/logo.png",
  variant = 'default'
}) => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans bg-[#F8FAFC]">
      {/* Background Graphic / Texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/hero-section.svg"
          alt="Auth Background"
          fill
          priority
          className="object-cover opacity-30 grayscale saturate-0"
        />
        <div className="absolute inset-0 bg-linear-to-br from-blue-50/80 via-white/40 to-indigo-50/80"></div>
      </div>

      {/* Main Container - High Contrast Side-by-Side */}
      <div className="relative z-10 w-full max-w-[95%] sm:max-w-[500px] md:max-w-5xl flex flex-col md:flex-row bg-white rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden m-4">

        {/* Left Section: Branding & Imagery */}
        <div className="hidden md:flex flex-1 bg-[#0041FF] relative overflow-hidden items-center justify-center p-12">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>

          <div className="relative z-20 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-2xl mb-8 rotate-3 transform transition-transform hover:rotate-0 duration-500">
              <div className="relative w-16 h-8">
                <Image src="/images/logo.png" alt="Logo" fill style={{ objectFit: 'contain' }} />
              </div>
            </div>
            <h2 className="text-white text-3xl font-bold mb-4 tracking-tight leading-tight">
              Welcome to <br /> Noah Automotive
            </h2>
            <p className="text-blue-100 text-lg max-w-[280px] leading-relaxed opacity-90">
              Your premier destination for high-end vehicle matching and concierge.
            </p>
          </div>

          {/* Background Car Silhouette or Pattern */}
          <div className="absolute bottom-0 right-0 w-full h-1/2 opacity-20 pointer-events-none">
            <Image src="/background/hero-section.svg" alt="Pattern" fill className="object-contain object-bottom-right" />
          </div>
        </div>

        {/* Right Section: Form Content */}
        <div className="flex-1 p-8 sm:p-14 md:p-16 bg-white flex flex-col justify-center min-h-[550px]">
          {/* Header Area */}
          <div className="mb-10 flex flex-col gap-2">
            <div className="flex items-center justify-between mb-4">
              {showBackButton && (
                <Link href={backButtonHref} className="p-2 -ml-2 text-gray-400 hover:text-blue-600 transition-all hover:bg-blue-50 rounded-full">
                  <IoArrowBackOutline size={24} />
                </Link>
              )}
              <div className="md:hidden relative w-20 h-10">
                <Image src="/images/logo.png" alt="Logo" fill style={{ objectFit: 'contain' }} />
              </div>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {title}
            </h1>
            <div className="h-1.5 w-12 bg-blue-600 rounded-full mt-1"></div>
          </div>

          {/* Form Slot */}
          <div className="w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
