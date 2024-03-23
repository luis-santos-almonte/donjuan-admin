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
import ProductsCreate from "components/Modals/ProductsCreate";

function Products() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <ProductsCreate isOpen={modalOpen} toggle={toggleModal} />
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="d-flex">
                <CardTitle tag="h4">Productos</CardTitle>
                <div className="update ml-auto">
                  <Button className="btn-round" color="primary" onClick={toggleModal}>
                    Crear Producto
                  </Button>
                </div>
              </CardHeader>

              <CardBody>
                <Table responsive striped>
                  <thead className="text-primary">
                    <tr>
                      <th>Descripcion</th>
                      <th>Categoria</th>
                      <th className="text-right">Cantidad</th>
                      <th className="text-right">Precio Unitario</th>
                      <th className="text-right">ITBIS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Silla Caoba</td>
                      <td>Silla / Comedor</td>
                      <td className="text-right">15</td>
                      <td className="text-right">$7,500.00</td>
                      <td className="text-right">0.2%</td>
                    </tr>
                    <tr>
                      <td>Mesa madera negra</td>
                      <td>Mesa de noche / Dormitorio</td>
                      <td className="text-right">13</td>
                      <td className="text-right">$10,500.00</td>
                      <td className="text-right">0.2%</td>
                    </tr>
                    <tr>
                      <td>Mueble blanco</td>
                      <td>Mueble / Sala</td>
                      <td className="text-right">15</td>
                      <td className="text-right">$13,500.00</td>
                      <td className="text-right">0.17%</td>
                    </tr>
                    <tr>
                      <td>Silla plastica</td>
                      <td>Silla / Exteriores</td>
                      <td className="text-right">15</td>
                      <td className="text-right">$7,500.00</td>
                      <td className="text-right">0.2%</td>
                    </tr>
                    <tr>
                      <td>Sarten anti-adherente</td>
                      <td>Utencilios / Cocina</td>
                      <td className="text-right">15</td>
                      <td className="text-right">$3,400.00</td>
                      <td className="text-right">0.1%</td>
                    </tr>
                    <tr>
                      <td>Maceta porcelana blanca</td>
                      <td>Decoraciones / Interiores</td>
                      <td className="text-right">15</td>
                      <td className="text-right">$4,000.00</td>
                      <td className="text-right">0.2%</td>
                    </tr>
                    <tr>
                      <td>Silla Sedro</td>
                      <td>Silla / Comedor</td>
                      <td className="text-right">15</td>
                      <td className="text-right">$5,500.00</td>
                      <td className="text-right">0.25%</td>
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

export default Products;
