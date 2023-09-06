import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "modern-normalize/modern-normalize.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";
import { BrowserRouter } from "react-router-dom";
import { Global } from "./styles/Global.js";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
          <Global />
          <ToastContainer autoClose={1800} />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </>
);
