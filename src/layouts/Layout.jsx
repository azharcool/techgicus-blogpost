import React from "react";
import Header from "./../components/Header";
import Nav from "./../components/Nav";

import Footer from "./../components/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "../components/styled/global.styled";

function Layout(props) {
  return (
    <div className="App">
      <Header title="Techgicus Blogpost" />

      <Container isMarginB>
        <Nav {...props} />

        {/*All Routing*/}
        <Outlet />
      </Container>

      <Footer />
    </div>
  );
}

export default Layout;
