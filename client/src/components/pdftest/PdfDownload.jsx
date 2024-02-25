import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDF from "./PDF";
import { useEffect, useState } from "react";
import { ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { storage } from "../../constants/firebase";
import axios from 'axios';

function PdfDownload() {
  // const [pdfBlob, setPdfBlob] = useState(null);
  const [setUrl,url] = useState(null);

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }

  const sendpdf =async (url) => {

    const response = await axios.post('http://localhost:3000/sendmail',{
      link:url
    });

    if(response.data?.sent){
      alert("sent");
    }
    else if(response.data?.error){
      alert("error");
    }
        // const link = document.createElement('a');
        // link.href = response;
        // link.download = "hii";

        // document.body.appendChild(link);

        // link.click();

        // link.parentNode.removeChild(link);
  };

  const getdownload =async ()=>{
    console.log("clicked")
    getDownloadURL(ref(storage, 'myfirstpdf.pdf'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
    console.log(url);
    sendpdf(url);
  })
  .catch((error) => {
    // Handle any errors
    console.log(error);
  });
  }

  const upload = (pdfBlob) => {
    if (pdfBlob) {
      console.log(pdfBlob);
      const pdfRef = ref(storage, `${getCurrentDate()}.pdf`);
      uploadBytes(pdfRef, pdfBlob).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          console.log("url",url);
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
      <div
        onClick={()=>{
          getdownload();
        }}
      >send pdf</div>
    </div>
  );
}

export default PdfDownload;