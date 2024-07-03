export const uploadService = ({doPostForm}) => {
    const postUpload = async (file) => {
        try {
            // Create a new FormData object
            const formData = new FormData();
            
            // Append the file to the FormData object with the key 'file'
            formData.append('file', file);
            
            // Use the doPost function with the FormData object
            return await doPostForm({
                url: '/image',
                data: formData,
            });
        } catch (e) {
            throw e;
        }
    };

    return { postUpload };
}
