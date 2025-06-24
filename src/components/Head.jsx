import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import {cacheResults} from "../utils/searchSlice"

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  /* 
     searchCache = {
    "iphone": ["iphone 11", "iphone 14", "iphone pro max"]
    }
    searchQuery = iphone
    */

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggetion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggetion = async () => {
    console.log("API call - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(cacheResults({
        [searchQuery]: json[1],
    }));
  };


  const toggleMenuHandeler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col m-2 p-5 shadow-lg">
      <div className="flex col-span-1 cursor-pointer">
        <GiHamburgerMenu className="h-8" onClick={() => toggleMenuHandeler()} />
        <img
          src="https://img.favpng.com/24/10/0/youtube-premium-logo-png-favpng-gydaJGF28XSHPNpyCsymNv8RM.jpg"
          alt="yt-logo"
          className="h-8 mx-2"
        />
      </div>
      <div className="col-span-10 text-center">
        <div>
          <input
            type="text"
            className="w-3/4 border border-gray-400 rounded-sm rounded-l-full p-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400  rounded-r-full py-2 px-5  bg-gray-200">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-5 w-[36rem] shadow-lg rounded-lg mt-1 mx-16 z-50">
            <ul className="text-left">
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100"
                  onMouseDown={() => {
                    setSearchQuery(s);
                    setShowSuggestions(false);
                  }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="h-8 col-span-1">
        <FaUser />
      </div>
    </div>
  );
};

export default Head;
