import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./AppSlice";
import searchSlice from "./SearchSlice";
import ChatSlice from "./ChatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: ChatSlice,
  },
});

export default store;
