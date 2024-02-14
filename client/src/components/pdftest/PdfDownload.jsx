import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDF from "./PDF";

function PdfDownload() {
  return (
    <div className="w-full h-full flex justify-center">
      <PDFDownloadLink document={<PDF />} fileName="myfirstpdf.pdf">
        {({ loading, url, error, blob }) =>
          loading ? (
            <button>Loading Document ...</button>
          ) : (
            <button>Download now!</button>
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