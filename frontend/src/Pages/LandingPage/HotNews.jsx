import React from "react";

const HotNews = () => {
  // Sample news articles and fun facts
  const newsArticles = [
    {
      title: "Director Talks About the Movie's Success",
      date: "September 25, 2024",
      content:
        "The director shares insights on what made the film a box office hit.",
      link: "#",
    },
    {
      title: "Star Cast Revealed for Upcoming Projects",
      date: "September 20, 2024",
      content:
        "The lead actors of the movie are set to collaborate on several upcoming projects.",
      link: "#",
    },
    {
      title: "Behind the Scenes: A Look at the Making of the Film",
      date: "September 15, 2024",
      content:
        "A sneak peek into the challenges faced during the shooting of the movie.",
      link: "#",
    },
  ];

  return (
    <div className="m-3 p-5 bg-slate-100 rounded">
      <h2 className="text-2xl font-bold mb-4">News About the Movie</h2>
      <div className="mb-6">
        {newsArticles.map((article, index) => (
          <div key={index} className="border-b pb-3 mb-3">
            <h3 className="font-semibold text-lg">{article.title}</h3>
            <span className="text-sm text-gray-500">{article.date}</span>
            <p className="mt-1">{article.content}</p>
            <a href={article.link} className="text-blue-600 hover:underline">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotNews;
