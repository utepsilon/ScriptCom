import React, {  createContext, useEffect, useState } from 'react'
import axios from 'axios'
import CategoryItem from './CategoryItem';

export const CategoryContext = createContext();

const Category = () => {

  const [categoryData , setCategoryData] = useState([]);

   const  fetchCategoryData = async()=> {
    const { data } =  await axios.get("http://localhost:8083/script/all");
    setCategoryData(data);
  }

  useEffect(()=>{
 fetchCategoryData();
 console.log(categoryData)
  },[setCategoryData])

  return (
   
    <>
    <div className='box category-box'>
      {
      categoryData.map((category,index)=> {
       
        <CategoryItem key={index} category={category}></CategoryItem>
      
      })}
    </div>
    </>
 
  )
}

export default Category