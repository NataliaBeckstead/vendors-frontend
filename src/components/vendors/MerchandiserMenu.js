import React, { useState } from "react";
import Navbar from "./Navbar";
import { Document, Page, pdfjs } from "react-pdf";
import menuPDF from "./MerchandisingMenu.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function MerchandiserMenu() {

  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


  return (
    <>
        <Navbar />
        <div className="pdf-container" >
          <Document 
            file={menuPDF}
            options={{ workerSrc: "/pdf.worker.js" }}
            onLoadSuccess={onDocumentLoadSuccess}
            >
            {Array.from(new Array(numPages), (el, index) => (
            <Page className="pdf-file" key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
    </>
  )
  
}

export default MerchandiserMenu