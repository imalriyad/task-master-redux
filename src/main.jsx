<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Toaster } from 'react-hot-toast';
=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import App from "./App.jsx";
>>>>>>> 39efe01ad3a73a79a5e1b6f8005d59bbaa9c3f93

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
<<<<<<< HEAD
      <Toaster />
      <RouterProvider router={routes} />
=======
      <RouterProvider router={routes}>
        <App></App>
      </RouterProvider>
>>>>>>> 39efe01ad3a73a79a5e1b6f8005d59bbaa9c3f93
    </Provider>
  </React.StrictMode>
);
