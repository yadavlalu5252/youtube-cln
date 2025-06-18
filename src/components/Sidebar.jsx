import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector(store=> store.app.isMenuOpen);

    if(!isMenuOpen) return null; // Early return
    return (
        <div className="p-5 shadow-lg w-1/10 border border-gray-200">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Shorts</li>
                <li>Subscription</li>
                <li>Live</li>
            </ul>
            <h1 className="font-bold pt-5">You</h1>
            <ul className="">
                <li>History</li>
                <li>Playlist</li>
                <li>Watch Later</li>
                <li>Liked Vidoes</li>
                <li>Setting</li>
            </ul>
            <h1 className="font-bold pt-5">Entertainment</h1>
            <ul>
                <li>Music</li>
                <li>Gaming</li>
                <li>News</li>
                <li>Sports</li>
                <li>Movies</li>
            </ul>
        </div>
    )
}

export default Sidebar;