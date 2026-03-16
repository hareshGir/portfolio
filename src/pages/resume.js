import Head from "next/head";
import ResumeNew from "../components/Resume/ResumeNew";
import ScrollToTop from "../components/ScrollToTop";

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>Resume | Haresh Gir</title>
      </Head>
      <ScrollToTop />
      <ResumeNew />
    </>
  );
}
