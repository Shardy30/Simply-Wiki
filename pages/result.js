import Head from "next/head";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Result() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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
              <h1 className="content-name-title">Content Title</h1>
              <h3 className="content-name-type">Simplified Summary</h3>
              <h3 className="content-name-type">Explained Like I'm 5</h3>
            </div>
            <div className="content-header-links">
              <a
                className="content-link"
                target="_blank"
                href="<%= wiki_link %>"
              >
                <img className="content-icon" src="link.svg" alt="link icon" />
                Article Link
              </a>
              <a className="content-link" href="/">
                <img className="content-icon" src="arrow.svg" alt="link icon" />
                Home
              </a>
            </div>
          </div>
          <div className="content-body">
            A Song of Ice and Fire is a series of fantasy novels written by
            George R.R. Martin. The books tell the story of a world called
            Westeros, where seven noble families fight for control of the Iron
            Throne. The main characters are members of these families, and they
            must battle against each other as well as against magical creatures
            and dark forces. The first book in the series is called A Game of
            Thrones, and it introduces readers to the world of Westeros. In this
            book, we meet the Stark family, who are lords in the North; the
            Lannisters, who are wealthy rulers in the West; and the Targaryens,
            who were once kings but have been exiled from Westeros. We also meet
            other characters such as Daenerys Targaryen, a young woman with
            three dragons; Jon Snow, a bastard son of Ned Stark; and Tyrion
            Lannister, a dwarf with a sharp wit. The books follow these
            characters as they fight for power in Westeros. They must face off
            against each other in battles both physical and political, while
            also dealing with threats from outside forces such as White Walkers
            (mysterious creatures made of ice) and dragons. Along their journey
            they discover secrets about their pasts that could change everything
            they thought they knew about themselves and their world. A Song of
            Ice and Fire has become very popular since its first book was
            published in 1996. It has been adapted into an award-winning
            television show called Game of Thrones which has gained millions of
            fans around the world. The series is still ongoing with five books
            released so far, with two more planned for release in 2021 and 2022
            respectively.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
