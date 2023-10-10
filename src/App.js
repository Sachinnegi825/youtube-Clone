import "./App.css";
import { Provider } from "react-redux";
import Header from "./components/Header"
import Body from "./components/Body"
import store from "./utils/store";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer"
import SearchVideos from "./components/SearchVideos";


const appRouter=createBrowserRouter([
  {
     path:'/',
     element:<Body/>,
     children:[
      {
        path:'/',
        element:<MainContainer/>
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


function App() {
  return (
    <Provider store={store}>
          <div >

               <Header/>
              <RouterProvider router={appRouter}/>
            </div>     
    </Provider>
    
  );
}

export default App;
