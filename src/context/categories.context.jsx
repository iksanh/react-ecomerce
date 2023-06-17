import { createContext, useEffect, useState } from "react";
// addCollectionAndDocuments for add  helper function for add data to firestore
// import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utlis";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utlis";

import PRODUCTS from "../shop-data.json";
import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

  // upload data to firestore using addCollectionAndDocuments
  // useEffect(() => {
  //   // console.log(PRODUCTS);
  //   // console.log(SHOP_DATA);
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
      // console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
