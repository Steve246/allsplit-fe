export const uploadService = ({doPostForm, doPost}) => {
    const postUpload = async (file) => {
        try {
            // Create a new FormData object
            const formData = new FormData();
            
            // Append the file to the FormData object with the key 'file'
            formData.append('file', file);
            
            // Use the doPost function with the FormData object
            return await doPostForm({
                url: '/image_ocr',
                data: formData,
            });
        } catch (e) {
            throw e;
        }
    };


    const postTransaction = async(data) => {
        try {
            return await doPost({
                url: '/convertDataToText',
                data: data,
            });
        } catch (e) {
            throw e;
        }
    }

    return { postUpload, postTransaction };
}
