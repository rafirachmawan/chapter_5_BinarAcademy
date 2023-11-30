import React from "react";
import "./style.css";
import { Row, Col, Card, Container } from "react-bootstrap";

const Testimony = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="text-center">
            <h5>Testimonial</h5>
            <h6>Berbagai review positif dari para pelanggan kami</h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimony;
