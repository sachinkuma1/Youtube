import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appslice";
import { useSearchParams } from "react-router-dom";
import Commentsection from "./Comment";
const Watchpage=()=>{
   
    const [searchparams]=useSearchParams();
    const id=searchparams.get("v");

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    }, []);

    return (
        <div className="flex flex-col">
        <h1  className="p-3">
           <iframe width="700" height="350"
            src={"https://www.youtube.com/embed/"+id}
             title="YouTube video player" 
             Frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullscreen></iframe>
        </h1>
      <Commentsection/>
        </div>
    )
}

export default Watchpage;