import { upload } from "@testing-library/user-event/dist/upload";
import { useState } from "react";


const UseAppUpload = (props) => {
    const [uploadedFile, setUploadedFile] = useState(null);
  
    const handleFileChange = event => {
      const file = event.target.files[0];
      setUploadedFile(file);
    //   onUpdateFile(file);
    };


    return {
        uploadedFile,
        setUploadedFile,
        handleFileChange
    }
}

export default UseAppUpload;
