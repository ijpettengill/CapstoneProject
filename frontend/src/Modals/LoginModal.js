import React from "react";
import LoginForm from "../Auth/LoginForm";
import "./LoginModal.css";

// ##########################################################
// LoginModal: Modal that handle the login to the app
//
// Params:
//        login: method that coming from app component to handle the login into the page
//

const LoginModal = ({ login }) => {
  return (
    <>
      <div
        className="modal fade"
        id="loginFormModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div
            className="modal-content modalContainer"
            style={{ width: "fit-content" }}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {/* Let's get this right... */}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              className="modal-body"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="loginHolder">
                <LoginForm login={login} />
              </div>
            </div>
            <div className="modal-footer">
              <button
                hidden
                id="closeBtn"
                type="button"
                className="nav-btn"
                data-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;