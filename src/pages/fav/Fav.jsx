import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";
export default function Fav() {
  const { favrouiteList } = useContext(GlobalContext);
  return (
    <div className="p-4">
      <div className=" text-black text-lg container m-auto flex justify-center gap-3  flex-wrap">
        {favrouiteList && favrouiteList.length > 0 ? (
          favrouiteList.map((item, index) => (
            <RecipeItem item={item} key={index} />
          ))
        ) : (
          <div className="text-black lg:text-4xl text-xl font-extrabold">
            <p>Nothing is added in favourites</p>
          </div>
        )}
      </div>
    </div>
  );
}
