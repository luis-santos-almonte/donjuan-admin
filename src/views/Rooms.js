import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

import RoomsCreate from "components/Modals/RoomsCreate";

function Rooms() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <RoomsCreate isOpen={modalOpen} toggle={toggleModal} />
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="d-flex">
                <CardTitle tag="h4">Habitaciones</CardTitle>
                <div className="update ml-auto">
                  <Button className="btn-round" color="primary" onClick={toggleModal}>
                    Crear Habitacion
                  </Button>
                </div>
              </CardHeader>

              <CardBody>
                <Table responsive striped>
                  <thead className="text-primary">
                    <tr>
                      <th>Nombre</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Interiores</td>
                    </tr>
                    <tr>
                      <td>Dormitorio</td>
                    </tr>
                    <tr>
                      <td>Sala</td>
                    </tr>
                    <tr>
                      <td>Exteriores</td>
                    </tr>
                    <tr>
                      <td>Cocina</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Rooms;
