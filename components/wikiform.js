import Router from 'next/router'
import { useState, useEffect } from 'react'


const WikiForm = () => {
  const [wLink, setWLink] = useState("");
  const [sType, setSType] = useState("simple_summary");
  const [checker, setChecker] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setChecker(1);
  };

  const handlePageChange = (status) => {
    if (status === 200) {
      Router.push("/result");
    } else {
      Router.push("/error");
    }
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    if(checker === 0) return;
    async function fetchData() {
      const res = await fetch("/api/wiki");
      const json = await res.json();
      const status = res.status;
      setData(json);
      handlePageChange(status);
      console.log(json);
      console.log(status);
    }
    fetchData();
  }, [checker]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          placeholder="https://en.wikipedia.org/wiki/__"
          name="w_link"
          className="link-input"
          type="url"
          value={wLink}
          onChange={(e) => setWLink(e.target.value)}
          required
        />
        <button type="submit" id="submit-button" className="simplify-button">
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
            checked={sType === "simple_summary"}
            onChange={(e) => setSType(e.target.value)}
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
            checked={sType === "explained_like_5"}
            onChange={(e) => setSType(e.target.value)}
          />
          <label htmlFor="explained_like_5">Explained Like I'm 5</label>
          <br />
        </div>
      </div>
    </form>
  );
};

export default WikiForm;
