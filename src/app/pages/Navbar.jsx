"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = ["Home", "Services", "Portfolio", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const navItems = useRef([]);

  useEffect(() => {
    gsap.from(navItems.current, {
      y: -30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      delay: 3

    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scroll ? "bg-black" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6 text-white">

       
        <h1 className="text-xl font-bold">Logo</h1>

        <div className="px-6 bg-[#131016] border-gray-800 rounded-2xl py-4">

          <ul className="hidden md:flex gap-10">
            {navLinks.map((link, i) => (
              <li key={link} ref={(el) => (navItems.current[i] = el)}>
                <Link
                  to={link.toLocaleLowerCase()}
                  smooth={true}
                  duration={300}
                  spy={true}
                  offset={-70}
                  className="cursor-pointer py-2 px-4 rounded-xl transition-all duration-300 ease-in-out bg-transparent"
                  activeClass="bg-white text-black"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <p className="py-4 px-6 bg-white text-black">Let's Talk </p>
      </div>

      {open && (
        <div className="md:hidden bg-black flex flex-col items-center gap-6 py-6 text-white">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="text-yellow-400"
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}