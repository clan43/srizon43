import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";

function Nav() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <div className="flex justify-between items-center py-5 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <NavLink
        to={"/details/:id"}
        className="text-black hover:text-gray-700 text-2xl font-semibold transition-all duration-[0.1s] ease-in-out"
      >
        Food Recipes
      </NavLink>
      <form action="#" onSubmit={handleSubmit}>
        <input
          onChange={(event) => setSearchParam(event.target.value)}
          value={searchParam}
          type="text"
          name="search"
          placeholder="Search items..."
          className="outline-none border-2 border-cyan-200 px-3 py-1 rounded-md lg:w-96 shadow-red-100 shadow-md focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 text-xl transition-all duration-[0.1s] ease-in-out"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/fav"}
            className="text-black hover:text-gray-700 text-xl transition-all duration-[0.1s] ease-in-out"
          >
            Favourite
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/details/:id"}
            className="text-black hover:text-gray-700 text-xl transition-all duration-[0.1s] ease-in-out"
          >
            Recipes
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
