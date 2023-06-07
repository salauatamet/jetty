import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { SlMagnifier } from "react-icons/sl";
import { SlUser } from "react-icons/sl";

function Header() {
  return (
    <Navbar fixed="top" className="header pl-15 pr-15">
      <Container className="navbar">
        <Navbar.Brand href="/" className="logo">
          Jetty
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="menu_item">
            <SlMagnifier />
            <a href="/">Найти курьера</a>
          </Navbar.Text>
          <Navbar.Text className="menu_item ml-30">
            <SlUser />
            <a href="https://jetty.kz/ru/account">Личный кабинет</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
