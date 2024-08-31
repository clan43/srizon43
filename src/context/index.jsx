import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [recipelist, setRecipelist] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favrouiteList, setFavrouiteList] = useState([]);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipelist(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam("");
    }
  }
  function handleAddtofav(getCurrentItem) {
    console.log(getCurrentItem);
    let copyFavList = [...favrouiteList];
    const index = copyFavList.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      copyFavList.push(getCurrentItem);
    } else {
      copyFavList.splice(index);
    }
    setFavrouiteList(copyFavList);
  }
  console.log(favrouiteList);
  return (
    <GlobalContext.Provider
      value={{
        recipeDetailsData,
        setRecipeDetailsData,
        searchParam,
        loading,
        recipelist,
        setSearchParam,
        handleSubmit,
        handleAddtofav,
        favrouiteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
