import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="main-footer">
          <br />
          <div className="first-footer">
            <div className="icon">
              <i class="fa fa-home"></i> <span>About Us</span>
            </div>
            <p>
              Established in 2001, Projectsdeal was conceived with the vision to
              provide the best dissertation writing services in the UK through
              well-written dissertation, thesis, essay, research paper, term
              paper and book report, that will enable our clients secure a good
              career and make their parents proud.
            </p>
            <p>
              Thanks to your continued love and support, we have recently added
              134 new professional experts on board in addition to our current
              team.
            </p>
            <p style={{ color: "#337ab7" }}>More about Projectsdeal</p>
          </div>

          <div className="second-footer">
            <div className="icon">
              <i class="fa fa-desktop"></i>{" "}
              <span>
                We are the Only Legitimate Dissertation Writing Service that is
                Trusted & Ranked on Inc, Safe to Order Online:
              </span>
            </div>
            <img
              src="https://projectsdeal.co.uk/images/Inc-Verification.png"
              alt=""
            />
            <br />
            <p color="">
              {" "}
              <i class="fa fa-phone"></i> 020 3290 0046
            </p>
            <br />
            <p>CONTACT US</p>
          </div>
          <div className="third-footer">
            <div className="icon">
              <i class="fa-regular fa-message"></i>
              <span>Dissertation Related Services</span>
            </div>
            <p className="footer-hr">Dissertation Topics</p>
            <p className="footer-hr">Do My Dissertation</p>
            <p className="footer-hr">Dissertation Proposal Writing Service</p>
            <p className="footer-hr">Literature Review Writing Service</p>
            <p className="footer-hr">Masters Dissertation Writing Service</p>
            <p className="footer-hr">PhD Dissertation Writing Service</p>
            <button className="footer-btn">
              Calculate Dissertation Writing Cost
            </button>
          </div>
          <div className="fourth-footer">
            <div className="icon">
              <i class="fa fa-list-alt"></i> <span> For Urgent Deadline</span>
            </div>
            <br />
            <p style={{ color: "white" }}>Whatsapp: +44 7447 882377</p>
            <div style={{ display: "flex", flexDirection: "column-reverse" }}>
              <img
                src="https://projectsdeal.co.uk/images/envelope.png"
                alt=""
              />
            </div>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
