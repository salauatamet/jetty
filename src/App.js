import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Search from "./components/Search";

function App() {
  return (
    <div>
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
      </Container>
    </div>
  );
}

export default App;
