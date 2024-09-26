import React from "react";
import { IoPerson } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="flex p-3 justify-between text-2xl bg-slate-100 rounded m-2">
        <aside className="flex items-center gap-5">
          <Link to="/">
            <h1 className="font-bold ">Review4All</h1>
          </Link>
        </aside>
        <aside className="flex items-center gap-5">
          <div>
            <FaSearch />
          </div>

          {/* <div>
            <FaBell />
          </div>
          <div>
            <FaHeart />
          </div> */}
          <Link to="/">
            {" "}
            <IoHome />
          </Link>
          <IoPerson />
        </aside>
      </nav>
    </div>
  );
};

export default Navbar;
