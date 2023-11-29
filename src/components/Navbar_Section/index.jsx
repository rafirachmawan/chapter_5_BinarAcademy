import React from "react";
import logoimg from "../../assets/car.png";
import "./style.css"; // Import the CSS file for styling

const Navbar_section = () => {
  return (
    <div className="navbar-container">
      <div className="text-container">
        <h3 className="sewa">
          Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
        </h3>
        <p className="selamat">
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </p>
        <button>Mulai Sewa Mobil</button>
      </div>
      <div className="logo-container">
        <img src={logoimg} alt="" />
      </div>
    </div>
  );
};

export default Navbar_section;
