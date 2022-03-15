import { ThemeProvider } from "@mui/material";
import * as React from "react";
import { Provider as StoreProvider } from "react-redux";
import { createStore } from "redux";
import { SignIn } from "./pages";

import rootReducer from "./stores/reducers";
import theme from "./theme/index";

const store = createStore(rootReducer);

export default function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        {/* Hide navigation */}
        <SignIn />
      </ThemeProvider>
    </StoreProvider>
  );
}
