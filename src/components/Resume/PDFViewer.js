import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PDFViewer({ width }) {
  return (
    <Document
      file="/Haresh_Gir_Resume.pdf"
      className="d-flex justify-content-center"
    >
      <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
    </Document>
  );
}

export default PDFViewer;
