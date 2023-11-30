import React from "react";
import "./style.css";
import logowoman from "../../assets/woman.png";

const OurServices = () => {
  // function
  let listOurServices = [
    {
      description: "sewa Mobil Dengan Supir Di Bali 12 Jam",
    },
    {
      description: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
    },
    {
      description: "Sewa Mobil Jangka Panjang Bulanan",
    },
    {
      description: "Gratis Antar - Jemput Mobil di Bandara",
    },
    {
      description: "Layanan Airport Transfer / Drop In Out",
    },
  ];
  return (
    <div className="our-services-container">
      <div className="container-left">
        <img src={logowoman} />
      </div>
      <div className="container-right">
        <h4>Best Car Rental for any kind of trip in (Lokasimu)!</h4>
        <p>
          Sewa mobil di Lokasimu bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>

        {/* function */}
        <div>
          {listOurServices.map((obj) => {
            return <p> ☑ {obj.description}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
