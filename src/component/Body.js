import Sidebar from "./Sidebar";
import Maincontainer from "./Maincontainer";
const Body=()=>{
    return (
        <div  className="grid grid-cols-2">
        <Sidebar/>
        <Maincontainer/>
        </div>
    )
}
export default Body;