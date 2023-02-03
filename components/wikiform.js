import Router from "next/router";
import { useState, useEffect, useRef, useContext } from "react";
import AppContext from "../AppContext";

const WikiForm = () => {
  const context = useContext(AppContext);
  let {
    wikiTitle,
    setWikiTitle,
    wikiURL,
    setWikiURL,
    wikiType,
    setWikiType,
    wikiSummary,
    setWikiSummary,
  } = context;
  const [checker, setChecker] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    form_ref.current.setAttribute("disabled", true); // Disable form
    simplify_button.current.innerHTML = "Simplifying...";
    setLoading(true);
    setChecker(1);
  };

  const handlePageChange = (status) => {
    if (status === 200) {
      Router.push("/result");
    } else {
      Router.push("/error");
    }
  };

  useEffect(() => {
    if (checker === 0) return;
    async function fetchData() {
      const data = { w_link: wikiURL, s_type: wikiType };
      const res = await fetch("/api/wiki", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      const { title, summary } = json.result;
      setWikiTitle(title);
      setWikiSummary(summary);
      const status = res.status;
      handlePageChange(status);
    }
    fetchData();
  }, [checker]);

  const simplify_button = useRef(null);
  const form_ref = useRef(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <form onSubmit={handleSubmit} ref={form_ref} disabled={true}>
        <div className="input-container">
          <input
            placeholder="https://en.wikipedia.org/wiki/__"
            name="w_link"
            className="link-input"
            type="url"
            value={wikiURL}
            onChange={(e) => setWikiURL(e.target.value)}
            required
          />
          <button
            ref={simplify_button}
            type="submit"
            id="submit-button"
            className="simplify-button"
          >
            Simplify Article
          </button>
        </div>
        <div className="radio-input-container">
          <div className="radio-container-1">
            <input
              id="simple_summary"
              name="s_type"
              type="radio"
              value="simple_summary"
              checked={wikiType === "simple_summary"}
              onChange={(e) => setWikiType(e.target.value)}
            />
            <label htmlFor="simple_summary">Simplified Summary</label>
            <br />
          </div>
          <div className="radio-container-2">
            <input
              id="explained_like_5"
              name="s_type"
              type="radio"
              value="explained_like_5"
              checked={wikiType === "explained_like_5"}
              onChange={(e) => setWikiType(e.target.value)}
            />
            <label htmlFor="explained_like_5">Explained Like I'm 5</label>
            <br />
          </div>
        </div>
      </form>
      {loading ? (
        <div className="loader-container">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default WikiForm;
