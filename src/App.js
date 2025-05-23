import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Search from "./components/Search/Search";
import ResultsPage from "./pages/ResultsPage"; // Import the new ResultsPage

// Removed placeholder ResultsPage component

const HomePage = () => (
  <>
    <Row> {/* Main component was in its own Row */}
      <Main />
    </Row>
    <Row> {/* Search component was in its own Row */}
      <Search /> {/* Removed props: setCourierResults, setIsLoading, setSearchError, isLoading */}
    </Row>
  </>
);

function App() {
  // Removed state variables: courierResults, isLoading, searchError
  // Removed handler functions: handleSetCourierResults, handleSetIsLoading, handleSetSearchError

  return (
    <>
      <Container fluid>
        <Row>
          <Header />
        </Row>
      </Container>
      <Container className="content_wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
