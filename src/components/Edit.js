import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://63be96baf5cfc0949b5b5fc6.mockapi.io/crud/${id}`, {
        e_name: name,
        e_age: age,
        e_email: email
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="row">
        <div className="col-md-4  ">
          <div className="mb-2 mt-2">
            <Link to="/">
              <button className="btn btn-primary">Read Data</button>
            </Link>
          </div>
          <div className="bg-primary p-4 text-center text-white">
            <h1>Edit Data</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                className="form-control"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input
                type="number"
                placeholder="Enter Age"
                value={age}
                className="form-control"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                placeholder="Enter Email:"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control"
              />
            </div>
            <br />
            <div className="d-grid">
              <input type="submit" value="Update" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Edit;
