import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { persistedStore, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      <App />
    </PersistGate>
  </Provider>
);
