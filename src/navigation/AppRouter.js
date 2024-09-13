import AppUpload from "../shared/components/uploadImage/AppUpload";

import { Routes, Route } from 'react-router-dom';

import UploadPage from "../features/UploadPage/uploadPage";
import Multistep from "../features/ResultPage/resultPage";

import CopyTextPage from "../features/CopyTextPage/copyText";


// TODO: main page depan (termasuk buat upload)

// TODO: page buat buy-me cofee

// TODO: page buat complain / suggesgion

// TODO: page buat nampilin hasil scan dari API ML (Kayak form gtu lah)

// {
//     "menuName" : "lasagna", 
//     "menuPrice": "230000", 
//     "assignTo": "Steven", 
//     "bankType": "BCA", 
//     "bankNumber": "544467890" 
// },

const AppRouter = () => {
    return (
    <Routes>
        {/* <Route path="/" element={<SingleUploadImage />} /> */}
        {/* <Route index element={<AppUpload/>}/> */}
        {/* <Route path="/front-page" element={<UploadPage/>}/> */}

        <Route index element={<UploadPage/>}/>
        <Route path="/result-page" element={<Multistep/>}/>
        <Route path="/copy-page" element={<CopyTextPage/>}/>
    </Routes>
    );
  }
  
  export default AppRouter;