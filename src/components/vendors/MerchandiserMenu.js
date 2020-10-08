import React, { useState } from "react";
import Navbar from "./Navbar";
import { Document, Page, pdfjs } from "react-pdf";
import menuPDF from "./MerchandisingMenu.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function MerchandiserMenu() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }


  return (
    <>
        <Navbar />
        <div className="pdf-container" >
          <Document
            className="pdf-doc"
            file={menuPDF}
            options={{ workerSrc: "/pdf.worker.js" }}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page className="pdf-page" pageNumber={pageNumber} height="600" />
          </Document>
          <div className="pdf-nav" >
            <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>◄</button>
            <p>Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}</p>
            <button type="button" disabled={pageNumber >= numPages} onClick={nextPage} >►</button>
          </div>
        </div>
        
    </>
  )
  
}

export default MerchandiserMenu

// react-pdf documentation:
// https://github.com/wojtekmaj/react-pdf

// TODO:
// add functionality to change size
// add opportunity to download file