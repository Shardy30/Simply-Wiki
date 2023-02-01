import Head from "next/head";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Error() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SimplyWiki - Wikipedia Made Simple</title>
      </Head>
      <div class="header-container">
        <img src="logo.png" alt="SimplyWiki Logo" class="header-logo-image" />
        <img
          src="logo-text.svg"
          alt="SimplyWiki Logo"
          class="header-logo-text"
        />
        <h2 class="header-subtext">Wikipedia Made Simple.</h2>
      </div>
      <div class="info-container info-container-1">
        <p class="info-paragraph info-paragraph-1">
          We could not simplify the specified wikipedia article. Please ensure
          the provided link is correct. Otherwise, please try again at another
          time.
          <br />
          <br />
          <i>Note: Only English Wikipedia pages are supported at this time.</i>
        </p>
        <Link className="content-link" style={{"margin-bottom": "50px"}} href="/"><img class="content-icon" src="arrow.svg" alt="link icon" /> Home</Link>
          
      </div>
      <Footer />
    </>
  );
}
