import Lottie from "lottie-react";
import loading from './assets/loadingAsset.json'
import "/Users/ditaarindagladiola/Documents/Steven Data/Code/allsplit-fe/src/shared/components/loading/loadingAsset.css"

const LoadingScreen = () => {
    return (
    // <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 h-48">
    //     <div className="bg-whitesmoke flex flex-col justify-center items-center h-48 w-72 border-2 border-gray-400 rounded-md p-6">
    //         <Lottie animationData={loading} loop={true} style={{ width: '100px', height: '100px' }} />
    //         <p className="mt-4 text-primary-500">Please wait!</p>
    //     </div>
    // </div>


        <div className="overlay">
            <div className="modal">
                <Lottie animationData={loading} loop={true} style={{ width: '100px', height: '100px' }} />
                <p className="text">Please wait!</p>
            </div>
        </div>
    )
}



export default LoadingScreen