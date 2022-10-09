import React from "react";
import { Link } from "react-router-dom";
import tomatoBlackFinalLogo from "../../assets/images/zomatoBlack.avif";

const MainFooter = () => {
  return (
    <>
      <footer className="main-footer bg-light py-5 px-5">
        <section className="logo-section d-flex container bd-highlight mb-3">
          <img
            className="footer-logo mr-auto bd-highlight mb-3"
            src={tomatoBlackFinalLogo}
            alt="logo"
          />
        </section>
        <div className="d-flex flex-wrap justify-content-between w-100 footer-con mt-3 px-5">
          <div className="footer-div">
            <h6
              className="footer-heading"
              style={{
                fontWeight: "400",
                letterSpacing: "0.2rem",
              }}
            >
              COMPANY
            </h6>
            <nav className="footer-name">
              <Link to={`/Who-We-Are`}>
                <p className="footer-Link">Who We Are</p>
              </Link>
              <Link to={"/Blog"}>
                <p className="footer-Link">Blog</p>
              </Link>
              <Link to={"/Careers"}>
                <p className="footer-Link">Careers</p>
              </Link>
              <Link to={"/Report-Fraud"}>
                <p className="footer-Link">Report Fraud</p>
              </Link>
              <Link to={"/Contact"}>
                <p className="footer-Link">Contact</p>
              </Link>
            </nav>
          </div>
          <div className="footer-div">
            <h6
              className="footer-heading"
              style={{ fontWeight: "400", letterSpacing: "0.2rem" }}
            >
              FOR FOODIES
            </h6>
            <nav className="footer-name">
              <Link to={"/Code-of-Conduct"}>
                <p className="footer-Link">Code of Conduct</p>
              </Link>
              <Link to={"/Community"}>
                <p className="footer-Link">Community</p>
              </Link>
              <Link to={"/Blogger-Help"}>
                <p className="footer-Link">Blogger Help</p>
              </Link>
              <Link to={"/Developers"}>
                <p className="footer-Link">Developers</p>
              </Link>
              <Link to={"/Mobile-Apps"}>
                <p className="footer-Link">Mobile Apps</p>
              </Link>
            </nav>
          </div>
          <div className="footer-div">
            <h6
              className="footer-heading"
              style={{ fontWeight: "400", letterSpacing: "0.2rem" }}
            >
              FOR RESTAURANTS
            </h6>
            <nav className="footer-name">
              <Link to={"/Add Restaurents"}>
                <p className="footer-Link">Add Restaurant</p>
              </Link>
              <Link to={"/Claim-Your-Listing"}>
                <p className="footer-Link">Claim Your Listing</p>
              </Link>
              <Link to={"/Bussiness-App"}>
                <p className="footer-Link">Bussiness App</p>
              </Link>
              <Link to={"/Restaurents-Widgets"}>
                <p className="footer-Link">Restaurant Widgets</p>
              </Link>
              <Link to={"/Products-for-Bussiness"}>
                <p className="footer-Link">Products for Businesses</p>
              </Link>
            </nav>
          </div>
          <div className="footer-div">
            <h6
              className="footer-heading"
              style={{ fontWeight: "400", letterSpacing: "0.2rem" }}
            >
              FOR YOU
            </h6>
            <nav className="footer-name">
              <Link to={"/Privacy"}>
                <p className="footer-Link">Privacy</p>
              </Link>
              <Link to={"/Terms"}>
                <p className="footer-Link">Terms</p>
              </Link>
              <Link to={"/Security"}>
                <p className="footer-Link">Security</p>
              </Link>
              <Link to={`/Sitemap`}>
                <p className="footer-Link">Sitemap</p>
              </Link>
            </nav>
          </div>
        </div>
        <hr className="container" />
        <p className="policy" style={{ marginBottom: "0px" }}>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2022 © Zomato™ Ltd. All
          rights reserved.
        </p>
      </footer>
      <style jsx>{`
        .footer-con {
          flex-direction: row;
          display: flex;
          width: 100%;
          max-width: 100%;
        }
        .main-footer {
          width: 100%;
          background-color: rgb(248, 248, 248);
        }
        .logo-section {
          align-items: center;
          width: 100%;
          margin-bottom: 2rem;
          padding: 0rem 2.5rem;
        }
        .logo-section img {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        .footer-div {
          padding: 20px;
          flex-grow: 1;
        }
        .footer-logo {
          margin-top: 50px;
          height: 28px;
        }
        .footer-heading: {
          font-weight: 500 !important;
          font-size: 1.4rem;
          letter-spacing: 0.5rem;
          text-transform: uppercase;
          margin: 0px 0px 1.2rem;
        }
        .footer-Link {
          text-decoration: none;
          color: rgb(77, 74, 74);
          font-size: 0.9rem;
          margin: 3.8px;
        }
        .social-link {
          margin-left: 0.6rem;
        }
        .icon-tag {
          text-decoration: none;
          margin-right: 0.8rem;
          color: white;
          height: 10px;
        }
        .social-icons {
          align-item: center;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: black;
        }
        .icon {
          height: 15px;
          border-radius: 50%;
        }
        .app-store {
          height: 50px;
          width: 150px;
        }
        .policy {
          font-size: 0.9rem;
          color: rgb(137 137 137);
          line-height: 1.5rem;
          margin-top: 1.3rem;
          padding: 0rem 4rem;
          font-family: Okra, Helvetica, sans-serif;
          font-weight: 300;
        }
      `}</style>
    </>
  );
};

export default MainFooter;
