import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Select from 'react-select';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "macro-css";
import { LuBox } from "react-icons/lu";
import { LuFileBox } from "react-icons/lu";
import { LuZap } from "react-icons/lu";
import { LuTrash } from "react-icons/lu";
import { LuPlusCircle } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";

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

        {/* Parameters */}

        <Row className="cargo_parameters clear">
          <Col className='col-md-12'>
            <p>Параметры</p>
          </Col>
          <Col className="col-md-9 delivery_types">
            <Tabs
              defaultActiveKey="parcel-cargo"
              id="fill-tab-parameters"
              className="mb-3"
              fill
            >
              <Tab eventKey="parcel-cargo" title={<span><LuBox/>Посылка/Груз</span>}>
                {/* onChange={(e) => setWeight(e.target.value)} */}
                <Col className="col-md-12 d-flex justify-between mt-3">
                  <InputGroup name="weight-parcel-cargo" className="mr-20">
                    <Form.Control
                      type="text"
                      id="weight-parcel-cargo"
                      placeholder="Вес"
                      aria-label="Вес"
                      aria-describedby="p-gross_weight-parcel-cargo"
                      defaultValue="5"
                    />
                    <InputGroup.Text id="p-gross_weight-parcel-cargo">кг</InputGroup.Text>
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Вес брутто
                      </Form.Text>
                    </div>
                  </InputGroup>
                  {/* onChange={(e) => setQuantity(e.target.value)} */}
                  <InputGroup name="quantity-parcel-cargo" className="mr-20">
                    <Form.Control
                      type="text"
                      id="quantity-parcel-cargo"
                      placeholder="Кол-во"
                      aria-label="Кол-во"
                      aria-describedby="p-quantity-parcel-cargo"
                      defaultValue="1"
                    />
                    <InputGroup.Text id="p-quantity-parcel-cargo">шт</InputGroup.Text>
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Количество
                      </Form.Text>
                    </div>
                  </InputGroup>
                  {/* onChange={(e) => setWidth(e.target.value)} */}
                  <InputGroup name="width-parcel-cargo" className="mr-20">
                    <Form.Control
                      type="text"
                      id="width-parcel-cargo"
                      placeholder="Ширина"
                      aria-label="Ширина"
                      aria-describedby="p-width-parcel-cargo"
                      defaultValue="10"
                    />
                    <InputGroup.Text id="p-width-parcel-cargo">см</InputGroup.Text>
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Ширина
                      </Form.Text>
                    </div>
                  </InputGroup>
                  {/* onChange={(e) => setHeight(e.target.value)} */}
                  <InputGroup name="height-parcel-cargo" className="mr-20">
                    <Form.Control
                      type="text"
                      id="height-parcel-cargo"
                      placeholder="Высота"
                      aria-label="Высота"
                      aria-describedby="p-height-parcel-cargo"
                      defaultValue="20"
                    />
                    <InputGroup.Text id="p-height-parcel-cargo">см</InputGroup.Text>
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Высота
                      </Form.Text>
                    </div>
                  </InputGroup>
                  {/* onChange={(e) => setLength(e.target.value)} */}
                  <InputGroup name="length-parcel-cargo" className="mr-20">
                    <Form.Control
                      type="text"
                      id="length-parcel-cargo"
                      placeholder="Глубина"
                      aria-label="Глубина"
                      aria-describedby="p-depth-parcel-cargo"
                      defaultValue="10"
                    />
                    <InputGroup.Text id="p-depth-parcel-cargo">см</InputGroup.Text>
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Глубина
                      </Form.Text>
                    </div>
                  </InputGroup>
                  <InputGroup name="totalvolume">
                    <Form.Control
                      type="text"
                      id="total-volume-parcel-cargo"
                      placeholder="Общий объем"
                      aria-label="Общий объем"
                      aria-describedby="p-total-volume-parcel-cargo"
                      defaultValue="0,0685"
                      disabled
                    />
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Общий объем, m3
                      </Form.Text>
                    </div>
                  </InputGroup>
                </Col>
              </Tab>
              <Tab eventKey="documentation" title={<span><LuFileBox/>Документы</span>}>
              <Col className="col-md-12 d-flex justify-between mt-3">
                  <InputGroup name="weight-documentation" className="mr-20">
                    <Form.Control
                      type="text"
                      id="weight-documentation"
                      placeholder="Вес"
                      aria-label="Вес"
                      aria-describedby="p-gross-weight-documentation"
                      defaultValue="0.25"
                    />
                    <InputGroup.Text id="p-gross-weight-documentation">кг</InputGroup.Text>
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Вес брутто
                      </Form.Text>
                    </div>
                  </InputGroup>
                  {/* onChange={(e) => setQuantity(e.target.value)} */}
                  <InputGroup name="quantity-documentation" className="mr-20">
                    <Form.Control
                      type="text"
                      id="quantity-documentation"
                      placeholder="Кол-во"
                      aria-label="Кол-во"
                      aria-describedby="p-quantity-documentation"
                      defaultValue="1"
                    />
                    <InputGroup.Text id="p-quantity-documentation">шт</InputGroup.Text>
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Количество
                      </Form.Text>
                    </div>
                  </InputGroup>
                  {/* onChange={(e) => setWidth(e.target.value)} */}
                  <InputGroup name="width-documentation" className="mr-20">
                    <Form.Control
                      type="text"
                      id="width-documentation"
                      placeholder="Ширина"
                      aria-label="Ширина"
                      aria-describedby="p-width-documentation"
                      defaultValue="10"
                      disabled
                    />
                    <InputGroup.Text id="p-width-documentation">см</InputGroup.Text>
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Ширина
                      </Form.Text>
                    </div>
                  </InputGroup>
                  {/* onChange={(e) => setHeight(e.target.value)} */}
                  <InputGroup name="height-documentation" className="mr-20">
                    <Form.Control
                      type="text"
                      id="height-documentation"
                      placeholder="Высота"
                      aria-label="Высота"
                      aria-describedby="p-height-documentation"
                      defaultValue="20"
                      disabled
                    />
                    <InputGroup.Text id="p-height-documentation">см</InputGroup.Text>
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Высота
                      </Form.Text>
                    </div>
                  </InputGroup>
                  {/* onChange={(e) => setLength(e.target.value)} */}
                  <InputGroup name="length-documentation" className="mr-20">
                    <Form.Control
                      type="text"
                      id="length-documentation"
                      placeholder="Глубина"
                      aria-label="Глубина"
                      aria-describedby="p-depth-documentation"
                      defaultValue="10"
                      disabled
                    />
                    <InputGroup.Text id="p-depth-documentation">см</InputGroup.Text>
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Глубина
                      </Form.Text>
                    </div>
                  </InputGroup>
                </Col>
              </Tab>
              <Tab eventKey="around-town" title={<span><LuZap/>По городу</span>} disabled>
              <Col className="col-md-12 d-flex justify-between mt-3">
                  <InputGroup name="weight-around-town" className="mr-20">
                    <Form.Control
                      type="text"
                      id="weight-around-town"
                      placeholder="Вес"
                      aria-label="Вес"
                      aria-describedby="p-gross-weight-around-town"
                      defaultValue="5"
                    />
                    <InputGroup.Text id="p-gross-weight-around-town">кг</InputGroup.Text>
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Вес брутто
                      </Form.Text>
                    </div>
                  </InputGroup>
                  {/* onChange={(e) => setQuantity(e.target.value)} */}
                  <InputGroup name="quantity-around-town" className="mr-20">
                    <Form.Control
                      type="text"
                      id="quantity-around-town"
                      placeholder="Кол-во"
                      aria-label="Кол-во"
                      aria-describedby="p-quantity-around-town"
                      defaultValue="1"
                    />
                    <InputGroup.Text id="p-quantity-around-town">шт</InputGroup.Text>
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Количество
                      </Form.Text>
                    </div>
                  </InputGroup>
                  {/* onChange={(e) => setWidth(e.target.value)} */}
                  <InputGroup name="width-around-town" className="mr-20">
                    <Form.Control
                      type="text"
                      id="width-around-town"
                      placeholder="Ширина"
                      aria-label="Ширина"
                      aria-describedby="p-width-around-town"
                      defaultValue="10"
                    />
                    <InputGroup.Text id="p-width-around-town">см</InputGroup.Text>
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Ширина
                      </Form.Text>
                    </div>
                  </InputGroup>
                  {/* onChange={(e) => setHeight(e.target.value)} */}
                  <InputGroup name="height-around-town" className="mr-20">
                    <Form.Control
                      type="text"
                      id="height-around-town"
                      placeholder="Высота"
                      aria-label="Высота"
                      aria-describedby="p-height-around-town"
                      defaultValue="20"
                    />
                    <InputGroup.Text id="p-height-around-town">см</InputGroup.Text>
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Высота
                      </Form.Text>
                    </div>
                  </InputGroup>
                  {/* onChange={(e) => setLength(e.target.value)} */}
                  <InputGroup name="length-around-town" className="mr-20">
                    <Form.Control
                      type="text"
                      id="length-around-town"
                      placeholder="Глубина"
                      aria-label="Глубина"
                      aria-describedby="p-depth-around-town"
                      defaultValue="10"
                    />
                    <InputGroup.Text id="p-depth-around-town">см</InputGroup.Text>
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Глубина
                      </Form.Text>
                    </div>
                  </InputGroup>
                  <InputGroup name="total-volume-around-town">
                    <Form.Control
                      type="text"
                      id="total-volume-around-town"
                      placeholder="Общий объем"
                      aria-label="Общий объем"
                      aria-describedby="p-total-volume-around-town"
                      defaultValue="0,0685"
                      disabled
                    />
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Общий объем, m3
                      </Form.Text>
                    </div>
                  </InputGroup>
                </Col>
              </Tab>
            </Tabs>


            {/* <Button className="active_btn mr-20" size="md">
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
            </Button> */}
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
            <Row className="d-flex justify-evenly">
              <Button className="delete_btn mt-3 mr-5" variant="link">
                <LuTrash /> <span>Удалить</span>
              </Button>
              <Button className="add_more_btn mt-3" variant="link">
                <LuPlusCircle /> <span>Добавить</span>
              </Button>
            </Row>
          </Col>
          <div className="submit">
            <Col className="col-md-12 d-flex justify-center mt-3">
              <Button className="submit_btn mr-20" size="lg">
                <span>
                  <LuSearch /> Искать
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
