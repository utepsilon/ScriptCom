import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CategoryContext } from "./Category";

const Image = styled.img`
  height: 100px;
  width: 100px;
  margin-left: 4.5rem;
`;

const CategoryImage = (props) => {
  const [image, setImage] = useState({});
    // const {categoryData,setCategoryData} = useContext(CategoryContext);
    // const [imagecategory,setThumbnailImage] = useState({})
  const fetchImageData = async () => {
    await axios
      .get("http://localhost:8083/thumbnail/" + props.thumbnail)
      .then((response) => {
        setImage(response.data);
      });
    //   await setThumbnailImage(props.category);
    //   await setThumbnailImage((imagecategory) => ({...imagecategory,"imageData":image}))
    //   var newCategoryData = [...categoryData];
    // //   console.log("newCategoryData",newCategoryData);
    //   newCategoryData[props.index] = {...imagecategory}  ;
    //   console.log("newCategoryData1",newCategoryData);
    //   await setCategoryData(newCategoryData);
  };

  useEffect(() => {
    fetchImageData();
  }, []);

  return (
    <Image
      className="img"
      src={`data:image/jpeg;base64,${image?.image?.data}`}
    ></Image>
  );
};

export default CategoryImage;
