import Head from "next/head";
import Footer from "@/components/footer";
import WikiForm from "@/components/wikiform";
import React, { useState, useEffect } from "react";
import Router from "next/router";

export default function Home() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SimplyWiki - Wikipedia Made Simple</title>
      </Head>
      <div className="header-container">
        <img src="logo.png" alt="SimplyWiki Logo" className="header-logo-image" />
        <img
          src="logo-text.svg"
          alt="SimplyWiki Logo"
          className="header-logo-text"
        />
        <h2 className="header-subtext">Wikipedia Made Simple.</h2>
      </div>
      <WikiForm/>
      <div className="info-container info-container-1">
        <h2 className="info-header info-header-1">What does it do?</h2>
        <p className="info-paragraph info-paragraph-1">
          This tool is designed to make Wikipedia articles more accessible to a
          wider audience. It does this by analyzing the text of Wikipedia
          articles and simplifying complex phrases and vocabulary, making it
          easier for readers to understand the key concepts and ideas presented
          in the article.
        </p>
      </div>

      <div className="info-container info-container-2">
        <h2 className="info-header info-header-2">How does it work?</h2>
        <p className="info-paragraph info-paragraph-2">
          The tool utilizes the advanced language capabilities of OpenAI GPT-3
          to analyze the text of Wikipedia articles and identify areas that may
          be difficult for some readers to understand. This could include
          complex vocabulary, technical terms, or long sentences with multiple
          clauses.
          <br />
          <br />
          Once these complex areas are identified, the tool uses GPT-3's natural
          language generation capabilities to rephrase these sections in
          simpler, more accessible language. This process is done in a way that
          preserves the integrity of the original content and meaning, while
          making it easier for readers with varying backgrounds and reading
          abilities to understand.
        </p>
      </div>
      <Footer />
    </>
  );
}
