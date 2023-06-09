import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./Header";
import Select from 'react-select';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import "macro-css";

const url = "https://api.github.com/search/users?q=John&per_page=5";

function Resaults() {

    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    const [options, setOptions] = useState([""]);

    useEffect(() => {
        const getData = async () => {
        const arr = [];
        await axios.get(url).then((res) => {
            let result = res.data.items;
            result.map((user) => {
            return arr.push({value: user.login, label: user.login});
            });
            setOptions(arr)
        });
        };
        getData();
    }, []);

    return (
        <Container>
            <Row>
                <Header />
            </Row>
            <Row className="resaults_wrapper p-20 m-0 d-flex justify-content-md-center align-start mb-3 g-2">
                <Col md={6} className="mb-2">
                    <Button onClick={toggleShowA} className="resaults_filter_cc">
                        KZ, Алматы - KZ, Алматы
                    </Button>
                </Col>
                <Col md={6} className="mb-2">
                    <Button onClick={toggleShowB} className="resaults_filter_cc">
                        1 x Посылка - 25 кг
                    </Button>
                </Col>
                <Col md={12} className="m-0">
                    <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Header>
                            <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-auto"
                            alt="exit"
                            />
                        </Toast.Header>
                        <Toast.Body>
                            {/* From */}
                            <Row className="mb-3">
                                <Col>
                                    <Col className='col-md-12'>
                                    <p>Откуда</p>
                                    </Col>
                                    <Select 
                                        className="input-cont"
                                        placeholder="Выберите страну"
                                        options={options}
                                        isMulti
                                        noOptionsMessage={() => "name not found"}
                                    />
                                </Col>
                                <Col>
                                    <Col className='col-md-12'>
                                    <p>Куда</p>
                                    </Col>
                                    <Select 
                                        className="input-cont"
                                        placeholder="Выберите страну"
                                        options={options}
                                        isMulti
                                        noOptionsMessage={() => "name not found"}
                                    />
                                </Col>
                            </Row>

                            {/* To */}
                            <Row className="mb-3">
                                <Col>
                                    <Select 
                                    className="input-cont"
                                    placeholder="Выберите город"
                                    options={options}
                                    isMulti
                                    noOptionsMessage={() => "name not found"}
                                    />
                                </Col>
                                <Col>
                                    <Select 
                                    className="input-cont"
                                    placeholder="Выберите город"
                                    options={options}
                                    isMulti
                                    noOptionsMessage={() => "name not found"}
                                    />
                                </Col>
                            </Row>
                        </Toast.Body>
                    </Toast>
                </Col>
                <Col md={12} className="m-0">
                    <Toast onClose={toggleShowB} show={showB} animation={false}>
                        <Toast.Header>
                            <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-auto"
                            alt="exit"
                            />
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </Container>
    );
}

export default Resaults;
