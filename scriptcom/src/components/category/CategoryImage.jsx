import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  height: 100px;
  width: 100px;
  margin-left: 4.5rem;
`;

const CategoryImage = (props) => {
  const [image, setImage] = useState({});

  const fetchImageData = async () => {
    await axios
      .get("http://localhost:8083/thumbnail/" + props.thumbnail)
      .then((response) => {
        setImage(response.data);
      });
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
