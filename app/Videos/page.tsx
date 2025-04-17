"use client";

import React from "react";

const VideoGrid = () => {
  const videos = [
    {
      id: "1YzFqu-kzj8",
      title: "Reality of FOOTBALL in PAKISTAN - Documentary",
    },
    {
      id: "rU0inSQMHu0",
      title: "Silicon Valley in Korangi, Karachi",
    },
    {
      id: "3fumBcKC6RE",
      title: "Techfest team Leads",
    },
    {
      id: "9bZkp7q19f0",
      title: "Training and Development",
    },
    {
      id: "e-ORhEE9VVg",
      title: "Social media and Content",
    },
    {
      id: "RgKAFK5djSk",
      title: "Social Team",
    },
    {
      id: "OPf0YbXqDm0",
      title: "Graphics Team",
    },
    
  ];

  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-3xl font-bold text-black dark:text-white self-start">
        Recent Videos
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow-lg border-4 border-black dark:border-yellow-500 overflow-hidden cursor-pointer"
            style={{ width: "300px", height: "200px" }}
            onClick={() =>
              window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank")
            }
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-60 text-white w-full text-center p-2 font-semibold">
              {video.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
