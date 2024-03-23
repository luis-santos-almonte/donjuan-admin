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

import CategoriesCreate from "components/Modals/CategoriesCreate";

function Categories() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <CategoriesCreate isOpen={modalOpen} toggle={toggleModal} />
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="d-flex">
                <CardTitle tag="h4">Categorias</CardTitle>
                <div className="update ml-auto">
                  <Button className="btn-round" color="primary" onClick={toggleModal}>
                    Crear Categoria
                  </Button>
                </div>
              </CardHeader>

              <CardBody>
                <Table responsive striped>
                  <thead className="text-primary">
                    <tr>
                      <th>Nombre</th>
                      <th>Habitación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Silla</td>
                      <td>Interiores</td>
                    </tr>
                    <tr>
                      <td>Mesa de noche</td>
                      <td>Dormitorio</td>
                    </tr>
                    <tr>
                      <td>Mueble</td>
                      <td>Sala</td>
                    </tr>
                    <tr>
                      <td>Silla plastica</td>
                      <td>Exteriores</td>
                    </tr>
                    <tr>
                      <td>Utencilios</td>
                      <td>Cocina</td>
                    </tr>
                    <tr>
                      <td>Decoraciones</td>
                      <td>Interiores</td>
                    </tr>
                    <tr>
                      <td>Silla</td>
                      <td>Interiores</td>
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

export default Categories;
