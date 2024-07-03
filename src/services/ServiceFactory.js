
import { uploadService } from "./UploadServices"


export const serviceFactory = (apiClient) => {
    return {
        uploadService: uploadService(apiClient),
    }
}