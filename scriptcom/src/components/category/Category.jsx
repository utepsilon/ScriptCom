import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import CategoryItem from "./CategoryItem";
import styled from "styled-components";
const CategoryBox = styled.div`

height: auto;
width: 50rem;
position:relative;
left:23%;
top:3rem;
display:flex;
flex-wrap: wrap-reverse;
justify-content:center;
gap:1rem 10rem;
border-top-left-radius:50px;
border-bottom-left-radius:50px;
border-top-right-radius:50px;
border-bottom-right-radius:50px;
background: white;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}
`;

export const CategoryContext = createContext();

const Category = () => {
  const [categoryData, setCategoryData] = useState([{"id": "id6",
  "title": "Title5",
  "description": "description5",
  "reviews": 4.0,
  "code": "Code",
  "fileName": "amazon_deals.py",
  "thumbnailId": "64d3db4bb2a6443742af3fff",
   "imageData":""}]);

  const fetchCategoryData = async () => {
    const { data } = await axios.get("http://localhost:8083/script/all");
    console.log("data:", data);
    setCategoryData(data);
    console.log("categoryData", categoryData);
  };
  //eslint-disable-line
  useEffect(() => {
    fetchCategoryData();
    console.log("categoryData", categoryData);
  }, []);

  return (
    <>
      <CategoryContext.Provider value={{ categoryData, fetchCategoryData ,setCategoryData}}>
        <CategoryBox className="box category-box">
          {categoryData.map((category, index) => {
            return (
              <CategoryItem
                key={index}
                index={index}
                category={category}
              ></CategoryItem>
            );
          })}
        </CategoryBox>
      </CategoryContext.Provider>
    </>
  );
};

export default Category;
