import "@/styles/globals.css";
import { useState } from "react";
import AppContext from "../AppContext";

export default function App({ Component, pageProps }) {
  const [wikiTitle, setWikiTitle] = useState("");
  const [wikiURL, setWikiURL] = useState("");
  const [wikiSummary, setWikiSummary] = useState("");
  const[wikiType, setWikiType] = useState("explained_like_5");
  return(
  <AppContext.Provider
    value={{
      wikiTitle: wikiTitle,
      setWikiTitle: setWikiTitle,
      wikiURL: wikiURL,
      setWikiURL: setWikiURL,
      wikiType: wikiType,
      setWikiType: setWikiType,
      wikiSummary: wikiSummary,
      setWikiSummary: setWikiSummary,
    }}
  >
    <Component {...pageProps} />
  </AppContext.Provider>
  );
}
