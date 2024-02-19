import React, { useEffect, useState } from "react";
import { PDFViewer, BlobProvider } from "@react-pdf/renderer";
import { ref, uploadBytes } from "firebase/storage";
import PDF from "./PDF";
import { storage } from "../../constants/firebase";

const UploadPdf = () => {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfBlob, setPdfBlob] = useState(null);

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }

    const generatePdfBlob =async () => {
      const pdfAsBlob =await new Blob([<PDF />], { type: "pdf" });
      setPdfBlob(pdfAsBlob);
      console.log(pdfAsBlob);
    };

    useEffect(() => {
        if (pdfBlob) {
          const pdfRef = ref(storage, `pdf/${getCurrentDate()}.pdf`);
          uploadBytes(pdfRef, pdfBlob).then(() => {
            alert("PDF uploaded successfully");
          }).catch((error) => {
            console.error("Error uploading PDF:", error);
          });
        }
      }, [pdfBlob]);


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
