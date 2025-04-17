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
      id: "AWXGfjAAchQ",
      title: "Karachi Street Food feat. Redmi Note 14 Pro +",
    },
    {
      id: "3vGtW9Sk1pE",
      title: "goal maray 8, hoodie sampling done, ab production start.",
    },
    {
      id: "Nab5Lsd7OqU",
      title: "sooja mera ghutna, lekin football ne nahi rukna.",
    },
    {
      id: "ybKih0_YZHs",
      title: "The planet is counting on us!",
    },
  ];

  const instagramPosts = [
    {
      url: "https://www.instagram.com/p/CllUI_0oQNA/?hl=en",
      title: "Training Day Highlights",
      imageUrl: "/j1.png",
    },
    {
      url: "https://www.instagram.com/p/C7wjAqOoen4/?hl=en",
      title: "Street Action Vibes",
      imageUrl: "/j2.png",
    },
    {
      url: "https://www.instagram.com/p/C1UoUrXIy5r/?hl=en",
      title: "Matchday Moments",
      imageUrl: "/j3.png",
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* YouTube Videos */}
      <h1 className="text-3xl font-bold text-black dark:text-white self-start">
        Recent Videos
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow-lg border-4 border-black dark:border-yellow-500 overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
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

      {/* Instagram Posts */}
      <h1 className="text-3xl font-bold text-black dark:text-white self-start">
        Recent Instagram Posts
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {instagramPosts.map((post, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow-lg border-4 border-black dark:border-yellow-500 overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ width: "300px", height: "300px" }}
            onClick={() => window.open(post.url, "_blank")}
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-60 text-white w-full text-center p-2 font-semibold">
              {post.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
