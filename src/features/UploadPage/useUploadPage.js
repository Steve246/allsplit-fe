import { useState } from "react";
import { useDependency } from "../../shared/hook/UseDependency";
import { useNavigate } from "react-router";



const UseUploadPage = (props) => {

    const [isLoading, setIsLoading] = useState(false); 
    // jaga2 kalau perlu loading
    const [file, setFile] = useState('');

    const {uploadService} = useDependency()
    const navigate = useNavigate();
    const [submit, setSubmit] = useState(0);

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        setFile(file)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(submit + 1);
        // console.log(errorEmail, email, name, password)

        onPostUploadFile(file)
        
    }

    const onPostUploadFile = async (file) => {
        console.log("Masuk onPostUploadFile")
        setIsLoading(true)
        try {
            const response = await uploadService.postUpload(file)

            
            if (response.message === 200) {
                console.log("Ini berhasil --> ",response);
                // navigate('/result-page', {replace : true})

                navigate('/result-page', { replace: true, state: { data: response.data, message: response.message } });

            } else {
                console.log("ini failed -->", response)
            }
        }
        finally {
            setIsLoading(false)
        }
    }


    return {
        file,
        isLoading,
        handleChangeFile,
        handleSubmit,
    }

}


export default UseUploadPage;