import "./App.css";
import { Provider } from "react-redux";
import Header from "./components/Header"
import Body from "./components/Body"
import store from "./utils/store";
import {createBrowserRouter} from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer"
import SearchVideos from "./components/SearchVideos";



const App=()=> {
  return (
    <Provider store={store}>
          <div >

               <Header/>
               <Body/>
            </div>     
    </Provider>
    
  );
}

const AppRouter=createBrowserRouter([
  {
     path:'/',
     element:<App/>,
     children:[
      {
        path:'/',
        element:<MainContainer/>,
      },
      {
        path:'watch',
        element:<WatchPage/>
      },
      {
        path:"results",
        element:<SearchVideos/>
      }
     ]
  },
])




export default AppRouter;
