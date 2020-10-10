import React, { useState } from "react";
import Navbar from "./Navbar";
import { Document, Page, pdfjs } from "react-pdf";
import { ZoomInOutlined, ZoomOutOutlined, DownloadOutlined, StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';
import menuPDF from "./MerchandisingMenu.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function MerchandiserMenu() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [size, setSize] = useState(1);

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
            <Page className="pdf-page" pageNumber={pageNumber} scale={size} />
          </Document>
          <div className="pdf-nav" >
            <div className="pdf-pages">
              <button className="page-nav-button" type="button" disabled={pageNumber <= 1} onClick={previousPage}><StepBackwardOutlined className="icon" /></button>
              <p>Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}</p>
              <button className="page-nav-button" type="button" disabled={pageNumber >= numPages} onClick={nextPage} ><StepForwardOutlined className="icon" /></button>
            </div>
            <button type="button" onClick={() => {if (size > 0.3) {setSize(size - 0.2)}}}  ><ZoomOutOutlined className="icon" /></button>
            <button type="button" onClick={() => {if (size < 2.5) {setSize(size + 0.2)}}}><ZoomInOutlined className="icon" /></button>
            <button type="button" ><a href={menuPDF} download="Grocery Merchandising MENU 10.7.20.pdf"><DownloadOutlined className="icon" /></a></button>
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