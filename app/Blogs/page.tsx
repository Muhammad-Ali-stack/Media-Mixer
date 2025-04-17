"use client";

import React from "react";
import Image from "next/image";

const events = [
  {
    title: "Irfan Junejo's Latest Vlog - Karachi Streets",
    description:
      "Irfan takes you through the busy streets of Karachi, showing the hidden gems of the city with his unique perspective.",
    date: "Feb 17, 2025",
    image: "/j1.png", // Image for this event
  },
  {
    title: "Irfan Junejo's Fitness Journey",
    description:
      "Join Irfan as he shares his fitness journey, his workouts, and how he maintains a balance between work and fitness.",
    date: "March 16, 2025",
    image: "/irfan-junejo.jpg", // Image for this event
  },
  {
    title: "Irfan Junejo's Behind-the-Scenes",
    description:
      "A sneak peek into the behind-the-scenes of Irfan's vlogs. Get to know the process and the team that makes it all happen.",
    date: "April 10, 2025",
    image: "/j3.png", // Image for this event
  },
];

const EventsSection = () => {
  return (
    <section className="py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold dark:text-white text-black">
            Irfan Junejo Blogs
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg transition-all duration-300 
                         hover:scale-105 hover:shadow-xl 
                         dark:bg-transparent bg-white 
                         border dark:border-gray-700 border-gray-200
                         overflow-hidden flex flex-col md:flex-row hover:transform hover:translate-y-2" // Added hover effects here
            >
              {/* Image div - full width on mobile, 1/3 on desktop */}
              <div className="w-full md:w-1/3 lg:w-2/5 relative h-48 md:h-auto mt-4">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 40vw"
                />
              </div>

              {/* Content div - full width on mobile, 2/3 on desktop */}
              <div className="w-full md:w-2/3 lg:w-3/5 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 dark:text-white text-gray-900">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  {event.description}
                </p>

                {/* Date only */}
                <div className="mt-3 sm:mt-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {event.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
