import React from "react";
import { Link } from "react-router-dom";
function RecipeItem({ item }) {
  return (
    <div className="flex flex-col w-80 bg-white/90 shadow-xl rounded-2xl border-cyan-300 border-2 overflow-hidden p-3">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item.image_url} alt="recipe item" className="block w-full" />
      </div>
      <div>
        <span className="text-cyan-700 font-medium">{item.publisher}</span>
        <h3 className="text-sm truncate">{item.title}</h3>
        <Link
          to={`/details/${item.id}`}
          className="text-sm mt-5 p-3 px-8 bg-cyan-400 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md text-white"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}

export default RecipeItem;
