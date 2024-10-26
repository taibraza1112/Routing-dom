import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";

function Layout() {
  return (
    <>
      <Navbar />
      <Container className="my-4">
        <Outlet />
      </Container>
    
    </>
  );
}

export default Layout;

