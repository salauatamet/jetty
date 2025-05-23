import React from 'react';
// import axios from 'axios'; // Removed
// import Select from 'react-select'; // Removed
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Toast from 'react-bootstrap/Toast'; // Removed
import Button from 'react-bootstrap/Button'; // Keep for potential future use (e.g. "Order" button)
import Card from 'react-bootstrap/Card';
import "macro-css";

// const url = "https://api.github.com/search/users?q=John&per_page=5"; // Removed

function Results({ courierData, isLoading, error }) { // Accept props

    // Removed old state and useEffect
    // const [showA, setShowA] = useState(false);
    // const [showB, setShowB] = useState(false);
    // const toggleShowA = () => setShowA(!showA);
    // const toggleShowB = () => setShowB(!showB);
    // const [options, setOptions] = useState([""]);
    // useEffect(() => {
    //     const getData = async () => {
    //     const arr = [];
    //     await axios.get(url).then((res) => {
    //         let result = res.data.items;
    //         result.map((user) => {
    //         return arr.push({value: user.login, label: user.login});
    //         });
    //         setOptions(arr)
    //     });
    //     };
    //     getData();
    // }, []);

    if (isLoading) {
        return (
            <Container className="mt-3">
                <Row>
                    <Col className="text-center">
                        <p>Загрузка результатов...</p>
                    </Col>
                </Row>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="mt-3">
                <Row>
                    <Col className="text-center">
                        <p className="text-danger">Ошибка: {error || "Не удалось загрузить результаты."}</p>
                    </Col>
                </Row>
            </Container>
        );
    }

    if (!courierData || !courierData.results || courierData.results.length === 0) {
        return (
            <Container className="mt-3">
                <Row>
                    <Col className="text-center">
                        <p>Нет результатов. Введите параметры поиска и нажмите Искать.</p>
                    </Col>
                </Row>
            </Container>
        );
    }

    // Sort results by priceKZT (cheapest first)
    const sortedResults = [...courierData.results].sort((a, b) => a.priceKZT - b.priceKZT);

    return (
        <Container className="mt-3 results_container">
            {/* Removed old Toast and filter buttons section */}
            <Row className='p-0 m-0 mt-1 d-flex flex-column align-items-center'> {/* This ensures cards stack vertically */}
                {sortedResults.map((service) => (
                    <Col xs={12} md={10} lg={8} key={service.id} className="mb-3"> {/* This Col wraps the card for centering/width control */}
                        <Card className="h-100">
                          <Row noGutters className="h-100"> {/* Added h-100 to Row for consistent height if needed */}
                            <Col xs={4} sm={3} md={2} className="d-flex align-items-center justify-content-center p-2">
                              <Card.Img 
                                src={service.logoUrl || "/img/placeholder-logo-default.png"} 
                                alt={`${service.companyName} logo`} 
                                style={{ width: '100%', height: 'auto', maxHeight: '100px', objectFit: 'contain' }} // Adjusted style
                              />
                            </Col>
                            <Col xs={8} sm={9} md={10}>
                              <Card.Body className="d-flex flex-column h-100"> {/* Added h-100 to Card.Body */}
                                <Card.Title>{service.companyName}</Card.Title>
                                <Card.Text>
                                  <strong>Цена:</strong> {service.priceKZT} KZT <br />
                                  <strong>Срок доставки:</strong> {service.estimatedDeliveryDays} дней <br />
                                  {service.description}
                                </Card.Text>
                                {service.rating && (
                                  <Card.Text>
                                    <small className="text-muted">Рейтинг: {service.rating}/5</small>
                                  </Card.Text>
                                )}
                                {service.features && service.features.length > 0 && (
                                  <Card.Text>
                                    <small>Особенности: {service.features.join(', ')}</small>
                                  </Card.Text>
                                )}
                                <Button variant="primary" className="mt-auto align-self-start">Заказать</Button>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Results;
