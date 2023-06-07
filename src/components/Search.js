import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Select from 'react-select';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "macro-css";
import { SlSocialDropbox } from "react-icons/sl";
import { SlDocs } from "react-icons/sl";
import { SlRocket } from "react-icons/sl";
import { SlTrash } from "react-icons/sl";
import { SlPlus } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";

// const selectableOptions = [
//   { value: 'Adam', label: 'Adam Geoffrey' },
//   { value: 'Jane', label: 'Jane Hibbard' },
//   { value: 'Anabelle', label: 'Anabelle Einstein' },
//   { value: 'Zeus', label: 'Zeus McQueen' }
// ]

const url = "https://api.github.com/search/users?q=John&per_page=5";

function Search() {

  useEffect(() =>{
    const postService = async () => {
      try {
        const response = await axios.post('https://meteor-api.onrender.com/api/v1/get-service-cost',
          {
            delivery: {
              cityId: "49265227",
              cityName: "Челябинск",
              countryCode: "RU",
              index: "140012",
              regionCode: "74"
            },
            parcel: {
              height: 20,
              length: 20,
              quantity: 1,
              weight: 5,
              width: 20
            },
            pickup: {
              cityId: "49694102",
              cityName: "Москва",
              countryCode: "RU",
              index: "140012",
              regionCode: "77"
            },
            selfDelivery: true,
            selfPickup: false,
          }
        );
        console.log("response", response);
      } catch (error) {
        console.error(error);
      }
    }
    postService();
  }, [])

  // const [weight, setWeight] = useState('');
  // const [width, setWidth] = useState('');
  // const [height, setHeight] = useState('');
  // const [length, setLength] = useState('');
  // const [quantity, setQuantity] = useState('');
  // onSubmit={handleSubmit}

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
    <Form>
      <Form.Group>
        <Container className="search_wrapper p-20 justify-content-md-center mb-3 g-2">
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
              {/* <Select
                className="input-cont"
                placeholder= "Выберите страну"
                options={selectableOptions}
              /> */}
              {/* <Select aria-label="Выберите страну" name="countryfrom">
                <option >Казахстан</option>
                <option value="1">Узбекистан</option>
                <option value="2">Кыргызстан</option>
                <option value="3">Россия</option>
              </Select> */}
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
              {/* <Form.Select aria-label="Выберите страну" name="countryto">
                <option>Узбекистан</option>
                <option value="1">Казахстан</option>
                <option value="2">Кыргызстан</option>
                <option value="3">Россия</option>
              </Form.Select> */}
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
            {/* <FloatingLabel
              controlId="searchForm.ControlFromCity"
              label="Выберите город"
            >
              <Form.Select aria-label="Выбрать город отправления" name="citynamefrom">
                <option>Алматы</option>
                <option value="1">Ташкент</option>
                <option value="2">Бишкек</option>
                <option value="3">Москва</option>
              </Form.Select>
            </FloatingLabel> */}
          </Col>
          <Col>
            <Select 
              className="input-cont"
              placeholder="Выберите город"
              options={options}
              isMulti
              noOptionsMessage={() => "name not found"}
            />
            {/* <FloatingLabel
              controlId="searchForm.ControlToCity"
              label="Выберите город"
            >
              <Form.Select aria-label="Выбрать страну получения" name="citynameto">
                <option>Ташкент</option>
                <option value="1">Алматы</option>
                <option value="2">Бишкек</option>
                <option value="3">Москва</option>
              </Form.Select>
            </FloatingLabel> */}
          </Col>
        </Row>

        {/* Parameters */}

        <Row className="cargo_parameters clear">
          <Col className='col-md-12'>
            <p>Параметры</p>
          </Col>
          <Col className="col-md-9 delivery_types d-flex justify-between">
            <Button className="active_btn mr-20" size="md">
              <span>
                <SlSocialDropbox /> Посылка/Груз
              </span>
            </Button>
            <Button className="default_btn mr-20" size="md">
              <span>
                <SlDocs /> Документы
              </span>
            </Button>
            <Button className="default_btn" size="md">
              <span>
              <SlRocket /> По городу
              </span>
            </Button>
          </Col>
          <Col className="col-md-3">
          <Form.Check
            type="switch"
            id="pick-up-shipment"
            label="Забрать груз"
            checked={true}
            name="selfdelivery"
            readOnly
          />
          <Form.Check
            type="switch"
            label="От двери до двери"
            id="door-to-door"
            checked={false}
            readOnly
          />
          </Col>
          {/* onChange={(e) => setWeight(e.target.value)} */}
          <Col className="col-md-12 d-flex justify-between mt-3">
            <InputGroup name="weight" className="mb-3 mr-20">
              <Form.Control
                type="number"
                id="weight"
                placeholder="Вес"
                aria-label="Вес"
                aria-describedby="p_gross_weight"
                defaultValue="5"
              />
              <InputGroup.Text id="p_gross_weight">кг</InputGroup.Text>
              <div className="w100p text-center">
                <Form.Text className="mute_text" muted>
                  Вес брутто
                </Form.Text>
              </div>
            </InputGroup>
            {/* onChange={(e) => setQuantity(e.target.value)} */}
            <InputGroup name="quantity" className="mb-3 mr-20">
              <Form.Control
                type="number"
                id="quantity"
                placeholder="Кол-во"
                aria-label="Кол-во"
                aria-describedby="p_quantity"
                defaultValue="1"
              />
              <InputGroup.Text id="p_quantity">шт</InputGroup.Text>
              <div className="w100p text-center">
                <Form.Text className="mute_text" muted>
                  Количество
                </Form.Text>
              </div>
            </InputGroup>
            {/* onChange={(e) => setWidth(e.target.value)} */}
            <InputGroup name="width" className="mb-3 mr-20">
              <Form.Control
                type="number"
                id="width"
                placeholder="Ширина"
                aria-label="Ширина"
                aria-describedby="p_width"
                defaultValue="10"
              />
              <InputGroup.Text id="p_width">см</InputGroup.Text>
              <div className="w100p text-center">
                <Form.Text className="mute_text" muted>
                  Ширина
                </Form.Text>
              </div>
            </InputGroup>
            {/* onChange={(e) => setHeight(e.target.value)} */}
            <InputGroup name="height" className="mb-3 mr-20">
              <Form.Control
                type="number"
                id="height"
                placeholder="Высота"
                aria-label="Высота"
                aria-describedby="p_height"
                defaultValue="20"
              />
              <InputGroup.Text id="p_height">см</InputGroup.Text>
              <div className="w100p text-center">
                <Form.Text className="mute_text" muted>
                  Высота
                </Form.Text>
              </div>
            </InputGroup>
            {/* onChange={(e) => setLength(e.target.value)} */}
            <InputGroup name="length" className="mb-3 mr-20">
              <Form.Control
                type="number"
                id="length"
                placeholder="Глубина"
                aria-label="Глубина"
                aria-describedby="p_depth"
                defaultValue="10"
              />
              <InputGroup.Text id="p_depth">см</InputGroup.Text>
              <div className="w100p text-center">
                <Form.Text className="mute_text" muted>
                  Глубина
                </Form.Text>
              </div>
            </InputGroup>
            <InputGroup className="mb-3 mr-20" name="totalvolume">
              <Form.Control
                type="number"
                id="total_volume"
                placeholder="Общий объем"
                aria-label="Общий объем"
                aria-describedby="p_total_volume"
                defaultValue="0,0685"
              />
              <InputGroup.Text id="p_total_volume">м3</InputGroup.Text>
              <div className="w100p text-center">
                <Form.Text className="mute_text" muted>
                  Общий объем, m3
                </Form.Text>
              </div>
            </InputGroup>
            <Button className="delete_btn mb-3 mr-5" variant="link">
              <SlTrash /> <span>Удалить</span>
            </Button>
            <Button className="add_more_btn mb-3" variant="link">
              <SlPlus /> <span>Добавить</span>
            </Button>
          </Col>
          <div className="submit">
            <Col className="col-md-12 d-flex justify-center mt-3">
              <Button className="submit_btn mr-20" size="lg">
                <span>
                  <SlMagnifier /> Искать
                </span>
              </Button>
            </Col>
          </div>
        </Row>
      </Container>
      </Form.Group>
    </Form>
  );
}

export default Search;
