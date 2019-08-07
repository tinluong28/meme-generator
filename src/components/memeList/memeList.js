import React, { useContext } from "react";
import { MemeContext } from "../../context/meme-context";
import MemeItem from "../memeItem/memeItem";
import "./memeList.css";

const MemeList = props => {
  const context = useContext(MemeContext);

  return (
    <div>
      {context.isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          {context.memes.slice(0, context.memeLimit).map(meme => (
            <MemeItem key={meme.id} meme={meme} />
          ))}
          <p onClick={context.loadMore} className="loadMore">
            Load 10 more memes...
          </p>
        </div>
      )}
    </div>
  );
};

export default MemeList;
