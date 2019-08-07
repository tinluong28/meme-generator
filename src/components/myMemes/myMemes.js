import React, { useContext } from "react";
import { MemeContext } from "../../context/meme-context";
import "./myMemes.css";
const MyMemes = props => {
  const context = useContext(MemeContext);
  return (
    <div>
      {context.myMemes.map((meme, index) => (
        <img
          key={index}
          src={meme.data.url}
          alt="my-meme"
          className="my-meme-img"
        />
      ))}
    </div>
  );
};

export default MyMemes;
