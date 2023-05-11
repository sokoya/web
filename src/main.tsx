import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { BrowserRouter } from "react-router-dom";

import { Router } from "./App";

// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(
//     <App />
// );

ReactDOM.hydrateRoot(
    document.getElementById("root") as HTMLElement,
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );