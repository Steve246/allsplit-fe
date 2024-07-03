import { upload } from "@testing-library/user-event/dist/upload";
import { useState } from "react";
import { useDependency } from "../../../shared/hook/UseDependency";


const UseAppUpload = (props) => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // jaga2 kalau perlu loading

    const {uploadService} = useDependency()


    const onPostFile = async (file) => {
      console.log("Masuk Filenya ke onPostFile")
      setIsLoading(true);


      try {

        const response = await uploadService.postUpload(file)

        if (response.responseMessage === "Success") {
          // setShowCard(false)
          console.log("Berhasil diupload ")
        } else {
          console.log("Gagal upload file")
        }
      }
        
      finally {
        setIsLoading(false)
      }


    }

    const handleFileChange = event => {
      const file = event.target.files[0];
      setUploadedFile(file);
    //   onUpdateFile(file);
    };


    return {
        uploadedFile,
        setUploadedFile,
        handleFileChange,
        onPostFile,
        isLoading
    }
}

export default UseAppUpload;
