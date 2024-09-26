import React from "react";

const MovieNewsAndFacts = () => {
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

  const funFacts = [
    "The movie was filmed in over five different countries.",
    "The lead actor performed most of his stunts.",
    "The film's soundtrack features an award-winning composer.",
    "The movie grossed over ₹1 billion in its opening weekend.",
    "This is the first collaboration between the lead actor and actress.",
  ];

  return (
    <div className="m-5 p-5 bg-slate-100 rounded">
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

      <h2 className="text-2xl font-bold mb-4">Fun Facts</h2>
      <ul className="list-disc list-inside">
        {funFacts.map((fact, index) => (
          <li key={index} className="mb-1">
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieNewsAndFacts;
