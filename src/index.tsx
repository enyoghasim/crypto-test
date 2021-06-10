import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

if (process.env.NODE_ENV !== "production") {
  // reportWebVitals();
}
