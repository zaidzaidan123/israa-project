"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";

import logo from "../../../public/assets/logo.svg";
import { Lock, BurgerMenu } from "../icons";
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Course", href: "/courses" },
  { name: "Club", href: "/club" },
  { name: "Book Consultation", href: "/consultation" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (state) => () => setOpen(state);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Divider />
      <List>
        {navLinks.map(({ name, href }) => (
          <ListItem key={name} disablePadding>
            <Link href={href} className="w-full">
              <ListItemButton>
                <ListItemText primary={name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding className="flex flex-col">
          <Link href="/login" className="w-full">
            <ListItemButton>
              <Image src={Lock} alt="lock" width={18} height={18} />
              <ListItemText primary="Login" sx={{ ml: 1 }} />
            </ListItemButton>
          </Link>
          <Link href="/signup" className="w-full">
            <ListItemButton>
              <button className="bg-[#C5B2DB] text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90">
                Sign up for Free
              </button>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <header className="w-full bg-[#fdf9f7] py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Genskin Logo" width={40} height={40} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#2a2a2a]">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`transition-colors duration-200 hover:text-[#390099]`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login">
            <button className="flex items-center gap-1 text-gray-600 text-sm hover:text-purple-700">
              <Image src={Lock} alt="lock" width={16} height={16} />
              Login
            </button>
          </Link>
          <button className="bg-[#C5B2DB] text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90">
            Sign up for Free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <IconButton onClick={toggleDrawer(true)}>
            <Image src={BurgerMenu} alt="burgerMenu" width={20} height={20} />
          </IconButton>
        </div>
      </div>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </header>
  );
};

export default Header;
