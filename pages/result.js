import Head from "next/head";
import Footer from "@/components/footer";
import Link from "next/link";
import React from "react";
import AppContext from "@/AppContext";

export default function Result() {
  const { wikiTitle, wikiSummary, wikiType, wikiURL } =
    React.useContext(AppContext);
  // console.log(wikiTitle, wikiSummary, wikiType, wikiURL);
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SimplyWiki - Wikipedia Made Simple</title>
      </Head>
      <div className="header-container">
        <img
          src="logo.png"
          alt="SimplyWiki Logo"
          className="header-logo-image"
        />
        <img
          src="logo-text.svg"
          alt="SimplyWiki Logo"
          className="header-logo-text"
        />
        <h2 className="header-subtext">Wikipedia Made Simple.</h2>
      </div>
      <div className="main-body-container">
        <div className="content-container">
          <div className="content-header">
            <div className="content-header-title">
              <h1 className="content-name-title">{wikiTitle}</h1>
              {wikiType === "simple_summary" ? (
                <h3 className="content-name-type">Simplified Summary</h3>
              ) : (
                <h3 className="content-name-type">Explained Like I'm 5</h3>
              )}
            </div>
            <div className="content-header-links">
              <a className="content-link" target="_blank" href={wikiURL}>
                <img className="content-icon" src="link.svg" alt="link icon" />
                Article Link
              </a>
              <Link className="content-link" href="/">
                <img className="content-icon" src="arrow.svg" alt="link icon" />
                Home
              </Link>
            </div>
          </div>
          <div className="content-body">{wikiSummary}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
