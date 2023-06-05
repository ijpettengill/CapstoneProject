import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div
        className="comment_holder"
        style={{ marginTop: "20px", width: "90%", marginBottom: "50px" }}
      >
        <h2 style={{ marginTop: "40px", marginBottom: "40px" }}>
          <FontAwesomeIcon className="titleIcon" icon={faPaw} />
          <span className="titlePage">
            {" "}
            <span style={{ color: "darkred" }}>Adopt-A-Pet</span>{" "}
          </span>{" "}
        </h2>

        <div className="row">
          <div className="col-lg-4">
            <img
              id="profile_img"
              src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h2>Mission:</h2>
            <p>
              All in one place, all users on this site will have the opportunity
              to find the best companion.
            </p>
            <h2>Adopt-A-Pet:</h2>
            <p>
              Is a pet adoption website to help the customer find the pet they are
              looking for. With an easy UI. Adopt-A-Pet uses a real-time API
              that brings information about pets available to be adopted. Thanks
              to <a href="https://www.petfinder.com">Petfinder</a> for the
              unique API.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>API:</strong>{" "}
                    <a href="https://www.petfinder.com/developers/v2/docs/">
                      Petfinder-API
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Language: </strong> <span>JavaScript</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Library: </strong>
                    <span>ReactJS</span>
                  </li>
                  {/* <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Phone:</strong> <span>+1 (515) 490-1096</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Github:</strong>{" "}
                    <a href="https://github.com/ijpettengill"> Issaac Pettengill</a>
                  </li> */}
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  {/* <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong>
                    <span>36</span>
                  </li> */}
                  {/* <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Degree:</strong> <span>Master</span>
                  </li> */}
                </ul>
              </div>
            </div>
            <p>
              The project was developed as a part of the Springboard Software
              Engineering curriculum. The project was designed as a
              database-driven website from an external API. This small
              full-stack application could be used by pets fans as a place to
              find pets, and a place to share their opinion about a pet.
            </p>
          </div>
        </div>
        <h2
          style={{
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          Adopt-A-Pet Developer:{" "}
        </h2>
        <div className="row">
          <div className="col-lg-4">
            <img
              id="profile_img"
              src="https://rogerdelgado.com/assets/img/profile-img.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Full Stack Web Developer</h3>
            <p className="fst-italic">
              Web development is difficult, only then is it fun to do. You just
              have to set your standards. If it were to be easy, would anyone do
              it?
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  {/* <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Birthday:</strong> <span>21 July 1986</span>
                  </li> */}
                  {/* <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Phone:</strong> <span>1+ 123 123 1234</span>
                  </li> */}
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>City:</strong> <span>Tampa, FL</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Email:</strong>
                    <span>issaac.pettengill@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Phone:</strong> <span>+1 813 - 802 6654</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Github:</strong>{" "}
                    <a href="https://github.com/rogmide"> Roger Delgado</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  {/* <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong>
                    <span>35</span>
                  </li> */}
                  {/* <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Degree:</strong> <span>Master</span>
                  </li> */}
                </ul>
              </div>
            </div>
            <p>
              I am a professional Software Engineer and Web App developer. I
              have experience in building web app development. I have strong
              skills in html, css, bootstrap, JavaScript, Python and more. I
              develop Responsive and Dynamic User interfaces according given
              prototype.
            </p>
          </div>
        </div>
        {/* <h2>
          <FontAwesomeIcon className="titleIcon" icon={faPaw} />
          <span className="titlePage">
            {" "}
            <span style={{ color: "darkred" }}>Adopt-A-Pet</span>{" "}
          </span>{" "}
        </h2>
        <p style={{ marginLeft: "20px" }}>
          - All in one place, all users in this site will have the opportunity
          to find the best comanion.
        </p>
        <p style={{ marginLeft: "20px" }}>
          - Pet Treasure uses a real-time API that brings information about pets
          available to be adopted. Thanks to petfinder.com for the unique API:
          https://www.petfinder.com/developers/v2/docs/
        </p> */}
      </div>
    </>
  );
};

export default AboutUs;