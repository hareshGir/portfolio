import Head from "next/head";
import Projects from "../components/Projects/Projects";
import ScrollToTop from "../components/ScrollToTop";

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>Projects | Haresh Gir</title>
      </Head>
      <ScrollToTop />
      <Projects />
    </>
  );
}
