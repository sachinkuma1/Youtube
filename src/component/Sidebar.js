
import { useSelector } from "react-redux";

const Sidebar=()=>{
const isopen=useSelector((store)=>store.app.ismenuopen);
if(!isopen) return null;

    return   (
        <div className="w-48 flex flex-col gap-6 p-4">
      
        <ul className="flex flex-col gap-3">
        <li>Home</li>
        <li>Shorts</li>
        
        </ul>
            <ul >
            <h1 className="font-bold">Subscription</h1>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
           

           <ul className="flex flex-col gap-3 ">
           <li>Library</li>
        <li>History</li>
        <li>Watch Later</li>
        <li>Liked videos</li>
        <li>Your videos</li>
           </ul>
        </div>
    )
}
export default Sidebar;