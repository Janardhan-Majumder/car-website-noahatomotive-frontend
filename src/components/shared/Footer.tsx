"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import Image from "next/image";

const footerData = {
  brand: {
    name: "NOAH",
    description: "Redefining the premium automotive marketplace through cinematic design and uncompromising service standards.",
  },
  sections: [
    {
      title: "Unity Pages",
      links: [
        { label: "All products", href: "/products" },
        { label: "Carts", href: "/cart" },
        { label: "Contact us", href: "/contact" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms & Condition", href: "/terms" },
      ],
    },
  ],
  contact: {
    title: "Get in Touch",
    email: "abc@gmail.com",
    phone: "(009)56567890",
    socials: [
      { icon: FaTwitter, href: "#", label: "Twitter" },
      { icon: FaFacebookF, href: "#", label: "Facebook" },
      { icon: FaInstagram, href: "#", label: "Instagram" },
      { icon: FaGithub, href: "#", label: "Github" },
    ],
  },
  copyright: `© Copyright ${new Date().getFullYear()}, All Rights Reserved by Logo`,
};


const Footer = () => {
  const { brand, sections, contact, copyright } = footerData;

  return (
    <footer className="relative bg-[#090B13] text-white overflow-hidden border-t border-white/5">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
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
            <p className="text-white/60 text-sm leading-relaxed max-w-xs uppercase tracking-wider">
              {brand.description}
            </p>
          </div>

          {/* Dynamic Sections */}
          {sections.map((section, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
              <h3 className="text-lg font-semibold text-white tracking-wide">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Social Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <h3 className="text-lg font-semibold text-white tracking-wide">{contact.title}</h3>
            <div className="space-y-4">
              <p className="text-white/60 text-sm">{contact.email}</p>
              <p className="text-white/60 text-sm">{contact.phone}</p>

              <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                {contact.socials.map((social, sIdx) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={sIdx}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 group"
                    >
                      <Icon className="text-lg group-hover:scale-110 transition-transform duration-300" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 lg:mt-24 pt-8 border-t border-white/20 flex flex-col items-center space-y-4">
          <p className="text-white/40 text-xs tracking-widest text-center">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

