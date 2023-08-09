import React, { useContext } from "react";
import styled from "styled-components";
import CategoryImage from "./CategoryImage";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "./Category";

const Card = styled.div`
  border: none;
  width: 100%;
  max-width: 16em;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  margin-top: 5rem;
  background: snow;
  margin: 1rem;
  overflow: hidden;
  transition: all 0.6s ease;

  .box-card:hover {
    box-shadow: rgba(100, 172, 28, 0.199) -10px 10px,
      rgba(255, 172, 28, 0.19) -20px 20px;
  }

  .title {
    text-align: center;
  }

  .description {
    margin: 1rem;
  }

  .review {
    margin: 1rem;
  }
  .btn {
    margin-left: 5rem;
    margin-bottom: 1rem;
    background: black;
    color: snow;
    border: none;
    border-radius: 5px;
    height: 2rem;
  }

  .btn:hover {
    background: #ff4760;
    color: snow;
  }
`;

const CategoryItem = ({ category, index }) => {
  let navigate = useNavigate();
  const { categoryData } = useContext(CategoryContext);

  const { id, title, description, reviews, code, thumbnailId } = category;

  const routeChange = () => {
    let path = `/script`;
    navigate(path, { state: { pageIndex: index, categoryData: categoryData } });
  };

  return (
    <>
      <Card className="box-card">
        <h2 className="title"> {title}</h2>
        <CategoryImage thumbnail={thumbnailId} alt="Image"></CategoryImage>
        <p className="description"> {description}</p>
        <p className="review"> {reviews}</p>
        <button onClick={routeChange} className="btn">
          Know More
        </button>
      </Card>
    </>
  );
};

export default CategoryItem;
