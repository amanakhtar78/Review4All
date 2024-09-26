import React from "react";

const UpcomingMovie = () => {
  const upcomingMovies = [
    {
      title: "Movie 3",
      releaseDate: "October 10, 2024",
      description: "An epic fantasy adventure.",
      img: "https://example.com/movie3.jpg",
      link: "#",
    },
    {
      title: "Movie 4",
      releaseDate: "November 5, 2024",
      description: "A hilarious comedy with twists.",
      img: "https://example.com/movie4.jpg",
      link: "#",
    },
    // Add more upcoming movie data here
  ];

  return (
    <div className="max-h-screen p-3">
      <h2 className="text-2xl font-bold mb-4">Upcoming Movies</h2>
      <div className="flex gap-4 overflow-auto ">
        {upcomingMovies.map((movie, index) => (
          <div key={index} className="bg-slate-50 shadow-md rounded p-4">
            <img
              src={movie.img}
              alt={movie.title}
              className="w-[250px] h-32 object-cover rounded mb-4"
            />
            <h3 className="font-bold text-lg w-[250px]">{movie.title}</h3>
            <p className="text-gray-500">Release Date: {movie.releaseDate}</p>
            <p className="mt-2">{movie.description}</p>
            <a
              href={movie.link}
              className="text-blue-500 hover:underline mt-2 block"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMovie;
