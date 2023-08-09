import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

const ScriptPage = () => {
  const { state } = useLocation();
  console.log("index", state.pageIndex);
  let data = state.categoryData[state.pageIndex];

  return (
    <div className="box main-page">
      <h1>{data.title}</h1>
      <p> {data.description}</p>
      <p> {data.code}</p>
    </div>
  );
};

export default ScriptPage;
