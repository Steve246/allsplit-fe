import Lottie from "lottie-react";
import loading from './assets/loadingAsset.json'


const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center font-bold flex-col z-50">
       
            <div className="bg-whitesmoke h-48 w-48 flex justify-evenly items-center border-2 border-gray-400 rounded-md flex-col">
            <Lottie animationData={loading} loop={true} style={{width:'100px',height:'100px'}}/>
                <p className="bg-primary-500"> Please wait! </p>

               
            </div>
        </div>

    )
}

export default LoadingScreen