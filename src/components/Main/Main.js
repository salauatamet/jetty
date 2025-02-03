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
            <span>JolTa</span> – курьеры, которым можно доверять
          </h1>
          <p className="text-center">
          С JolTa легко найти курьера для доставки по всему Казахстану.
          </p>
          <p className="text-center pb-4">Быстрая отправка, безопасная доставка и только проверенные службы. Экономьте время и деньги вместе с нами!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
