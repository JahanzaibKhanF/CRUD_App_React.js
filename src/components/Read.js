import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);

  const getData = () => {
    axios
      .get("https://63be96baf5cfc0949b5b5fc6.mockapi.io/crud")
      .then((resp) => {
        setApiData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const hendleDelete = (id) => {
    axios
      .delete(`https://63be96baf5cfc0949b5b5fc6.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const setDataToStorage = (id, name, age, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-2 mt-2">
            <Link to="/create">
              <button className="btn btn-primary">+Create New data</button>
            </Link>
          </div>
          <table className="table table-bordered table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Edite</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.e_name}</td>
                      <td>{item.e_age}</td>
                      <td>{item.e_email}</td>
                      <td>
                        <Link to="/edit">
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              setDataToStorage(
                                item.id,
                                item.e_name,
                                item.e_age,
                                item.e_email
                              );
                            }}
                          >
                            Edit
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            if (window.confirm("Are You Sure To Delete Data")) {
                              hendleDelete(item.id);
                            }
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Read;
