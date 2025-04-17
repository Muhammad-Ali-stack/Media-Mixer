"use client";

import React from "react";
import Image from "next/image";

const events = [
  {
    title: "Google UX Design Certificate in 2025",
    description: "Will the Google UX Certificate get you a UX designer job in 2025? How to take the most advantage of the course curriculum.",
    date: "Feb 17",
    stats: ["668", "18", "💬 💬 💬"],
    image: "/placeholder-image.jpg"
  },
  {
    title: "Advanced React Patterns Workshop",
    description: "Learn advanced React patterns and techniques to build scalable applications.",
    date: "March 16, 2025",
    stats: ["124", "32", "💬"],
    image: "/placeholder-image.jpg"
  },
  {
    title: "Tailwind CSS Masterclass",
    description: "Master utility-first CSS and build beautiful interfaces faster than ever.",
    date: "April 10, 2025",
    stats: ["892", "45", "💬 💬"],
    image: "/placeholder-image.jpg"
  },
];

const EventsSection = () => {
  return (
    <section className="py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold dark:text-white text-black">
            Blogs
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg transition-all duration-300 
                         hover:shadow-xl
                         dark:bg-transparent bg-white 
                         border dark:border-gray-700 border-gray-200
                         overflow-hidden flex flex-col md:flex-row" // Column on mobile, row on md+
            >
              {/* Image div - full width on mobile, 1/3 on desktop */}
              <div className="w-full md:w-1/3 lg:w-2/5 relative h-48 md:h-auto">
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
                
                {/* Stats row - responsive layout */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 mt-3 sm:mt-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {event.date}
                  </span>
                  <div className="flex gap-3 sm:gap-4 flex-wrap">
                    {event.stats.map((stat, i) => (
                      <span 
                        key={i}
                        className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center"
                      >
                        {i === 0 ? (
                          <span className="w-4 h-4 rounded-sm bg-blue-500 mr-1 flex items-center justify-center text-white text-xs">
                            ✓
                          </span>
                        ) : (
                          <span className="w-4 h-4 rounded-sm border border-gray-300 dark:border-gray-600 mr-1"></span>
                        )}
                        {stat}
                      </span>
                    ))}
                  </div>
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