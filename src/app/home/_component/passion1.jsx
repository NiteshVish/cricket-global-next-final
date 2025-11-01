"use client";

import { homepage } from "@/shared/images";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
// import Pass2 from "../../assets/Pass2.jpeg";    
// import Passion3 from "../../assets/Passion3.webp";
// import Passion4 from "../../assets/Passion4.webp";  
const Passion1 = () => {
  const scrollRef = useRef(null);

  
  

  // Auto-scroll images
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        if (scrollRef.current.scrollLeft >= maxScrollLeft) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 320 + 12, behavior: "smooth" }); // image width + gap
        }
      }
    }, 1000); // 3 seconds per scroll

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 320 + 12; // width + gap
    if (direction === "left")
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    else current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const imageVariants = {
    hidden: { opacity: 5, scale: 0.2, y: 30 },
    visible: { opacity: 4, scale: 1, y: 0, transition: { duration: 0.1, ease: "easeOut" } },
    hover: { scale: 0.6, transition: { duration: 0.3 } },
  };

  return (
    <section className="bg-white text-center py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden mt-9">
      <h2 className="text-[#1a1a40] text-3xl sm:text-6xl font-bold mb-18 tracking-wide">
        PASSION BEYOND <br className="hidden sm:block" /> BOUNDARIES
      </h2>

      <div className="relative w-[990px] mx-auto md:max-w-[330]">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#ffffffc9] backdrop-blur-sm shadow-md p-3 rounded-full hover:bg-white z-10 cursor-pointer"
        >
          <FaChevronLeft className="text-[#1a1a40] text-xl" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-scroll scroll-smooth scrollbar-hide"
        >
          {homepage.map((img, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[320px] rounded-xl overflow-hidden shadow-md"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Image
                src={img}
                alt={`CLG Member ${index + 1}`}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#ffffffc9] backdrop-blur-sm shadow-md p-3 rounded-full hover:bg-white z-10 cursor-pointer"
        >
          <FaChevronRight className="text-[#1a1a40] text-xl" />
        </button>
      </div>
    </section>
  );
};

export default Passion1;
