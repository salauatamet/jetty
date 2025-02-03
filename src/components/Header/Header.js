import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { LuSearch } from "react-icons/lu";
import { LuUser } from "react-icons/lu";

function Header() {
  return (
    <Navbar fixed="top" className="header pl-15 pr-15">
      <Container className="navbar">
        <Navbar.Brand href="/" className="logo">
          Jolta
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="menu_item">
            <LuSearch/>
            <a href="/">Найти курьера</a>
          </Navbar.Text>
          <Navbar.Text className="menu_item ml-30">
            <LuUser/>
            <a href="https://jolta.kz/ru/account">Личный кабинет</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
