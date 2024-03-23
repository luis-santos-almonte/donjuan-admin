import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  // CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Modal,
  ModalBody,
} from "reactstrap";

const CategoriesCreate = ({ isOpen, toggle }) => {
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
                        <Col className="pr-1" md="8">
                          <FormGroup>
                            <label>Descripcion de la categoria</label>
                            <Input placeholder="Categoria" type="text" />
                          </FormGroup>
                        </Col>
                        <Col className="pl-1" md="4">
                          <FormGroup>
                            <label>Habitación</label>
                            <Input placeholder="Habitacion" type="select" />
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

export default CategoriesCreate;
