import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDF from "./PDF";
import { useEffect, useState } from "react";
import { ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { storage } from "../../constants/firebase";

function PdfDownload() {
  // const [pdfBlob, setPdfBlob] = useState(null);

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }

  const upload = (pdfBlob) => {
    if (pdfBlob) {
      console.log(pdfBlob);
      const pdfRef = ref(storage, `${getCurrentDate()}.pdf`);
      uploadBytes(pdfRef, pdfBlob).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          console.log(url);
        });
      });
    }
  };
  

  return (
    <div className="w-full h-full flex justify-center">
      <PDFDownloadLink document={<PDF />} fileName="myfirstpdf.pdf">
        {({ loading, url, error, blob }) =>
          loading ? (
            <button>Loading Document ...</button>
          ) : (<>
           {
            upload(blob)
            // setPdfBlob(blob)
           }
            <button>Download now!</button>
            </>
          )
        }
      </PDFDownloadLink>

      {/* <PDFViewer style={{width:500, height:700, display:"flex"}}>
        <PDF />
      </PDFViewer> */}
    </div>
  );
}

export default PdfDownload;