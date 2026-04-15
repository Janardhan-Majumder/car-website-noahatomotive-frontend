// "use client";

// import React, { createElement, useMemo } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { TRole } from "@/types";
// import { generateLink } from "@/lib/generateLink";
// import { cn } from "@/utils/cn";
// import Swal from "sweetalert2";
// import { useAuth } from "@/context/AuthContext";
// import { getRoleLabel } from "@/lib/helpers/getRoleLabel";
// import { dashboardItems } from "@/constants/router.const";
// import Link from "next/link";
// import Image from "next/image";
// import { PowerIcon } from "@heroicons/react/24/outline";
// import RecentVisit from "../dashboard/RecentVisit";
// import { imageUrl } from "@/config";

// const Sidebar = ({
//   className,
//   isAdmin,
// }: {
//   className?: string;
//   isAdmin?: boolean;
// }) => {
//   const pathname = usePathname();
//   const { user, logout } = useAuth();
//   const router = useRouter();

//   const handleLogOut = () => {
//     Swal.fire({
//       html: `
//         <div class="text-center pt-5">
//             Are you sure you want to logout?
//         </div>
//       `,
//       showCancelButton: true,
//       confirmButtonText: "     Logout     ",
//       cancelButtonText: "Cancel",
//       showConfirmButton: true,
//       confirmButtonColor: "#DC2626",
//       reverseButtons: true,
//     }).then((res: any) => {
//       if (res.isConfirmed) {
//         logout();
//         router.replace("/");
//       }
//     });
//   };

//   if (!user) {
//     return (
//       <div
//         className={cn(
//           "py-6 drop-shadow-xs sticky top-0 left-0 lg:border-r border-[#E6E6E6] flex items-center justify-center",
//           className
//         )}
//       >
//         <div className="text-gray-500">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div
//       className={cn(
//         "py-6 drop-shadow-xs sticky top-0 left-0 lg:border-r border-[#E6E6E6]",
//         className
//       )}
//     >
//       <div className="flex flex-col justify-between gap-2 px-3.5 h-full">
//         <div className="space-y-3">
//           <div className="relative w-full max-w-16 sm:max-w-20 xl:max-w-40 aspect-4/2 -mt-4 ml-4 mr-4">
//             <Link href={`/`}>
//               <Image
//                 src="/static/2Fans-01.svg"
//                 alt="Logo"
//                 fill
//                 style={{ objectFit: "contain" }}
//                 sizes="100vw"
//               />
//             </Link>
//           </div>
//           <div className="flex items-center gap-x-3 w-full">
//             <div className="h-12 w-12 rounded-full overflow-hidden mb-0.5 shrink-0 bg-gray-100 flex items-center justify-center">
//               <Image
//                 src={user?.avatar || "/static/demo/porfile-img.png"}
//                 alt="Profile"
//                 height={48}
//                 width={48}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="space-y-0.5 min-w-0 flex-1">
//               <h5 className="font-semibold text-sm truncate whitespace-nowrap overflow-hidden">
//                 {user?.name}
//               </h5>
//               <p className="text-xs leading-tight truncate whitespace-nowrap overflow-hidden text-gray-500">
//                 {getRoleLabel(user.role as TRole)}
//               </p>
//             </div>
//           </div>
//           {!isAdmin && (
//             <Link
//               href={
//                 user.role.toLocaleLowerCase() === "creator"
//                   ? `/upload-content`
//                   : `/become-creator`
//               }
//             >
//               <button className="w-full pr-4 py-2.5 gap-3 outline-none font-medium text-[#373643] bg-emerald-200 rounded-lg cursor-pointer">
//                 {user.role.toLowerCase() === "creator"
//                   ? `✚ Create`
//                   : `Become a creator`}
//               </button>
//             </Link>
//           )}
//           <div className="space-y-2 pt-2.5 max-h-[calc(100vh-260px)] overflow-y-auto">
//             {generateLink(dashboardItems, user.role as TRole).map(
//               ({ name, icon, path }: any, indx: number) => {
//                 const itemPath = path as string;
//                 const normalizedPath = itemPath.startsWith("/")
//                   ? itemPath
//                   : `/${itemPath}`;
//                 const isActive =
//                   pathname === normalizedPath ||
//                   pathname.startsWith(normalizedPath + "/");

//                 return (
//                   <Link
//                     href={normalizedPath}
//                     key={indx}
//                     className={cn(
//                       "w-full pl-4 pr-4 py-2.5 flex items-center justify-start gap-3 text-lg transition-all font-medium hover:bg-[#ecdfdf]",
//                       {
//                         " relative before:absolute before:left-0 before:top-0 before:w-2 before:h-full before:rounded-r-sm before:bg-emerald-400 bg-[#FCECEC]":
//                           isActive,
//                       }
//                     )}
//                   >
//                     {createElement(icon, {
//                       className: "size-5",
//                     })}
//                     <span>{name}</span>
//                   </Link>
//                 );
//               }
//             )}
//           </div>
//           {!isAdmin && user.role.toLowerCase() !== "creator" && <RecentVisit />}
//         </div>
//         <button
//           onClick={handleLogOut}
//           className="bg-light-gray/20 w-full pl-4 pr-4 py-2.5 flex items-center justify-start gap-3 text-lg outline-none font-medium text-[#373643] bg-[#FCECEC]"
//         >
//           <PowerIcon className="text-red-400 size-5" />
//           <span>Log-out</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
