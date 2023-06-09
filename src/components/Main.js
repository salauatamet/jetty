import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "macro-css";

function Main() {
  return (
    <Container className="main">
      <Row>
        <Col>
          <h1 className="text-center">
            Поиск курьера с нашей <span>Jetty</span>
          </h1>
          <p className="text-center">
            Экономьте на доставке посылок и документов по Казахстану.
          </p>
          <p className="text-center">Только проверенные курьерские службы.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
