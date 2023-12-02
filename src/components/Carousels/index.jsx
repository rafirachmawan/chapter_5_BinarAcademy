import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import "./style.css";

const Carousels = () => {
  let CarouselsText = [
    {
      testi: "asdadasdasdasdadadadaasdsa",
      customer: "asdasdasdasdasdasdaa",
    },
    {
      testi: "asdasdadadaadasda",
      customer: "sadsadadadsadasda",
    },
    {
      testi: "sadadadadaada",
      customer: "sdaasdadasadas",
    },
  ];
  return (
    <Container>
      <Row>
        <Col className="col-12 mt-5  d-flex justify-content-center">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              {CarouselsText.map((obj) => {
                return (
                  <div className="carousel-item active">
                    <Card style={{ background: "#F1F3FF" }}>
                      <Card.Body>
                        {/* <img className="testi-image" src={obj.Image} />
                        <img src={rating} alt="rate" id="ratingcust" /> */}
                        <h5>{obj.testi}</h5>
                        <h6>{obj.customer}</h6>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Carousels;
