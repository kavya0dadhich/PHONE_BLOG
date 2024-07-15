import React from "react";
import Sidebar from "./components/sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 col-sm-12 bg_color1 borderR">
          <Sidebar />
        </div>
        <div className="col-md-10 col-sm-12 vh bg_color2 border border-white text-black">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
