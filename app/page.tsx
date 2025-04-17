"use client";
import Image from "next/image";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { subtitle } from "@/components/primitives";
import { InstagramIcon } from "@/components/icons";
import { Orbitron } from "@next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <Image 
          src="/logo.PNG" 
          alt="Media Mix Logo" 
          width={200} 
          height={100} 
          className="mx-auto"
        />
        <div className={subtitle({ class: "mt-4" })}>
        <h1 className={`${orbitron.className} text-3xl font-bold mt-3 text-yellow-500`}>
  Welcome to Media Mixer
</h1>

        <p className="text-lg mt-2 max-w-lg">
        My credentials, My story — beautifully displayed online...
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className="px-6 py-2 text-white bg-yellow-500 hover:bg-yellow-700 rounded-full shadow-lg transition"
          href={siteConfig.links.docs}
        >
          Sign in/Sign up
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.instagram}
        >
          <InstagramIcon size={20} />
          Instagram
        </Link>
      </div>
    </section>
  );
}
