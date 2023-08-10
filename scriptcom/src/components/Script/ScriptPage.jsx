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
    top:2rem;
    margin-bottom:5rem;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    border-radius:50px;

    .title{
        font-size:2rem;
        margin:1rem;
    }

`

const Description = styled.div`
  font-family: Arial, sans-serif; /* Set font family */
  font-size: 16px; /* Set font size */
  line-height: 1.5; /* Set line height */
  color: black; 
  margin:1.5rem;
  text-overflow: ellipsis;
`
const Button = styled.button`

border:none;
height:3rem;
width:5rem;
margin-bottom:2rem;
background:crimson;
color:white;
border-radius:10px;

&:hover{
    background:black;
}
`
const ScriptPage = () => {
  const { state } = useLocation();
  let data = state.categoryData[state.pageIndex];
    console.log("data",data);

    const [image, setImage] = useState({});

    const fetchFileData = (async ()=>{
        
    })
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
      <Description className="description">
      <p> {data.description}</p>
      </Description>
      <div className="code">
        <p> {data.code}</p>
      </div>
      <Button onClick={fetchFileData}>Download</Button>
    </Script>
  );
};

export default ScriptPage;
