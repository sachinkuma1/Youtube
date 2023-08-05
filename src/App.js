import "./App.css"
import Head from "./component/Head";
import Body from "./component/Body";
import store from "./utils/store";
import {Provider} from "react-redux";
function App() {
  return (
    <Provider store={store}>
    <div >
   <Head />
   <Body/>
     

    </div>
    </Provider>
  );
}

export default App;
