import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://63be96baf5cfc0949b5b5fc6.mockapi.io/crud", {
        e_name: name,
        e_age: age,
        e_email: email
      })
      .then(() => {
        navigate("/");
      });
  };
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-2 mt-2">
            <Link to="/">
              <button className="btn btn-primary">Read Data</button>
            </Link>
          </div>
          <div className="bg-primary p-4 text-center text-white">
            <h1>Create Data</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input
                type="number"
                placeholder="Enter Age"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                placeholder="Enter Email:"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="d-grid">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Create;
