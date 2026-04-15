import { cn } from "@/lib/utils/cn";
import { TContainerProps } from "@/types";
import React from "react";

const Container = ({
  children,
  mClassName,
  className,
  ...pProps
}: TContainerProps) => {
  return (
    <div {...pProps} className={cn("w-full relative", className)}>
      <div
        className={cn(
          "container w-full mx-auto px-2.5 sm:px-4 lg:px-6 py-12 lg:py-16 xl:py-20",
          mClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
