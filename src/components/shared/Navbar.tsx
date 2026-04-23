"use client";
import { Button, ConfigProvider, Grid, Dropdown, Avatar, Drawer } from "antd";
import type { MenuProps } from "antd";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { IoMdPower } from "react-icons/io";
import { HiOutlineUserCircle, HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import {
  LuLayoutDashboard,
  LuMegaphone,
  LuMessageSquare,
  LuSettings,
} from "react-icons/lu";
import { cn } from "@/lib/utils/cn";
import { BiPurchaseTag } from "react-icons/bi";

const Navbar = ({ className }: { className?: string }) => {
  const screens = Grid.useBreakpoint();
  const [scrolling, setScrolling] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const { user, isAuthenticated, logout, isLoading } = useAuth();

  const userAvatarUrl = user?.avatar;
  const userName = user?.name || "Guest User";

  const handleLogout = () => {
    logout();
    setDrawerOpen(false);
    router.push("/");
  };

  const userMenuItems: MenuProps["items"] = [
    {
      key: "profile",
      label: "Profile",
      icon: <HiOutlineUserCircle className="w-4 h-4" />,
      onClick: () => router.push("/profile"),
    },
    ...(user?.role === "admin"
      ? [
        {
          key: "dashboard",
          label: "Dashboard",
          icon: <LuLayoutDashboard className="w-4 h-4" />,
          onClick: () => router.push("/dashboard"),
        },
        {
          key: "advertising",
          label: "Advertising",
          icon: <LuMegaphone className="w-4 h-4" />,
          onClick: () => router.push("/advertising"),
        },

        {
          key: "contacts",
          label: "Contacts",
          icon: <LuMessageSquare className="w-4 h-4" />,
          onClick: () => router.push("/contacts"),
        },
      ]
      : [
        {
          key: "My Orders",
          label: "My Orders",
          icon: <BiPurchaseTag className="w-4 h-4" />,
          onClick: () => router.push("/my-orders"),
        },]),
    {
      key: "settings",
      label: "Settings",
      icon: <LuSettings className="w-4 h-4" />,
      onClick: () => router.push("/settings"),
    },
    { type: "divider" },
    {
      key: "logout",
      label: "Logout",
      icon: <IoMdPower className="w-4 h-4" />,
      onClick: handleLogout,
      danger: true,
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 70);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer when screen becomes desktop
  useEffect(() => {
    if (screens.lg) setDrawerOpen(false);
  }, [screens.lg]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "All products", href: "/inventories" },
    { label: "Carts ( 03 )", href: "/my-cart" },
    { label: "Messages ( 03 )", href: "/messages" },
    { label: "Contact us", href: "/contact" },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgElevated: "#fff",
          colorText: "#000",
        },
        components: {
          Button: {
            borderRadiusLG: 30,
          },
        },
      }}
    >
      <div
        className={cn(
          "bg-white/95 backdrop-blur-md z-999 transition-all duration-300 sticky top-0 left-0 w-full",
          { "shadow-sm border-b border-gray-100": scrolling },
          className,
        )}
      >
        <div className="container w-full mx-auto px-4 lg:px-6 flex justify-between items-center py-2 sm:py-4">
          {/* Logo */}
          <div className="relative w-24 sm:w-28 h-12 sm:h-14 shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                style={{ objectFit: "contain", objectPosition: "left" }}
                sizes="(max-width: 640px) 96px, (max-width: 1280px) 112px, 160px"
              />
            </Link>
          </div>

          {/* ─── Center Nav Links (Desktop) ─── */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm xl:text-base font-medium hover:text-[#0041FF] transition-colors",
                  (pathname === "/" && link.href === "/" || link.href !== "/" && pathname.includes(link.href)) ? "text-[#0041FF]" : "text-gray-500",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ─── Right Section (Desktop) ─── */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated && (
              <Dropdown
                menu={{ items: userMenuItems }}
                placement="bottomRight"
                trigger={["click"]}
              >
                <div className="cursor-pointer flex items-center gap-2.5 pl-1.5 pr-3 py-1 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-all select-none">
                  <Avatar
                    size={34}
                    src={userAvatarUrl}
                    icon={
                      !userAvatarUrl && (
                        <HiOutlineUserCircle className="text-gray-400 w-5 h-5" />
                      )
                    }
                    className="shrink-0 bg-blue-50 flex items-center justify-center"
                  />
                  <span className="text-gray-800 text-sm font-medium truncate max-w-30">
                    {userName}
                  </span>
                </div>
              </Dropdown>
            )}

            {!isAuthenticated && (
              <Link href="/login">
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  className="bg-[#0041FF] border-none hover:bg-[#0036d6]! text-white h-10 px-8! xl:px-10! text-sm font-medium ml-2 pb-0.5!"
                >
                  Sign in
                </Button>
              </Link>
            )}
          </div>

          {/* ─── Mobile: Hamburger ─── */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <HiMenu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* ─── Mobile Drawer ─── */}
      <Drawer
        closable={false}
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        styles={{ body: { padding: 0 } }}
        className="lg:hidden"
      >
        <div className="flex flex-col h-full bg-white">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
            <Link href="/" onClick={() => setDrawerOpen(false)}>
              <div className="relative w-24 h-8">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  fill
                  style={{ objectFit: "contain", objectPosition: "left" }}
                />
              </div>
            </Link>
            <button
              onClick={() => setDrawerOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <HiX className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {/* Nav Links */}
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl transition-colors font-medium text-base",
                    pathname === link.href
                      ? "bg-blue-50 text-[#0041FF]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#0041FF]",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="px-4 py-2">
              <div className="h-px bg-gray-100 my-2"></div>

              {isAuthenticated ? (
                <>
                  <div className="flex items-center gap-3 px-4 py-4 mb-2 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <Avatar
                      size={40}
                      src={userAvatarUrl}
                      icon={
                        !userAvatarUrl && (
                          <HiOutlineUserCircle className="text-gray-400 w-6 h-6" />
                        )
                      }
                      className="shrink-0 bg-white border-2 border-white shadow-sm"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm leading-tight m-0">
                        {userName}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/profile"
                    onClick={() => setDrawerOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 text-gray-700 hover:text-[#0041FF] transition-colors"
                  >
                    <HiOutlineUserCircle className="w-5 h-5 text-gray-400" />
                    <span className="font-medium text-sm">Profile</span>
                  </Link>

                  {user?.role === "admin" && (
                    <>
                      <Link
                        href="/dashboard"
                        onClick={() => setDrawerOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 text-gray-700 hover:text-[#0041FF] transition-colors"
                      >
                        <LuLayoutDashboard className="w-5 h-5 text-gray-400" />
                        <span className="font-medium text-sm">Dashboard</span>
                      </Link>
                      <Link
                        href="/advertising"
                        onClick={() => setDrawerOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 text-gray-700 hover:text-[#0041FF] transition-colors"
                      >
                        <LuMegaphone className="w-5 h-5 text-gray-400" />
                        <span className="font-medium text-sm">Advertising</span>
                      </Link>
                      <Link
                        href="/contacts"
                        onClick={() => setDrawerOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 text-gray-700 hover:text-[#0041FF] transition-colors"
                      >
                        <LuMessageSquare className="w-5 h-5 text-gray-400" />
                        <span className="font-medium text-sm">Contacts</span>
                      </Link>
                    </>
                  )}

                  <Link
                    href="/settings"
                    onClick={() => setDrawerOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 text-gray-700 hover:text-[#0041FF] transition-colors"
                  >
                    <LuSettings className="w-5 h-5 text-gray-400" />
                    <span className="font-medium text-sm">Settings</span>
                  </Link>
                </>
              ) : null}
            </div>
          </div>

          <div className="mt-auto p-5 border-t border-gray-100">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 transition-colors font-medium"
              >
                <IoMdPower className="w-5 h-5" />
                Logout
              </button>
            ) : (
              <Link href="/login" onClick={() => setDrawerOpen(false)}>
                <Button
                  type="primary"
                  size="large"
                  shape="round"
                  className="w-full bg-[#0041FF] hover:bg-[#0036d6]! border-none h-12 text-base font-medium"
                >
                  Sign in
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Drawer>
    </ConfigProvider>
  );
};

export default Navbar;
