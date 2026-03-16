import Head from "next/head";
import Home from "../components/Home/Home";
import ScrollToTop from "../components/ScrollToTop";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Haresh Gir | Lead Frontend Developer</title>
      </Head>
      <ScrollToTop />
      <Home />
    </>
  );
}
