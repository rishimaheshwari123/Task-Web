import React from "react";

const TopHeader = () => {
  return (
    <>
      <div className="top-container">
        <div className="container">
          <img
            src="https://projectsdeal.co.uk/images/logo.png"
            alt="not found"
          />
          <div className="top_nav_text">
            <p className="top-header-p">
              No. <span style={{ fontSize: "14px" }}>1 </span> Dissertation
              Writing Services in UK,
            </p>
            <span className="top-header-span">Since 2001!</span>
            <div className="btn">
              <i class="fa fa-phone ">Call +44 20 32900046 </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
