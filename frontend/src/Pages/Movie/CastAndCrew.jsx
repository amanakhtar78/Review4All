import React from "react";
import Banner1 from "../../Components/Images/banner1.jpg";
import Banner2 from "../../Components/Images/banner2.jpg";
import Banner3 from "../../Components/Images/banner3.jpg";
import Banner4 from "../../Components/Images/banner4.jpg";
import Banner5 from "../../Components/Images/banner5.jpg";
const CastAndCrew = () => {
  // Sample cast and crew data
  const members = [
    {
      name: "Shah Rukh Khan",
      role: "Lead Actor",
      img: Banner1,
    },
    {
      name: "Deepika Padukone",
      role: "Lead Actress",
      img: Banner4,
    },
    {
      name: "A.R. Rahman",
      role: "Music Director",
      img: Banner2,
    },
    {
      name: "Rajkumar Hirani",
      role: "Director",
      img: Banner3,
    },
    {
      name: "Karan Johar",
      role: "Producer",
      img: Banner4,
    },
    {
      name: "Naseeruddin Shah",
      role: "Supporting Actor",
      img: Banner5,
    },
  ];

  return (
    <div className="m-5 p-5 bg-slate-100 rounded">
      <h2 className="text-2xl font-bold mb-4">Cast & Crew</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-2"
            />
            <h3 className="font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastAndCrew;
