import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";
import inputSlice from "./inputSlice";
const myntraStore=configureStore({
  reducer:{
    items:itemsSlice.reducer,
    fetchStatus:fetchStatusSlice.reducer,
    bag:bagSlice.reducer,
    input:inputSlice.reducer
  }
})
export default myntraStore;