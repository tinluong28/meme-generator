import React, { useContext, useState } from "react";
import { MemeContext } from "../../context/meme-context";
import MemeItem from "../memeItem/memeItem";
import "./myMemes.css";
const MyMemes = props => {
  const [hovered, setHovered] = useState(false);
  const context = useContext(MemeContext);
  return (
    <div>
      {context.myMemes.map((meme, index) => (
        <MemeItem key={index} meme={meme.data} type={"myMemes"} />
        // <div
        //   className="my-meme-item"
        //   onMouseEnter={() => setHovered(true)}
        //   onMouseLeave={() => setHovered(false)}
        // >
        //   <img
        //     key={index}
        //     src={meme.data.url}
        //     alt="my-meme"
        //     className={hovered ? "my-meme-img" : "my-meme-img"}
        //   />
        //   <p
        //     className={hovered ? "my-meme-text" : "no-text"}
        //     onClick={() => context.removeMyMeme}
        //   >
        //     X
        //   </p>
        // </div>
      ))}
    </div>
  );
};

export default MyMemes;
