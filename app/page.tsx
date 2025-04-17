"use client";

import Image from "next/image";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { subtitle } from "@/components/primitives";
import { InstagramIcon } from "@/components/icons";
import { FaYoutube } from "react-icons/fa";  // Import YouTube icon from react-icons
import { Orbitron } from "@next/font/google";
import { motion } from "framer-motion";

const orbitron = Orbitron({ subsets: ["latin"], weight: "700" });

export default function Home() {
  const headingText = "Welcome to Media Mixer";

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image 
            src="/logo.PNG" 
            alt="Media Mix Logo" 
            width={200} 
            height={100} 
            className="mx-auto"
          />
        </motion.div>

        {/* Text Animation */}
        <div className={subtitle({ class: "mt-4" })}>
          <h1 className={`${orbitron.className} text-3xl font-bold mt-3 text-yellow-500`}>
            {Array.from(headingText).map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <p className="text-lg mt-2 max-w-lg">
            My credentials, My story — beautifully displayed online...
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <Link
          className="px-6 py-2 text-white bg-yellow-500 hover:bg-yellow-700 rounded-full shadow-lg transition"
          href="https://www.youtube.com/c/IrfanJunejo"  // Update the href to point to the /portal page
        >
          <FaYoutube size={20} className="mr-2" /> {/* YouTube Icon */}
          YouTube
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="https://www.instagram.com/irfanjunejo"  // Corrected Instagram URL
        >
          <InstagramIcon size={20} />
          Instagram
        </Link>
      </div>
    </section>
  );
}
