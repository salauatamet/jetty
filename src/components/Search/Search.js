import React, { useState } from 'react'; // Removed useEffect
import { useNavigate } from 'react-router-dom'; // Import useNavigate
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
import { kazakhstanCities } from '../../services/mockCourierApi'; // fetchMockCourierServices removed as it's not used here anymore

// Removed commented out code: selectableOptions, url, postService useEffect, old state for options, old getData useEffect

function Search() { // Removed props: setCourierResults, setIsLoading, setSearchError, appIsLoading
  const navigate = useNavigate();

  const [parcels, setParcels] = useState([{ id: Date.now(), weight: '5', width: '10', height: '20', length: '10', quantity: '1' }]);
  const [pickupCity, setPickupCity] = useState(null);
  const [deliveryCity, setDeliveryCity] = useState(null);
  const [isDoorToDoor, setIsDoorToDoor] = useState(false);

  const handleParcelChange = (id, field, value) => {
    setParcels(parcels.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const handleAddParcel = () => {
    setParcels([...parcels, { id: Date.now(), weight: '', width: '', height: '', length: '', quantity: '1' }]);
  };

  const handleDeleteParcel = (id) => {
    setParcels(parcels.filter(p => p.id !== id));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Logic to construct queryParams from state (pickupCity, deliveryCity, parcels[0], isDoorToDoor)
    const firstParcel = parcels[0] || {}; // Ensure firstParcel is an object even if parcels is empty
    const queryParams = {
      from: pickupCity ? pickupCity.value : '', // Using .value for city code
      to: deliveryCity ? deliveryCity.value : '', // Using .value for city code
      weight: firstParcel.weight || '',
      quantity: firstParcel.quantity || '',
      width: firstParcel.width || '',
      height: firstParcel.height || '',
      length: firstParcel.length || '',
      isDoorToDoor: isDoorToDoor.toString(),
      // Assuming deliveryType is always "parcel" for now from this form
      deliveryType: "parcel"
    };

    // Filter out empty parameters
    const filteredQueryParams = Object.fromEntries(
      Object.entries(queryParams).filter(([_, value]) => value !== '')
    );

    const queryString = new URLSearchParams(filteredQueryParams).toString();
    navigate(`/results?${queryString}`);
  };

  // Removed useEffects for logging courierResults and error


  return (
    <Form onSubmit={handleSearch}>
      <Form.Group>
        <Container className="search_wrapper p-20 justify-content-md-center mb-3 g-2">
        {/* From / To */}
        <Row className="mb-3">
          <Col md={6}> {/* Adjusted to md={6} for better spacing on medium screens */}
            <Col className='col-md-12'>
              <p>Откуда</p>
            </Col>
              <Select
                className="input-cont"
                placeholder="Выберите город"
                options={kazakhstanCities}
                value={pickupCity}
                onChange={setPickupCity}
                noOptionsMessage={() => "Город не найден"}
              />
          </Col>
          <Col md={6}> {/* Adjusted to md={6} */}
            <Col className='col-md-12'>
              <p>Куда</p>
            </Col>
            <Select
                className="input-cont"
                placeholder="Выберите город"
                options={kazakhstanCities}
                value={deliveryCity}
                onChange={setDeliveryCity}
                noOptionsMessage={() => "Город не найден"}
              />
          </Col>
        </Row>

        {/* Removed redundant second row of city selects */}

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
                {parcels.map((parcel, index) => (
                  <div key={parcel.id} className="parcel-item mb-3 p-3 border rounded">
                    {parcels.length > 1 && <h5 className="mb-2">Посылка {index + 1}</h5>}
                    <Row>
                      <Col md={12} className="d-flex flex-wrap justify-content-start"> {/* Changed to flex-wrap and justify-start */}
                        <InputGroup name={`weight-parcel-cargo-${parcel.id}`} className="mr-20 mb-2" style={{flexBasis: '150px', minWidth: '120px'}}>
                          <Form.Control
                            type="number"
                            placeholder="Вес"
                            aria-label="Вес"
                            value={parcel.weight}
                            onChange={(e) => handleParcelChange(parcel.id, 'weight', e.target.value)}
                          />
                          <InputGroup.Text>кг</InputGroup.Text>
                          <div className="w100p text-center">
                            <Form.Text className="mute_text" muted>Вес брутто</Form.Text>
                          </div>
                        </InputGroup>
                        <InputGroup name={`quantity-parcel-cargo-${parcel.id}`} className="mr-20 mb-2" style={{flexBasis: '130px', minWidth: '100px'}}>
                          <Form.Control
                            type="number"
                            placeholder="Кол-во"
                            aria-label="Кол-во"
                            value={parcel.quantity}
                            onChange={(e) => handleParcelChange(parcel.id, 'quantity', e.target.value)}
                          />
                          <InputGroup.Text>шт</InputGroup.Text>
                           <div className="w100p text-center">
                            <Form.Text className="mute_text" muted>Количество</Form.Text>
                          </div>
                        </InputGroup>
                        <InputGroup name={`width-parcel-cargo-${parcel.id}`} className="mr-20 mb-2" style={{flexBasis: '130px', minWidth: '100px'}}>
                          <Form.Control
                            type="number"
                            placeholder="Ширина"
                            aria-label="Ширина"
                            value={parcel.width}
                            onChange={(e) => handleParcelChange(parcel.id, 'width', e.target.value)}
                          />
                          <InputGroup.Text>см</InputGroup.Text>
                          <div className="w100p text-center">
                            <Form.Text className="mute_text" muted>Ширина</Form.Text>
                          </div>
                        </InputGroup>
                        <InputGroup name={`height-parcel-cargo-${parcel.id}`} className="mr-20 mb-2" style={{flexBasis: '130px', minWidth: '100px'}}>
                          <Form.Control
                            type="number"
                            placeholder="Высота"
                            aria-label="Высота"
                            value={parcel.height}
                            onChange={(e) => handleParcelChange(parcel.id, 'height', e.target.value)}
                          />
                          <InputGroup.Text>см</InputGroup.Text>
                          <div className="w100p text-center">
                            <Form.Text className="mute_text" muted>Высота</Form.Text>
                          </div>
                        </InputGroup>
                        <InputGroup name={`length-parcel-cargo-${parcel.id}`} className="mr-20 mb-2" style={{flexBasis: '130px', minWidth: '100px'}}>
                          <Form.Control
                            type="number"
                            placeholder="Глубина"
                            aria-label="Глубина"
                            value={parcel.length}
                            onChange={(e) => handleParcelChange(parcel.id, 'length', e.target.value)}
                          />
                          <InputGroup.Text>см</InputGroup.Text>
                          <div className="w100p text-center">
                            <Form.Text className="mute_text" muted>Глубина</Form.Text>
                          </div>
                        </InputGroup>
                        {index === 0 && ( // Show total volume only for the first parcel or a summary
                           <InputGroup name="totalvolume" className="mb-2" style={{flexBasis: '150px', minWidth: '120px'}}>
                            <Form.Control
                              type="text"
                              placeholder="Общий объем"
                              aria-label="Общий объем"
                              value={((parseFloat(parcels[0].width) * parseFloat(parcels[0].height) * parseFloat(parcels[0].length) * parseFloat(parcels[0].quantity)) / 1000000).toFixed(4) || ""}
                              disabled
                            />
                            <div className="w100p text-center">
                              <Form.Text className="mute_text" muted>Общий объем, m3</Form.Text>
                            </div>
                          </InputGroup>
                        )}
                      </Col>
                    </Row>
                     {parcels.length > 1 && (
                        <Button
                          variant="danger"
                          size="sm"
                          className="mt-2"
                          onClick={() => handleDeleteParcel(parcel.id)}
                          disabled={parcels.length <= 1}
                        >
                          <LuTrash /> Удалить посылку {index + 1}
                        </Button>
                      )}
                  </div>
                ))}
                 <Button variant="outline-primary" size="sm" onClick={handleAddParcel} className="mt-2">
                  <LuPlusCircle /> Добавить еще посылку
                </Button>
              </Tab>
              <Tab eventKey="documentation" title={<span><LuFileBox/>Документы</span>}>
              <Col className="col-md-12 d-flex justify-between mt-3"> {/* Assuming documents are simpler and don't need multi-add for now */}
                  <InputGroup name="weight-documentation" className="mr-20">
                    <Form.Control
                      type="number" // Changed to number
                      id="weight-documentation"
                      placeholder="Вес"
                      aria-label="Вес"
                      aria-describedby="p-gross-weight-documentation"
                      value={parcels[0]?.weight || ''} // Use first parcel's data
                      onChange={(e) => handleParcelChange(parcels[0]?.id, 'weight', e.target.value)} // Use first parcel's data
                    />
                    <InputGroup.Text id="p-gross-weight-documentation">кг</InputGroup.Text>
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Вес брутто
                      </Form.Text>
                    </div>
                  </InputGroup>
                  <InputGroup name="quantity-documentation" className="mr-20">
                    <Form.Control
                      type="number" // Changed to number
                      id="quantity-documentation"
                      placeholder="Кол-во"
                      aria-label="Кол-во"
                      aria-describedby="p-quantity-documentation"
                      value={parcels[0]?.quantity || ''} // Use first parcel's data
                      onChange={(e) => handleParcelChange(parcels[0]?.id, 'quantity', e.target.value)} // Use first parcel's data
                    />
                    <InputGroup.Text id="p-quantity-documentation">шт</InputGroup.Text>
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Количество
                      </Form.Text>
                    </div>
                  </InputGroup>
                  <InputGroup name="width-documentation" className="mr-20"> {/* Dimensions for docs are often fixed/disabled */}
                    <Form.Control
                      type="number" // Changed to number
                      id="width-documentation"
                      placeholder="Ширина"
                      aria-label="Ширина"
                      aria-describedby="p-width-documentation"
                      value={parcels[0]?.width || ''} // Use first parcel's data
                      onChange={(e) => handleParcelChange(parcels[0]?.id, 'width', e.target.value)} // Use first parcel's data
                      disabled
                    />
                    <InputGroup.Text id="p-width-documentation">см</InputGroup.Text>
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Ширина
                      </Form.Text>
                    </div>
                  </InputGroup>
                  <InputGroup name="height-documentation" className="mr-20">
                    <Form.Control
                      type="number" // Changed to number
                      id="height-documentation"
                      placeholder="Высота"
                      aria-label="Высота"
                      aria-describedby="p-height-documentation"
                      value={parcels[0]?.height || ''} // Use first parcel's data
                      onChange={(e) => handleParcelChange(parcels[0]?.id, 'height', e.target.value)} // Use first parcel's data
                      disabled
                    />
                    <InputGroup.Text id="p-height-documentation">см</InputGroup.Text>
                    <div className="w100p text-center">
                      <Form.Text className="mute_text" muted>
                        Высота
                      </Form.Text>
                    </div>
                  </InputGroup>
                  <InputGroup name="length-documentation" className="mr-20">
                    <Form.Control
                      type="number" // Changed to number
                      id="length-documentation"
                      placeholder="Глубина"
                      aria-label="Глубина"
                      aria-describedby="p-depth-documentation"
                      value={parcels[0]?.length || ''} // Use first parcel's data
                      onChange={(e) => handleParcelChange(parcels[0]?.id, 'length', e.target.value)} // Use first parcel's data
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
              {/* Removed "around-town" Tab */}
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
              <Button type="submit" className="submit_btn mr-20" size="lg" disabled={appIsLoading}>
                <span>
                  <LuSearch /> {appIsLoading ? "Идет поиск..." : "Искать"}
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
