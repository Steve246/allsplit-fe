export const apiClientFactory = (client) => {
    const doPost = async ({url = '', data = null}) => {
        // console.log(data, url);
        try {
            const response = await client.post(url, data);
            return response.data
        } catch (e) {
            throw e;
        }
    }

    const doGet = async ({url  = '', data = null}) => {
        console.log('data',data);
        try {
            const response = await client.get(url, data);
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    const doPostForm = async ({ url = '', data = null }) => {
        try {
            // Initialize headers
            const headers = {};

            // Check if data is an instance of FormData
            if (data instanceof FormData) {
                headers['Content-Type'] = 'multipart/form-data';
            }

            // Make the POST request with the given data and headers
            const response = await client.post(url, data || {}, { headers });
            return response.data;
        } catch (e) {
            throw e;
        }
     };
  

   

    return {doPostForm, doGet, doPost}
}