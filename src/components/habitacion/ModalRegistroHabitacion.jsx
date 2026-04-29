import React, { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";

const ModalRegistroHabitacion = ({
  mostrarModal,
  setMostrarModal,
  nuevaHabitacion,
  manejoCambioInput,
  agregarHabitacion,
}) => {

  const [deshabilitado, setDeshabilitado] = useState(false);

  const handleRegistrar = async () => {
    if (deshabilitado) return;
    setDeshabilitado(true);
    await agregarHabitacion();
    setDeshabilitado(false);
  };

  const esValido =
    nuevaHabitacion.numero_habitacion &&
    nuevaHabitacion.tipo_habitacion.trim() !== "" &&
    nuevaHabitacion.precio;

  return (
    <Modal
      show={mostrarModal}
      onHide={() => setMostrarModal(false)}
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Agregar Habitación</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>

          {/* 🔢 Número */}
          <Form.Group className="mb-3">
            <Form.Label>Número</Form.Label>
            <Form.Control
              type="number"
              name="numero_habitacion"
              value={nuevaHabitacion.numero_habitacion || ""}
              onChange={manejoCambioInput}
              placeholder="Ej: 101"
            />
          </Form.Group>

          {/* 🏨 Tipo */}
          <Form.Group className="mb-3">
            <Form.Label>Tipo de Habitación</Form.Label>
            <Form.Select
              name="tipo_habitacion"
              value={nuevaHabitacion.tipo_habitacion || ""}
              onChange={manejoCambioInput}
            >
              <option value="">Seleccione...</option>
              <option value="Individual">Individual</option>
              <option value="Doble">Doble</option>
              <option value="Suite">Suite</option>
              <option value="Familiar">Familiar</option>
            </Form.Select>
          </Form.Group>

          {/* 🛏️ Camas + Clima en fila */}
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Camas</Form.Label>
                <Form.Control
                  type="text"
                  name="tipo_camas"
                  value={nuevaHabitacion.tipo_camas || ""}
                  onChange={manejoCambioInput}
                  placeholder="Ej: 2 camas"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Clima</Form.Label>
                <Form.Select
                  name="tipo_clima"
                  value={nuevaHabitacion.tipo_clima || ""}
                  onChange={manejoCambioInput}
                >
                  <option value="">Seleccione...</option>
                  <option value="Aire acondicionado">Aire acondicionado</option>
                  <option value="Ventilador">Ventilador</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/* 💰 Precio */}
          <Form.Group className="mb-3">
            <Form.Label>Precio ($)</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              name="precio"
              value={nuevaHabitacion.precio || ""}
              onChange={manejoCambioInput}
              placeholder="Ej: 50.00"
            />
          </Form.Group>

          {/* 🟢 Estado */}
          <Form.Group className="mb-3">
            <Form.Label>Estado</Form.Label>
            <Form.Select
              name="estado"
              value={nuevaHabitacion.estado || ""}
              onChange={manejoCambioInput}
            >
              <option value="">Seleccione...</option>
              <option value="Disponible">Disponible</option>
              <option value="Ocupado">Ocupado</option>
            </Form.Select>
          </Form.Group>

        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => setMostrarModal(false)}>
          Cancelar
        </Button>

        <Button
          variant="primary"
          onClick={handleRegistrar}
          disabled={nuevaHabitacion.numero_habitacion.trim() === "" || deshabilitado}
        >
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalRegistroHabitacion;