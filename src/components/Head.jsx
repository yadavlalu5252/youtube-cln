import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {toggleMenu} from "../utils/appSlice";

const Head = () => {
    
    const dispatch = useDispatch();
    const toggleMenuHandeler = () => {
        dispatch(toggleMenu());
    }
    
    return (
        <div className="grid grid-flow-col m-2 p-5 shadow-lg text-center items-center bg-white">
            <div className="flex col-span-1 cursor-pointer">
                <GiHamburgerMenu  className="h-8 "
                onClick={()=>toggleMenuHandeler()}
                />
                <img src="https://img.favpng.com/24/10/0/youtube-premium-logo-png-favpng-gydaJGF28XSHPNpyCsymNv8RM.jpg" alt="yt-logo" 
                className="h-8 mx-2" />
            </div>
            <div className="col-span-10 text-center">
                <input type="text" className="w-3/4 border border-gray-400 rounded-sm rounded-l-full p-2" />
                <button className="border border-gray-400  rounded-r-full py-2 px-5  bg-gray-200">🔍</button>
            </div>
            <div className="h-8 col-span-1">
                <FaUser />
            </div>
        </div>
    )
}

export default Head;
