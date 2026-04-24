"use client";


import { createElement } from "react";
import { useRouter } from "next/navigation";
import { IoChevronBack } from "react-icons/io5";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils/cn";

const PageHeading = ({
  title,
  backPath,
  hideIcon,
  className,
  backIcon,
}: {
  title: string;
  backPath?: string;
  hideIcon?: boolean;
  className?: string;
  backIcon?: IconType;
}) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 text-[24px] font-semibold",
        className
      )}
    >
      {!hideIcon && (
        <button
          className="outline-none cursor-pointer shadow-inner hover:bg-gray-100/30 p-1"
          onClick={() => (backPath ? router.push(backPath) : router.back())}
        >
          {createElement(backIcon || IoChevronBack, { className: "w-5 md:w-6" })}
        </button>
      )}
      <h1>{title}</h1>
    </div>
  );
};

export default PageHeading;
