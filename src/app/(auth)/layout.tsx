import React from "react";
import { TLayoutProps } from "@/types";

const AuthLayout = ({ children }: TLayoutProps) => {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
};

export default AuthLayout;
