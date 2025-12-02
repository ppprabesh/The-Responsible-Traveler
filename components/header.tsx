"use client";
import React, { useState } from "react";
import { MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, Navbar, NavbarButton, NavbarLogo, NavBody, NavItems } from "./ui/resizable-navbar";


export function Header() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Packages", link: "packages" },
    { name: "About Us", link: "about-us" },
    { name: "Contact Us", link: "contact-us" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      <NavBody visible={false}>
        <NavbarLogo visible={false} />
        <NavItems items={navItems} />
        <NavbarButton>Book Now</NavbarButton>
      </NavBody>

      <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen}>
        <MobileNavHeader>
          <NavbarLogo visible={false} />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMobileMenuOpen}>
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-black dark:text-white"
            >
              {item.name}
            </a>
          ))}
          <NavbarButton onClick={() => setIsMobileMenuOpen(false)}>Book Now</NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
