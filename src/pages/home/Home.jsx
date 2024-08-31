import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";
function Home() {
  const { loading, recipelist } = useContext(GlobalContext);
  if (loading) return <div>Loading Please Wait!</div>;
  return (
    <div className="text-black text-lg container m-auto flex justify-center gap-3  flex-wrap">
      {recipelist && recipelist.length > 0 ? (
        recipelist.map((item, index) => <RecipeItem item={item} key={index} />)
      ) : (
        <div className="text-black lg:text-4xl text-xl font-extrabold">
          <p>Nothing to show.. Please Search Something</p>
        </div>
      )}
    </div>
  );
}

export default Home;
