"use client";
import { cn } from "@/lib/utils/cn";
import { usePathname } from "next/navigation";

const CommonHeader = () => {
  const pathname = usePathname().split("/")[2].split("-").join(" ");

  return (
    <div className="bg-gradient-to-r from-[#415848] to-[#FFFFFF]">
      <div className="text-4xl sm:text-5xl lg:text-8xl font-semibold text-center py-10 lg:py-20 text-[#3B7D23] text-shadow-md text-shadow-white">
        {pathname.split(" ").map((text, indx) =>
          indx !== 0 ? (
            <span className={cn("", { capitalize: text !== "and" })} key={indx}>
              {" " + text}
            </span>
          ) : (
            <span className={cn("", { capitalize: text !== "and" })} key={indx}>
              {"" + text}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default CommonHeader;
