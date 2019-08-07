import React from "react";

const initialState = {
  memes: [],
  isLoading: false,
  memeLimit: 10,
  loadMore: () => {},
  text0: "",
  text1: "",
  createMeme: () => {},
  myMemes: []
};
const MemeContext = React.createContext({ initialState });

const MemeProvider = props => {
  return (
    <MemeContext.Provider value={initialState}>
      {props.children}
    </MemeContext.Provider>
  );
};

export { MemeContext, MemeProvider };
