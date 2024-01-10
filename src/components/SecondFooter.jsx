import React from "react";

const SecondFooter = () => {
  return (
    <>
      <div className="copyright" style={{ backgroundColor: "#1a202a" }}>
        <br />
        <div className="copy-icon">
          <span className="icon_span">
            <i class="fa-brands fa-facebook-f"></i>{" "}
          </span>
          <span className="icon_span">
            <i class="fa-brands fa-youtube"></i>{" "}
          </span>
          <span className="icon_span">
            {" "}
            <i class="fa-brands fa-instagram"></i>{" "}
          </span>
          <span className="icon_span">
            <i class="fa-brands fa-pinterest"></i>{" "}
          </span>
          <span className="icon_span">
            <i class="fa-brands fa-linkedin"></i>{" "}
          </span>
          <span className="icon_span">
            <i class="fa-brands fa-google"></i>{" "}
          </span>
          <span className="icon_span">
            <i class="fa-brands fa-whatsapp"></i>{" "}
          </span>
        </div>
        <p
          style={{ color: "#337ab7", fontWeight: "bold", textAlign: "center" }}
        >
          Corporate Address:
        </p>
        <p style={{ color: "#aaaaab", textAlign: "center" }}>
          10 Upper Bank Street London, London E145GH United Kingdom
        </p>
        <p style={{ color: "#aaaaab", textAlign: "center" }}>
          Telephone: + 44 (0)20 3290 0046
        </p>
        <p style={{ color: "#aaaaab", textAlign: "center" }}>
          Copyright © 2001-2024 Projectsdeal. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default SecondFooter;
