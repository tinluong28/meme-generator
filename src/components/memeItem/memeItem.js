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

  const text_on_hover =
    props.type == "myMemes" ? (
      <p className={hovered ? "meme-text" : "no-text"}>
        {"Save it & share with your friends!!"}
      </p>
    ) : (
      <p className={hovered ? "meme-text" : "no-text"}>{props.meme.name}</p>
    );
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
      {text_on_hover}
    </div>
  );
};

export default MemeItem;
