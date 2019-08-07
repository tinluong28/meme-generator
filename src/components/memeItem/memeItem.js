import React, { useState, useContext } from "react";
import { MemeContext } from "../../context/meme-context";
import "./memeItem.css";
const MemeItem = props => {
  const [hovered, setHovered] = useState(false);
  let context = useContext(MemeContext);
  const postMeme = () => {
    const { text0, text1 } = context;
    const memeObj = {
      template_id: props.meme.id,
      text0,
      text1
    };
    context.createMeme(memeObj);
  };
  console.log(context.text0, context.text1);
  return (
    <div
      className="meme-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        className={hovered ? "meme-img darken-img" : "meme-img"}
        src={props.meme.url}
        alt={props.meme.name}
        onClick={() => postMeme()}
      />
      <p className={hovered ? "meme-text" : "no-text"}>{props.meme.name}</p>
    </div>
  );
};

export default MemeItem;
