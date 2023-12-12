import React from "react";
import { Row, Container, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const CallToAction = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col className="col-12 d-flex justify-content-center">
          <Card
            style={{ width: "1116px", height: "326px", background: "#0D28A6" }}
          >
            <Card.Body className="text-center" id="call-to-action">
              <Card.Title className="pt-5 fs-2">
                Sewa Mobil Di (Lokasimu) Sekarang
              </Card.Title>
              <Card.Text className="fs-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              {/* <Link to="/result">
                <button id="header-button" className="mt-4">
                  Mulai Sewa Mobil
                </button>
              </Link> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CallToAction;
