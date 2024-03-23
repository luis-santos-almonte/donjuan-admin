import React, { useState, useEffect } from "react";
import axios from "axios";
import { ALLPRODUCT_URL, ALLCATEGORY_URL, ALLROOM_URL } from "config";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  //   CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Modal,
  ModalBody,
} from "reactstrap";

const ProductsCreate = ({ isOpen, toggle }) => {
  const [categories, setCategories] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(ALLCATEGORY_URL);
        setCategories(response.data);
      } catch (error) {
        console.error("Error al obtener los productos", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle} size="xl">
        <ModalBody>
          <div className="content">
            <Row>
              <Col>
                <Card className="card-user">
                  <CardHeader className="d-flex">
                    <CardTitle tag="h5">Crear producto</CardTitle>
                    <div className="update ml-auto">
                      <Button
                        className="btn btn-outline-danger btn-sm"
                        onClick={toggle}
                      >
                        <i className="nc-icon nc-simple-remove"></i>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col className="pr-1" md="10">
                          <FormGroup>
                            <label>Descripcion del producto</label>
                            <Input placeholder="Producto" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Input
                          type="select"
                          value={categories}
                          onChange={(e) => setCategories(e.target.value)}
                        >
                          <option value="">Seleccione una categoría</option>
                          {categories.map((categories) => (
                            <option
                              key={categories.id}
                              value={categories.id_categoria}
                            >
                              {categories.descripcion}
                            </option>
                          ))}
                        </Input>
                        <Col className="pr-1" md="5">
                          <FormGroup>
                            <label>Habitacion</label>
                            <Input placeholder="Categoria" type="select" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-1" md="5">
                          <FormGroup>
                            <label>Cantidad</label>
                            <Input placeholder="Cantidad" type="number" />
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md="5">
                          <FormGroup>
                            <label>Precio Unitario</label>
                            <Input
                              placeholder="Precio Unitario"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-1" md="10">
                          <FormGroup>
                            <label>Descripcion general</label>
                            <Input type="textarea" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <div className="update ml-auto mr-auto">
                          <Button
                            className="btn-round"
                            color="primary"
                            type="submit"
                          >
                            Crear producto
                          </Button>
                        </div>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ProductsCreate;
