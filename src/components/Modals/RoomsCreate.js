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

import Icons from "views/Icons";

const RoomsCreate = ({ isOpen, toggle }) => {
  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle} size="lg">
        <ModalBody>
          <div className="content">
            <Row>
              <Col>
                <Card className="card-user">
                  <CardHeader className="d-flex">
                    <Icons></Icons>
                    <CardTitle tag="h5">Crear habitacion</CardTitle>
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
                        <Col className="pr-1" >
                          <FormGroup>
                            <label>Descripcion de la habitacion</label>
                            <Input placeholder="Habitacion" type="text" />
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
                            Crear habitacion
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

export default RoomsCreate;
