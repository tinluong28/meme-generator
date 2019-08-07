import React from "react";
import "./createMeme.css";

const CreateMeme = props => {
  return (
    <div className="container mt-5">
      <form action="" className="col-md-10 form-inline mt-5">
        <div className="form-group mr-5">
          <label className="mr-2">
            <strong>Top:</strong>
          </label>
          <input
            className="form-control"
            type="text"
            onChange={e => props.set_text("text0", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="mr-2">
            <strong>Bottom:</strong>
          </label>
          <input
            className="form-control"
            type="text"
            onChange={e => props.set_text("text1", e.target.value)}
          />
        </div>
      </form>
      <p className="instruction">
        Input text and select the meme you want to use.
      </p>
    </div>
  );
};

export default CreateMeme;
