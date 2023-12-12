import React from "react";
import { Raw, Col, Accordion, Container } from "react-bootstrap";
import "./style.css";

const Faq = () => {
  // mendeskripsikan data yang akan di looping

  let faqlist = [
    { description: "Apa saja syarat yang dibutuhkan?" },
    { description: "Berapa hari minimal sewa mobil lepas kunci?" },
    { description: "Berapa hari sebelumnya sebaiknya booking sewa mobil?" },
    { description: "Apakah ada biaya antar-jemput?" },
    { description: "Bagaimana jika terjadi kecelakaan?" },
  ];
  return <div>Faq</div>;
};

export default Faq;
