import React from "react";

const WeeklyWinners = () => {
  const weeklyMovies = [
    {
      title: "Movie 5",
      earnings: "₹100 Crore",
      performance: "more", // Use 'more' for green, 'less' for red
      img: "https://example.com/movie5.jpg",
    },
    {
      title: "Movie 6",
      earnings: "₹50 Crore",
      performance: "less",
      img: "https://example.com/movie6.jpg",
    },
    {
      title: "Movie 5",
      earnings: "₹100 Crore",
      performance: "more", // Use 'more' for green, 'less' for red
      img: "https://example.com/movie5.jpg",
    },
    {
      title: "Movie 6",
      earnings: "₹50 Crore",
      performance: "less",
      img: "https://example.com/movie6.jpg",
    },
    {
      title: "Movie 5",
      earnings: "₹100 Crore",
      performance: "more", // Use 'more' for green, 'less' for red
      img: "https://example.com/movie5.jpg",
    },
    {
      title: "Movie 6",
      earnings: "₹50 Crore",
      performance: "less",
      img: "https://example.com/movie6.jpg",
    },
    // Add more weekly winner movie data here
  ];

  return (
    <div className="overflow-auto max-h-screen p-3">
      <h2 className="text-2xl font-bold mb-4">Weekly Winners</h2>
      <div className="flex overflow-auto gap-4">
        {weeklyMovies.map((movie, index) => (
          <div
            key={index}
            className={`shadow-md rounded p-4 ${
              movie.performance === "more" ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <img
              src={movie.img}
              alt={movie.title}
              className="w-[250px] h-32 object-cover rounded mb-4"
            />
            <h3 className="font-bold text-lg w-[250px]">{movie.title}</h3>
            <p className="text-gray-500">Earnings: {movie.earnings}</p>
            <p className="mt-2">
              {movie.performance === "more"
                ? "The movie performed well!"
                : "The movie underperformed."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyWinners;
