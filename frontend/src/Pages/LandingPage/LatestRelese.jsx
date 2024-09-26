import React from "react";
import { Link } from "react-router-dom";
import rrr from "../../Components/Images/rrrr.jpg";
import rrr2 from "../../Components/Images/rrr2.jpg";
import rrr2 from "../../Components/Images/rrr2.jpg";
import banner1 from "../../Components/Images/banner1.jpg";
const LatestRelease = () => {
  const latestMovies = [
    {
      title: "JAWAN",
      releaseDate: "September 25, 2024",
      description: "A thrilling action-packed movie.",
      img: banner1,
      link: "/MovieLanding",
    },
    {
      title: "RRR",
      releaseDate: "September 25, 2024",
      description: "A thrilling action-packed movie.",
      img: rrr,
      link: "/MovieLanding",
    },
    {
      title: "STREE",
      releaseDate: "September 20, 2024",
      description: "An emotional journey of love and loss.",
      img: rrr2,
      link: "/MovieLanding",
    },
    // Add more movie data here
  ];

  return (
    <div className="max-h-screen p-3">
      <h2 className="text-2xl font-bold mb-4">Latest Releases</h2>
      <div className="flex gap-4 overflow-auto ">
        {latestMovies.map((movie, index) => (
          <div key={index} className="bg-yellow-50 shadow-md rounded p-4 ">
            <img
              src={movie.img}
              alt={movie.title}
              className=" w-full h-32 object-fit rounded mb-4"
            />
            <h3 className="font-bold text-lg w-[250px]">{movie.title}</h3>
            <p className="text-gray-500">Release Date: {movie.releaseDate}</p>
            <p className="mt-2">{movie.description}</p>
            <Link
              to={movie.link}
              className="text-blue-500 hover:underline mt-2 block"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestRelease;
