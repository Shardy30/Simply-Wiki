import Head from "next/head";
import Footer from "@/components/footer";

export default function Home() {
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
        <img src="logo-text.svg" alt="SimplyWiki Logo" class="header-logo-text" />
        <h2 class="header-subtext">Wikipedia Made Simple.</h2>
    </div>
    <Footer/>
    </>
  );
}
