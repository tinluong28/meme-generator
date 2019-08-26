import React, { useState, useEffect } from "react";
import CreateMeme from "./components/createMeme/createMeme";
import MyMemes from "./components/myMemes/myMemes";
import MemeList from "./components/memeList/memeList";
import { MemeContext, MemeProvider } from "./context/meme-context";
import "./App.css";
import { username, password } from "./context/secret";
import { async } from "q";

function App() {
  const [memes, setMemes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [memeLimit, setMemeLimit] = useState(10);
  const [text, setText] = useState({ text0: "", text1: "" });
  const loadMore = () => setMemeLimit(memeLimit + 10);
  const [newMemes, setNewMemes] = useState([]);
  const fetchData = async () => {
    setIsLoading(true);
    const result = await fetch("https://api.imgflip.com/get_memes");
    const json = await result.json();
    setMemes(json.data.memes);
    setIsLoading(false);
  };
  const set_text = (field, input) => {
    if (field === "text0") {
      setText({ ...text, text0: input });
    } else if (field === "text1") {
      setText({ ...text, text1: input });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const postMemeJson = params => {
    params["username"] = username;
    params["password"] = password;
    const bodyParams = Object.keys(params)
      .map(key => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
      })
      .join("&");

    //x-www-form
    return fetch("https://api.imgflip.com/caption_image", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: bodyParams
    }).then(response => response.json());
  };
  const createMeme = new_meme_object => {
    postMemeJson(new_meme_object).then(new_meme =>
      setNewMemes([...newMemes, new_meme])
    );
  };

  return (
    <div className="App">
      <MemeContext.Provider
        value={{
          memes: memes,
          isLoading: isLoading,
          memeLimit: memeLimit,
          loadMore: loadMore,
          text0: text.text0,
          text1: text.text1,
          createMeme: createMeme,
          myMemes: newMemes
        }}
      >
        <h1>Welcome to the Meme Generator!</h1>
        <CreateMeme set_text={set_text} />
        <MyMemes />
        <hr />
        <MemeList />
      </MemeContext.Provider>
    </div>
  );
}

export default App;
