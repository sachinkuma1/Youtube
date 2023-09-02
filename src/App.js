import "./App.css"
import Head from "./component/Head";
import Body from "./component/Body";
import store from "./utils/store";
import {Provider} from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./component/Maincontainer";
import Watchpage from "./component/Watchpage";

const approuter=createBrowserRouter([
  {
    path:"/", 
    element:<Body/>, 
    children:[
      {
        path:"/", 
        element:<Maincontainer/>
      }, 

      {
        path:"/watch", 
        element:<Watchpage/>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
    <div >
   <Head />
   <RouterProvider router={approuter}/>
     

    </div>
    </Provider>
  );
}

export default App;
