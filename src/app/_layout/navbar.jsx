import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { homepage, logoimg } from "@/shared/images";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#001B5E] text-white py-4 relative w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image src={logoimg.logoImg} alt="Cricket Lovers Global" className="h-16 w-32" />
          </Link>
        </div>

        <div className="hidden lg:flex space-x-8 text-l font-normalbold">
          <Link href="/about" className="hover:text-green-400">
            ABOUT
          </Link>
          <Link href="/cares" className="hover:text-green-400">
            CLG CARES
          </Link>
          <Link href="/gallery" className="hover:text-green-400">
            GALLERY
          </Link>
          <Link href="/membership" className="hover:text-green-400">
            MEMBERSHIP
          </Link>
          <Link href="/events" className="hover:text-green-400">
            EVENTS
          </Link>
          <Link
            href="https://clgacademy.co.uk/"
            className="hover:text-green-400"
          >
            CLG ACADEMY
          </Link>
          <Link href="/contact" className="hover:text-green-400">
            CONTACT
          </Link>
        </div>

        <Link
          href="/login"
          className="hidden lg:block bg-green-600 hover:bg-[#001B5E] border border-transparent hover:border-green-600 hover:text-green-600 text-white font-semibold px-9 py-3 rounded-full"
        >
          LOGIN/SIGN UP
        </Link>

        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#001B5E] text-center space-y-4 py-6">
          <Link
            href="/about"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            href="/cares"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            CLG CARES
          </Link>
          <Link
            href="/gallery"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            GALLERY
          </Link>
          <Link
            href="/membership"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            MEMBERSHIP
          </Link>
          <Link
            href="/events"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            EVENTS
          </Link>
          <Link
            href="https://clgacademy.co.uk/"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            CLG ACADEMY
          </Link>
          <Link
            href="/contact"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
          <Link
            href="/signup"
            className="block bg-green-600 hover:bg-[#001B5E] border border-transparent hover:border-green-600 hover:text-green-600 text-white font-semibold px-9 py-3 rounded-full mx-auto w-max cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            LOGIN/SIGN UP
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar
