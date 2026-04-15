import React from "react";
import { TLayoutProps } from "@/types";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const MainLayout = ({ children }: TLayoutProps) => {
  return (
    <div>
      <div className="relative min-h-screen">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
