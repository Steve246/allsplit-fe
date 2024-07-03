import axios from "axios"


// import {authHeaderInterceptor} from "../shared/interceptors/AuthHeaderInterceptor"

export const clientInstance = axios.create({
    baseURL : process.env.REACT_APP_BASE_URL
});


// clientInstance.interceptors.request.use(authHeaderInterceptor);