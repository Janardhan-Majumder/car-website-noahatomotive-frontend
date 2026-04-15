import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Footer = async () => {
  //   const shareLinks = [
  //     {
  //       icon: Twitter,
  //       url: "",
  //       label: "Twitter",
  //     },
  //     {
  //       icon: FaLinkedinIn,
  //       url: "",
  //       label: "LinkedIn",
  //     },
  //     {
  //       icon: FaYoutube,
  //       url: "",
  //       label: "Youtube",
  //     },
  //     {
  //       icon: FaInstagramSquare,
  //       url: "",
  //       label: "Instagram",
  //     },
  //   ];
  const footerSections = [
    {
      title: "Jump In",
      links: [
        { label: "Explore Channels", href: "/overview" },
        { label: "Log In", href: "/sign-in", hasArrow: true },
        { label: "Create an Account", href: "/sign-up" },
      ],
    },
    {
      title: "The Basics",
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" },
      ],
    },
    {
      title: "Need Help?",
      links: [
        { label: "❔Browse FAQs", href: "/faq" },
        {
          label: `✉︎ admin@+2fans.com`,
          href: `mailto:admin@+2fans.com`,
        },
        {
          label: `✆ Chat with us`,
          href: `tel:+1 (555) 123-4567`,
        },
      ],
    },
  ];
  return (
    <footer className="bg-[#000000]">
      <div className="container mx-auto px-2.5 lg:px-4 py-12 lg:py-16 flex flex-col sm:flex-row items-center justify-center gap-8">
        {[
          { label: "About Us", href: "/about" },
          { label: "Terms and condition", href: "/terms" },
          { label: "Privacy policy", href: "/privacy" },
        ].map((section) => (
          <Link href={`${section.href}`} key={section.href} className="text-white underline">
            {section.label}
          </Link>
        ))}
      </div>
      <div className="bg-[#18191C] py-3 sm:py-5 text-center text-xs sm:text-sm text-white/70 border-t border-white/20">
        © 2025 FanLnk–a Vinian Tech company
      </div>
    </footer>
  );
};

export default Footer;
