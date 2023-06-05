import React from "react";

const HomeHeader = () => {
  return (
    <>
      <div className="headerContainer">
        <h1>
          Find <span className="cute-and-smart"> cute and smart</span> pets to
          play with you
        </h1>
        <p>
          Browse pets from our network pets available for adoption. Help new
          friend to find a home.
        </p>
        <div
          style={{ display: "flex", marginTop: "20px", alignItems: "center" }}
        >
          <button
            className="nav-btn"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Explore Now
          </button>
          <div style={{ marginLeft: "40px" }}>
            <h1
              style={{
                fontSize: "35px",
                color: "#f36250",
                display: "flex",
                flexDirection: "column",
              }}
            >
              250K+{" "}
              <span
                style={{
                  fontSize: "18px",
                  color: "#606060",
                  textAlign: "center",
                }}
              >
                {" "}
                Pets Available
              </span>
            </h1>
          </div>
          <div style={{ marginLeft: "40px" }}>
            <h1
              style={{
                fontSize: "35px",
                color: "#f36250",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              10K+{" "}
              <span
                style={{
                  fontSize: "18px",
                  color: "#606060",
                  textAlign: "center",
                }}
              >
                {" "}
                Shelters and Rescues
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;