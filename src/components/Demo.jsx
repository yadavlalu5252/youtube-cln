import { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
    const [number, setNumber] = useState(0);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    console.log("Rendring");

    // const prime = findNthPrime(number);
    const prime = useMemo(()=>findNthPrime(number),[number]);
    // useMemo - it is memoizing the heavy operation


    return (
        <div className={"m-4 p-2 w-96 h-96 border border-black " + (isDarkTheme && "bg-black text-white")}>
            <div>
                <button className="m-10 p-2 bg-violet-500" onClick={()=> setIsDarkTheme(!isDarkTheme)}>Toggle</button>
            </div>
            <div>
                <input
                className="border border-black w-72 text-black"
                type="number" value={number} onChange={(e)=> setNumber(e.target.value)} />
            </div>
            <div>
                <h1>nth Prime : {prime}</h1>
            </div>
        </div>
    )
};

export default Demo;