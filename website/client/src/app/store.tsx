import { configureStore } from "@reduxjs/toolkit";
import emailSentSlice from "../features/emailSentSlice";
import mobileMenuSlice from "../features/mobileMenuSlice";

export const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuSlice,
    sentEmail: emailSentSlice,
  }
})