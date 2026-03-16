import Head from "next/head";
import About from "../components/About/About";
import ScrollToTop from "../components/ScrollToTop";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Haresh Gir</title>
      </Head>
      <ScrollToTop />
      <About />
    </>
  );
}
