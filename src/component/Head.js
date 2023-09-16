import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appslice";
import { useEffect, useState } from "react";
import { getSuggestedQuery } from "@testing-library/react";
import { Youtube_suggestion_api } from "../config";

const Head=()=>{
    const [searchquery, setSearchquery]=useState("");
  
    const dispatch=useDispatch();
    const togglemenuhandler=()=>{
        dispatch(toggleMenu());
    }

    const [suggestion, setSuggestion]=useState([]);
  // making api call
useEffect(()=>{
  const timer=setTimeout(()=>getSearchSuggestion(), 200);

  return ()=>{
    clearTimeout(timer);
  }
}, [searchquery]);

const getSearchSuggestion=async()=>{
    // console the searchqurey to see the how api call is begin made 
    console.log(searchquery);
    const data= await fetch(Youtube_suggestion_api+searchquery);
    const json= await data.json();
    setSuggestion(json[1]);
}

 

  


    return (
        <div className="grid grid-flow-col  p-5 shadow-lg">
            <div className="flex items-center col-span-1">
                <img 
                onClick={()=>togglemenuhandler()}
                className="h-10 w-auto cursor-pointer"
                alt="hamburger-icon" src="https://www.svgrepo.com/show/312300/hamburger-menu.svg" />
                <img
                className="h-6 w-auto ml-4"  
                alt="youtube logo" src="data:image/jpeg;base64,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" />
            </div>
           

           <div>
           <div className="col-span-10">
            <input className="w-8/12 p-2 border border-slate-900 rounded-s-3xl" type="text" 
                value={searchquery} onChange={(e)=>setSearchquery(e.target.value)}
            />
            <button className="border border-slate-900 p-2 rounded-e-3xl bg-slate-100">Search</button>
           </div>

           <div className="fixed bg-white  p-3 w-[21rem] rounded-md shadow-sm">
            <ul>
            { suggestion.map(s=><li key={s} className="hover:bg-gray-100">{s}</li>)}
                
             
            </ul>
         </div>

         </div>
         
         



           <div  className="col-span-1 ">
            <img
            className="h-10 w-auto "
             alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />

           </div>

          

        </div>
    )
}

export default Head;