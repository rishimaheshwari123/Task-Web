import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container2">
          <div className="firstSec">
            <img
              src="https://projectsdeal.co.uk/images/coursework_writing_services.png"
              alt="not foud"
            />
          </div>
          <div className="SecondSec">
            <img
              src="https://projectsdeal.co.uk/images/Student3.png"
              alt="not foud"
            />
          </div>
        </div>
        <div className="ThirdSec">
          <div className="baner">
            <img
              src="https://projectsdeal.co.uk/images/projectsdeal_dissertation_writing_services_offer.png"
              alt=""
            />
          </div>
          <div className="main-third-section">
            <br />
            <br />
            <div className="third-header">
              <img
                src="https://projectsdeal.co.uk/img/features/index2.png"
                alt="not found"
              />
              <h3 className="first-h">Calculate Pricing</h3>
            </div>
            <div>
              <p className="hero-pera">
                Just Select Correct Options and Calculate Best Price
              </p>
            </div>
            <br />
            <div>
              <select className="hero-sec">
                <option value="">--Please Select Academic Level--</option>
                <option value="option1">Masters</option>
                <option value="option2">Undergraduate</option>
                <option value="option3">phD</option>
              </select>
            </div>
            <br />
            <div>
              <select className="hero-sec">
                <option value="">--Please Select Domain--</option>
                <option value="option1">CS</option>
                <option value="option2">IT</option>
                <option value="option3">Management</option>
              </select>
            </div>
            <br />
            <div>
              <select className="hero-sec">
                <option value="">--Please No. of Worlds/Pages--</option>
                <option value="option1">1000 words ~ 4 pages</option>
                <option value="option1">1500 words ~ 6 pages</option>
                <option value="option1">2000 words ~ 8 pages</option>
              </select>
            </div>
            <br />
            <div>
              <input
                className="hero-sec"
                type="email"
                placeholder="Email id:"
              />
            </div>
            <br />
            <div>
              <input
                className="hero-sec"
                type="phone"
                placeholder="Valid phone number"
              />
            </div>
            <br />
            <div>
              <input
                className="hero-sec"
                type="date"
                placeholder=" Deadline : dd/mm/yy"
              />
            </div>
            <br />
            <button className="hero-btn" style={{ fontSize: "16px" }}>
              Click To Caleunder{" "}
              <i
                style={{ fontSize: "16px", marginLeft: "3px" }}
                class="fa fa-calculator"
              ></i>
            </button>
            <h2
              style={{
                fontWeight: 700,
                color: "white",
                textAlign: "center",
                marginTop: "5px",
                marginLeft: "115px",
              }}
            >
              Result is all that Matters!
            </h2>
            <br />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
