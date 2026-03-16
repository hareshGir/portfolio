import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pre from "../components/Pre";
import "../index.css";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

export default function App({ Component, pageProps }) {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Pre load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
