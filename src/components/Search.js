import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from "react-bootstrap/InputGroup";
import "macro-css";
import { SlSocialDropbox } from "react-icons/sl";
import { SlDocs } from "react-icons/sl";
import { SlRocket } from "react-icons/sl";
import { SlTrash } from "react-icons/sl";
import { SlPlus } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";

function Search() {
  return (
    <Container className="search_wrapper p-20 justify-content-md-center mb-3 g-2">
      {/* From */}
      <Row className="mb-3">
        <Col md>
          <Col md={12}>
            <p>Откуда</p>
          </Col>
          <FloatingLabel
            controlId="searchForm.ControlFrom"
            label="Выберите страну"
          >
            <Form.Select aria-label="Выберите страну">
              <option>Казахстан</option>
              <option value="1">Узбекистан</option>
              <option value="2">Кыргызстан</option>
              <option value="3">Россия</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md>
          <Col md={12}>
            <p>Куда</p>
          </Col>
          <FloatingLabel
            controlId="searchForm.ControlTo"
            label="Выберите страну"
          >
            <Form.Select aria-label="Выберите страну">
              <option>Узбекистан</option>
              <option value="1">Казахстан</option>
              <option value="2">Кыргызстан</option>
              <option value="3">Россия</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>

      {/* To */}
      <Row className="mb-3">
        <Col md>
          <FloatingLabel
            controlId="searchForm.ControlFrom"
            label="Выберите город"
          >
            <Form.Select aria-label="Выбрать город отправления">
              <option>Алматы</option>
              <option value="1">Ташкент</option>
              <option value="2">Бишкек</option>
              <option value="3">Москва</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel
            controlId="searchForm.ControlTo"
            label="Выберите город"
          >
            <Form.Select aria-label="Выбрать страну получения">
              <option>Ташкент</option>
              <option value="1">Алматы</option>
              <option value="2">Бишкек</option>
              <option value="3">Москва</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>

      {/* Parameters */}

      <Row className="cargo_parameters clear">
        <Col md={12}>
          <p>Параметры</p>
        </Col>
        <Col md={9} className="delivery_types d-flex justify-between">
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
        <Col md={3} className="d-flex justify-end">
          <Form>
            <Form.Check
              type="switch"
              id="pick-up-shipment"
              label="Забрать груз"
            />
            <Form.Check
              type="switch"
              label="От двери до двери"
              id="door-to-door"
            />
          </Form>
        </Col>

        <Col md={12} className="d-flex justify-between mt-3">
          <InputGroup className="mb-3 mr-20">
            <Form.Control
              placeholder="Вес"
              aria-label="Вес"
              aria-describedby="p_gross_weight"
              value={0.25}
            />
            <InputGroup.Text id="p_gross_weight">кг</InputGroup.Text>
            <div className="w100p text-center">
              <Form.Text className="mute_text" muted>
                Вес брутто
              </Form.Text>
            </div>
          </InputGroup>
          <InputGroup className="mb-3 mr-20">
            <Form.Control
              placeholder="Кол-во"
              aria-label="Кол-во"
              aria-describedby="p_quantity"
              value={1}
            />
            <InputGroup.Text id="p_quantity">шт</InputGroup.Text>
            <div className="w100p text-center">
              <Form.Text className="mute_text" muted>
                Количество
              </Form.Text>
            </div>
          </InputGroup>
          <InputGroup className="mb-3 mr-20">
            <Form.Control
              placeholder="Ширина"
              aria-label="Ширина"
              aria-describedby="p_width"
              value={10}
            />
            <InputGroup.Text id="p_width">см</InputGroup.Text>
            <div className="w100p text-center">
              <Form.Text className="mute_text" muted>
                Ширина
              </Form.Text>
            </div>
          </InputGroup>
          <InputGroup className="mb-3 mr-20">
            <Form.Control
              placeholder="Высота"
              aria-label="Высота"
              aria-describedby="p_height"
              value={10}
            />
            <InputGroup.Text id="p_height">см</InputGroup.Text>
            <div className="w100p text-center">
              <Form.Text className="mute_text" muted>
                Высота
              </Form.Text>
            </div>
          </InputGroup>
          <InputGroup className="mb-3 mr-20">
            <Form.Control
              placeholder="Глубина"
              aria-label="Глубина"
              aria-describedby="p_depth"
              value={10}
            />
            <InputGroup.Text id="p_depth">см</InputGroup.Text>
            <div className="w100p text-center">
              <Form.Text className="mute_text" muted>
                Глубина
              </Form.Text>
            </div>
          </InputGroup>
          <InputGroup className="mb-3 mr-20">
            <Form.Control
              placeholder="Общий объем"
              aria-label="Общий объем"
              aria-describedby="p_total_volume"
              value={0.0685}
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
          <Col md={12} className="d-flex justify-center mt-3">
            <Button className="submit_btn mr-20" size="lg">
              <span>
                <SlMagnifier /> Искать
              </span>
            </Button>
          </Col>
        </div>
      </Row>
    </Container>
  );
}

export default Search;
