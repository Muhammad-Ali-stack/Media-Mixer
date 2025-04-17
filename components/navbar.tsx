"use client";

import { useState } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { Orbitron } from "next/font/google";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

const orbitron = Orbitron({ subsets: ["latin"], weight: "700" });

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

  // Function to close the menu when a menu item is clicked
  const handleMenuItemClick = () => {
    console.log("Menu item clicked, closing menu..."); // Debugging
    setMenuOpen(false);
  };

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="bg-background text-foreground transition-colors"
    >
      {/* Left Side */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex items-center gap-1" href="/">
            <Logo />
            <p className={`${orbitron.className} font-bold text-yellow-500`}>
              Media Mixer
            </p>
          </NextLink>
        </NavbarBrand>
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-4 ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-yellow-500 data-[active=true]:font-medium"
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Right Side (Icons & Theme Switch) */}
      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            placeholder="Search..."
            startContent={<SearchIcon className="text-default-400" />}
            type="search"
          />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
         
        </NavbarItem>
      </NavbarContent>

      {/* Mobile View */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle onClick={() => setMenuOpen(!menuOpen)} />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu isOpen={menuOpen}>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              {/* Use Hero UI's Link component directly */}
              <Link
                href={item.href}
                onClick={handleMenuItemClick} // Close menu on click
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};