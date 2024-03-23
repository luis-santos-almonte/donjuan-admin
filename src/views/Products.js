import React, { useState, useEffect } from "react";
import axios from "axios";
import { ALLPRODUCT_URL } from "config";

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
  const [productos, setProductos] = useState([]);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get(ALLPRODUCT_URL);
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProductos();
  });

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
                  <Button
                    className="btn-round"
                    color="primary"
                    onClick={toggleModal}
                  >
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
                      <th>Habitacion</th>
                      <th className="text-right">Cantidad</th>
                      <th className="text-right">Precio Unitario</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productos.map((producto) => (
                      <tr key={producto.id}>
                        <td>{producto.descripcion}</td>
                        <td>{producto.categoria.descripcion}</td>
                        <td>{producto.habitacion.descripcion}</td>
                        <td className="text-right">{producto.cantidad}</td>
                        <td className="text-right">
                          {producto.precio_unitario}
                        </td>
                      </tr>
                    ))}
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
