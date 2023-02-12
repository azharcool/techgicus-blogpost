import React from "react";
import Header from "./../components/Header";
import Nav from "./../components/Nav";

import Footer from "./../components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="App">
      <Header title="Techgicus Blogpost" />
      <Nav />

      {/*All Routing*/}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
