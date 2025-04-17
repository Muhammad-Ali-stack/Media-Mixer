"use client";

import Image from "next/image";
import { title } from "@/components/primitives";
import { motion } from "framer-motion";
import { Youtube, Instagram } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen p-6 bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto">
        <h1 className={`${title()} mb-6`}>About Irfan Junejo</h1>

        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
          {/* Text Section */}
          {/* Text Section */}
<div className="text-gray-700 dark:text-gray-300 text-lg space-y-4 md:w-1/2 mt-6">

            <p>
              Irfan Junejo is a storyteller, filmmaker, and digital creator from Pakistan
              known for his cinematic vlogs and relatable content. His journey began with a camera,
              a bike, and a dream to show the beauty in everyday life.
            </p>
            <p>
              With millions of followers and a loyal fanbase, Irfan's content has inspired
              a generation of young creators to tell their own stories — no matter how big or small.
            </p>
            <p>
              From his iconic line <em>"Main koi influencer nahi hoon"</em> to heartfelt vlogs,
              Irfan continues to grow while staying true to authenticity and storytelling.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.youtube.com/c/IrfanJunejo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-500 hover:underline"
              >
                <Youtube className="w-5 h-5" /> YouTube
              </a>

              <a
                href="https://www.instagram.com/irfanjunejo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-500 hover:underline"
              >
                <Instagram className="w-5 h-5" /> Instagram
              </a>
            </div>
          </div>

          {/* Animated Image Section */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/irfan-junejo.jpg"
              alt="Irfan Junejo"
              width={450}
              height={450}
              className="rounded-3xl shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
