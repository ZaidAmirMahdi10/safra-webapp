// src/components/Footer.js
import React from "react";
import "./Footer.css";
import { ChevronRight } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center newsletter-holder">
            <div className="col-lg-6">
              <h4 className="footer-newsletter-title">Join Our Newsletter</h4>
              <p>
                Stay ahead of trends and exclusive offers by joining Soor
                Al-Najat's newsletter. Receive curated content, fashion
                insights, and insider access to ensure you're always in vogue.
              </p>
              <form action="" method="post">
                <input type="email" name="email" className="newsletter-input" />
                <input
                  type="submit"
                  value="Subscribe"
                  className="newsletter-buttom"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Safra</h3>
              <p>
                Al-Atayfia <br />
                Baghdad
                <br />
                Iraq <br />
                <br />
                <strong>Phone:</strong> +964 964 9644 964
                <br />
                <strong>Email:</strong> info@safra.com
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <ChevronRight className="icon" />
                  <a href="#">Home</a>
                </li>
                <li>
                  <ChevronRight className="icon" />
                  <a href="#">About us</a>
                </li>
                <li>
                  <ChevronRight className="icon" />
                  <a href="#">Services</a>
                </li>
                <li>
                  <ChevronRight className="icon" />
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <ChevronRight className="icon" />
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <ChevronRight className="icon" />
                  <a href="#">Tourism trips</a>
                </li>
                <li>
                  <ChevronRight className="icon" />
                  <a href="#">Therapeutic trips</a>
                </li>
                <li>
                  <ChevronRight className="icon" />
                  <a href="#">Religious trips</a>
                </li>
                <li>
                  <ChevronRight className="icon" />
                  <a href="#">Study trips</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="#" className="google-plus">
                  <i className="bx bxl-skype"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="copyright">
          &copy; Copyright 2024{" "}
          <strong>
            <span>Safra</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Implemented by{" "}
          <a style={{ color: "#00ccff" }} href="https://www.lykvyd.se/">
            LYKVYD
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
