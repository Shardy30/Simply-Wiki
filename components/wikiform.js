import Router from 'next/router'
import { useState } from 'react'


const WikiForm = () => {
  const [wLink, setWLink] = useState("");
  const [sType, setSType] = useState("simple_summary");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the action for submitting the form
    Router.push({
      pathname: '/result',
      query: { w_link: wLink, s_type: sType },
    });
  };

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
