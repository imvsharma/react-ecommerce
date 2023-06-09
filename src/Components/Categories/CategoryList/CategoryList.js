import { useEffect, useCallback, useState } from "react";
import axios from "axios";
import CategoryItem from "../CategoryItem/CategoryItem";

const GET_CATEGORIES_LIST_API = "https://asos2.p.rapidapi.com/categories/list"

const getCategoryOptions = {
    params: {
      country: "US",
      lang: "en-US"
    },
    headers: {
      "X-RapidAPI-Key": "iI5iDVTq8LmshL1tUnWVddVkxCdap1fzTy5jsntUJnXk251bxi",
      "X-RapidAPI-Host": "asos2.p.rapidapi.com"
    }
  };

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    const getCategories = useCallback(async () => {
        console.log("call");
        const response = await axios.get(
          GET_CATEGORIES_LIST_API,
          getCategoryOptions
        );
        const categoriesData = response?.data?.navigation.map((category) => {
          return {
            id: category.id,
            name: category?.content?.title
          };
        });
        console.log(categoriesData);
        setCategories(categoriesData);
      }, []);

    useEffect(() => {
        getCategories()
    })
    

    return (
        <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
            {categories && categories.map(category => <CategoryItem id={category.id} name={category.name} />)}
        </div>
    )
}

export default CategoryList;