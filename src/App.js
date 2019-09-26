import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import Routing from "routers/appRouter";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "redux/reducers";
import { middleware } from "redux/middleware";

const store = createStore(rootReducer, applyMiddleware(...middleware));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div style={{ padding: 0, margin: 0 }}>
          {/* <StoreScreen /> */}
          <Routing />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
