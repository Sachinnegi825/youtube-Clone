import {configureStore} from "@reduxjs/toolkit"
import SidebarSlice from "./sidebarSlice";
import SearchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store=configureStore({
    reducer:{
        sidebar:SidebarSlice,
        search:SearchSlice,
        chat:chatSlice,
    },

})

export default store; 