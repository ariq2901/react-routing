import React from "react";
import { useParams } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import { config } from "../../config.js";

const DetailUser = (props) => {
  let { id } = useParams();
  let history = useHistory();
  const [user, setUser] = React.useState([]);
  React.useEffect(() => {
    getUser();
  }, [id]);

  const getUser = async () => {
    try {
      let response = await Axios.get(`${config.api_host}/users/${id}`);
      setUser(response.data.data);
    } catch {
      console.log("error");
    }
  };

  const nextHandle = () => {
    let nextId = parseInt(id, 10) + 1;
    console.log("props", props);
    history.push(`/DetailUser/${nextId}`);
    console.log(nextId);
  };
  const previousHandle = () => {
    let previousId = parseInt(id, 10) - 1;
    history.push(`/DetailUser/${previousId}`);
    console.log(previousId);
  };

  return (
    <React.Fragment>
      <div className="container mt-5">
        <img className="rounded-circle" src={user.avatar} alt="" />
        <h3 className="mt-2">
          {user.first_name} {user.last_name}
        </h3>
        <p>{user.email}</p>
        <div>
          <div className="btn-group" role="group" aria-label="Basic example">
            <Link to="/">
              <button>Back</button>
            </Link>
            <button disabled={id < 2} onClick={previousHandle}>
              Previous
            </button>
            <button onClick={nextHandle}>Next</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailUser;
