import { useEffect , useState} from "react";
import { Youtube_api } from "../config";
import Videocard from "./Videocard";

const Videocontainer=()=>{
   
    const [video, setVideo]=useState([]);

    useEffect(()=>{
    getvideo();
    }, [])

    const  getvideo=async()=>{
        const data=await fetch(Youtube_api);
        const json=await data.json();
        console.log(json.items[0]);
        setVideo(json.items);
    }
    return (
        <div className=" grid grid-cols-3 gap-x-1 gap-y-7">
       
      {
        video.map((arrelement)=><Videocard info={arrelement} key={arrelement.id}  />)
      }
    
    </div>
    
    
    )
}

export default Videocontainer;