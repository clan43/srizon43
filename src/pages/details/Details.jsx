import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddtofav,
    favrouiteList,
  } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data?.data) {
          setRecipeDetailsData(data.data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getRecipeDetails();
  }, [id, setRecipeDetailsData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const isFav = favrouiteList.some(
    (item) => item.id === recipeDetailsData?.recipe.id
  );

  return (
    <div className="min-h-screen text-white text-lg container py-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
      {recipeDetailsData?.recipe ? (
        <>
          <div className="row-start-2 lg:row-start-auto">
            <div className="h-72 overflow-hidden rounded-xl group">
              <img
                src={recipeDetailsData.recipe.image_url}
                alt={recipeDetailsData.recipe.title}
                className="w-full h-full object-cover block group-hover:scale-105 duration-300"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-sm text-cyan-700 font-medium">
              {recipeDetailsData.recipe.publisher}
            </span>
            <h3 className="font-bold text-2xl truncate text-black">
              {recipeDetailsData.recipe.title}
            </h3>
            <div>
              <button
                onClick={() => handleAddtofav(recipeDetailsData.recipe)}
                className={`bg-cyan-500 text-white px-5 py-1 rounded-md ${
                  isFav ? "bg-red-500" : "bg-cyan-500"
                }`}
              >
                {isFav ? "Remove from favourites" : "Add To Favourites"}
              </button>
            </div>
            <div>
              <span className="text-2xl font-semibold text-black">
                Ingredients:
              </span>
              <ul className="flex flex-col gap-3 text-black">
                {recipeDetailsData.recipe.ingredients.map((item, index) => (
                  <li key={index}>
                    <span className="text-xl font-semibold">
                      {item.quantity} {item.unit}
                    </span>
                    <span className="text-xl">{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <p>No recipe details available</p>
      )}
    </div>
  );
}

export default Details;
