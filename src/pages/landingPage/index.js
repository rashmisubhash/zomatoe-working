import React, { useState } from "react";
import landingPageImage from "../../assets/images/landingPageImage.jpg";
import zomatoWhiteLogog from "../../assets/images/zomatoWhiteLogog.avif";

const LandingPage = (props) => {
  const { searchCityRedux } = props;

  const [location, setLocation] = useState("Chennai");
  const [searchQuery, setQuery] = useState("");
  const [filters, setFilters] = useState({ rating: 0 });

  const onChangeFilters = (filters) => {
    setFilters(filters);
  };
  return (
    <div className="landingPage">
      <div className="landingPageImageContainer">
        <img
          src={landingPageImage}
          alt="Landing Page Pic"
          className="landingPageImage"
        />
      </div>
      <div className="contentWrapper">
        {/* <div className="zomatoImageContainer"> */}
        <img src={zomatoWhiteLogog} alt="Zomato Logo" className="zomatoImage" />
        {/* </div> */}
        <h2 className="description">
          Discover the best food & drinks in {searchCityRedux}
        </h2>
        {/* <Header
          functions={[location, setLocation]}
          setQuery={setQuery}
          searchQuery={searchQuery}
        /> */}
      </div>
      <style jsx>{`
        .landingPage {
          height: calc(100vh - 35rem);
          min-height: 30rem;
          max-height: 57rem;
          width: 100%;
          position: relative;
        }
        .landingPageImageContainer {
          overflow: hidden;
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
        }

        .landingPageImage {
          position: absolute;
          top: 0px;
          left: 0px;
          height: 100%;
          width: 100%;
          background-size: cover;
          transform: scale(1.3);
        }

        .contentWrapper {
          position: absolute;
          background: none;
          bottom: calc(50% - 5rem);
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .zomatoImageContainer {
          height: 65px;
          width: 18rem;
          position: absolute;
          top: -100px;
          background: none;
        }

        .zomatoImage {
          transform: translateY(-71px);
          height: 4rem;
          width: 16rem;
          background-size: contain;
          background: none;
        }
        .description {
          color: white;
          text-align: center;
          font-weight: 400;
          font-family: "Poppins";
          position: absolute;
          background: none;

          color: white;
          text-align: center;
          font-size: 3.6rem;
        }

        .header {
          position: absolute;
          background: none;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
