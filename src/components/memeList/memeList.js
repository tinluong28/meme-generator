import React, { useContext } from "react";
import { MemeContext } from "../../context/meme-context";
import MemeItem from "../memeItem/memeItem";
import "./memeList.css";

const MemeList = props => {
  const { isLoading, memes, memeLimit, loadMore } = useContext(MemeContext);

  return (
    <div>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          {memes.slice(0, memeLimit).map(meme => (
            <MemeItem key={meme.id} meme={meme} />
          ))}
          <p
            onClick={loadMore}
            className={memeLimit < 100 ? "loadMore" : "no-text"}
          >
            Load 10 more memes...
          </p>
        </div>
      )}
    </div>
  );
};

export default MemeList;
