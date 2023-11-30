import React from "react";
import "./style.css";
import { Row, Col, Card, Container } from "react-bootstrap";

const Why_us = () => {
  // function
  let reasonDescription = [
    {
      title: "Mobil Lengkap",
      description:
        "Tersedia Banyak Pilihan Mobil, Kondisi Masih Baru, Bersih Dan Terawat ",
    },
    {
      title: "Harga Murah",
      description:
        "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain ",
    },
    {
      title: "Layanan 24 Jam",
      description:
        "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.",
    },
    {
      title: "Sopir Profesional",
      description:
        "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat.",
    },
  ];
  return (
    <div className="container-our-services">
      <div className="container-right-our-services">
        <h3>Why Us?</h3>
        <p>Mengapa harus pilih binar car rental?</p>
      </div>
      {/* function */}
      <div>
        <Container>
          <Row>
            {reasonDescription.map((obj) => {
              return (
                <Col className="col-lg-3 col-12 pb-lg-5 mb-lg-5 mb-3 pb-3">
                  <Card>
                    <Card.Body>
                      {/* <img className="icon-image" src={obj.Image} /> */}
                      <div className="reason-text">
                        <h5>{obj.title}</h5>
                        <h6>{obj.description}</h6>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Why_us;
