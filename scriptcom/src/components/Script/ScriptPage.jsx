import React, { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { styled } from "styled-components";

const Script = styled.div`
    background:white;
    width:60%;
    text-align:center;
    position:relative;
    left:20%;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    border-radius:50px;

    .title{
        font-size:2rem;
        margin:1rem;
    }

`
const ScriptPage = () => {
  const { state } = useLocation();
  let data = state.categoryData[state.pageIndex];
    console.log("data",data);

    const [image, setImage] = useState({});
    const fetchImageData = (async (thumbnailId) => {
        await axios
          .get("http://localhost:8083/thumbnail/" + thumbnailId)
          .then((response) => {
            setImage(response.data);
          })});
    useEffect(()=>{
        fetchImageData(data.thumbnailId);
    },[])
  return (
    <Script className="box main-page">

      <h1 className="title">{data.title}</h1>
      <img className="img"
      src={`data:image/jpeg;base64,${image?.image?.data}`}></img>
      <p> {data.description}</p>
      <p> {data.code}</p>
    </Script>
  );
};

export default ScriptPage;
