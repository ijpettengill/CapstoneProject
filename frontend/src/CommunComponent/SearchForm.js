import React, { useState } from "react";
import "../NavBar/NavBar.css";
import "./SearchForm.css";
import { useNavigate } from "react-router-dom";

// ##########################################################
// CompanySearch: Pet Search Drop to look for pets
//

const CompanySearch = () => {
  const INITIAL_STATE = {
    location: "",
    animals_type: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      location: formData.location,
      animals_type: formData.animals_type,
    };
    console.log(data);
    setFormData(INITIAL_STATE);
    navigate(`/gallery/search/${JSON.stringify(data)}`);
  }

  return (
    <>
      <div className="container">
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="form-group"
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
              width: "100%",
            }}
          >
            <input
              style={{ padding: "10px", marginLeft: "5px", minWidth: "200px" }}
              className="form-control"
              // id="name"
              required
              type="text"
              name="location"
              placeholder="Enter City, State, or ZIP"
              value={formData.location}
              onChange={handleChange}
            ></input>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  // id="dog"
                  required
                  name="animals_type"
                  value="dog"
                  checked={formData.animals_type === "dog"}
                  onChange={handleChange}
                ></input>
                <label htmlFor="dogs"> Dogs</label>
                <br></br>
                <input
                  type="radio"
                  // id="other"
                  name="animals_type"
                  value="small-furry"
                  checked={formData.animals_type === "small-furry"}
                  onChange={handleChange}
                ></input>
                <label htmlFor="others">Small & Furry</label>
                <br></br>

                <input
                  type="radio"
                  // id="other"
                  name="animals_type"
                  value="rabbit"
                  checked={formData.animals_type === "rabbit"}
                  onChange={handleChange}
                ></input>
                <label htmlFor="others">Rabbits</label>
                <br></br>
              </div>
              <div>
                <input
                  type="radio"
                  // id="cat"
                  name="animals_type"
                  value="cat"
                  checked={formData.animals_type === "cat"}
                  onChange={handleChange}
                ></input>
                <label htmlFor="cats">Cats</label>
                <br></br>
                <input
                  type="radio"
                  // id="other"
                  name="animals_type"
                  value="horse"
                  checked={formData.animals_type === "horse"}
                  onChange={handleChange}
                ></input>
                <label htmlFor="others">Horses</label>
                <br></br>
                <input
                  type="radio"
                  // id="other"
                  name="animals_type"
                  value="bird"
                  checked={formData.animals_type === "bird"}
                  onChange={handleChange}
                ></input>
                <label htmlFor="others">Birds</label>
                <br></br>
              </div>
              <div>
                <input
                  type="radio"
                  // id="other"
                  name="animals_type"
                  value="scales-fins-other"
                  checked={formData.animals_type === "scales-fins-other"}
                  onChange={handleChange}
                ></input>
                <label htmlFor="others">Scale, Fin & Others</label>
                <br></br>
              </div>
            </div>
            <div style={{ marginTop: "30px", marginBottom: "30px" }}>
              <button
                style={{
                  marginLeft: "20px",
                  marginRight: "5px",
                  height: "38px",
                }}
                className="nav-btn float-right"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CompanySearch;