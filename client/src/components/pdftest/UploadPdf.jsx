import React, { useEffect, useState } from "react";
import { PDFViewer, BlobProvider } from "@react-pdf/renderer";
import { ref, uploadBytes } from "firebase/storage";
import PDF from "./PDF";
import { storage } from "../../constants/firebase";

const UploadPdf = () => {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfBlob, setPdfBlob] = useState(null);

  return (
    <div>
      <h1>PDF Generation and Upload Example</h1>
      <button onClick={generatePdfBlob} disabled={isGeneratingPdf}>
        {isGeneratingPdf ? "Generating PDF..." : "Generate PDF and Upload"}
      </button>
      {pdfBlob && (
        <div>
          <h2>Preview:</h2>
          <PDFViewer width="600" height="800">
            <iframe
              title="PDF Preview"
              style={{ width: "100%", height: "100%" }}
              src={URL.createObjectURL(pdfBlob)}
            />
          </PDFViewer>
        </div>
      )}
    </div>
  );
};

export default UploadPdf;
