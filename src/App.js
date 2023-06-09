import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Search from "./components/Search/Search";
import Resaults from "./components/Results/Results";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Header />
        </Row>
      </Container>
      <Container className="content_wrapper">
        <Row>
          <Main />
        </Row>
        <Row>
          <Search />
        </Row>
        <Row>
          <Resaults />
        </Row>
      </Container>
    </>
  );
}

export default App;
