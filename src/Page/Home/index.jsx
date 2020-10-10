import React, { Fragment, useState, useEffect } from "react";
import Axios from "axios";
import Pagination from "rc-pagination";
import { config } from "../../config.js";
import { Link } from "react-router-dom";

const Home = () => {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  // const [page, setPage] = useState(1);
  const [per_page, setPer_page] = useState(1);

  useEffect(() => {
    console.log("effect home dipanggil");
    getList();
    getPage();
  }, []);

  const getList = async () => {
    try {
      let response = await Axios.get(`${config.api_host}/users?page=1`);
      setList((list) => response.data.data);
      console.log("list", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getPage = async () => {
    try {
      let response = await Axios.get(`${config.api_host}/users?page=1`);
      setTotal((total) => response.data.total);
      setPer_page((per_page) => response.data.per_page);

      console.log("total", total);
      console.log("per_page", per_page);
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <table className="table table-responsive table-striped">
            <thead>
              <tr>
                <th>no</th>
                <th>detail</th>
                <th>avatar</th>
                <th>email</th>
                <th>first name</th>
                <th>last name</th>
              </tr>
            </thead>
            <tbody>
              {list.map((list, index) => (
                <tr key={index}>
                  <td key={list.id}>{index + 1}</td>
                  <td>
                    <Link to={`DetailUser/${list.id}`}>
                      <detail className="btn btn-outline-primary">
                        detail
                      </detail>
                    </Link>
                  </td>
                  <td>
                    <img
                      src={list.avatar}
                      width="100"
                      className="rounded-circle"
                      alt=""
                    />
                  </td>
                  <td>{list.email}</td>
                  <td>{list.first_name}</td>
                  <td>{list.last_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination total={total} defaultCurrent="1" pageSize={per_page} />
        </div>
      </div>
    </Fragment>
  );
};
export default Home;
