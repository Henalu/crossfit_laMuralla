import { configureStore } from "@reduxjs/toolkit";
import isSignedIn from "../features/isSignedIn";

export const store = configureStore({
  reducer: {
    isSignedIn
  }
})