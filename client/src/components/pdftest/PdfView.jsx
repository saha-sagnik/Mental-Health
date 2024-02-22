import React from 'react'
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDF from "./PDF";

const ViewPdf = () => {
  return (
    <div className='flex justify-center h-full items-center'>
    <PDFViewer style={{width:1500, height:700, display:"flex"}}>
        <PDF />
      </PDFViewer>
    </div>
  )
}

export default ViewPdf;