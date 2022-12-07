import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./LandingPage.css";
import { fetchUsers } from "../redux/usersSlice";
import { fetchProfile } from "../redux/usersSlice";
import { Link } from "react-router-dom";

function LandingPage() {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const dispatch = useDispatch();

  const data = useSelector((state) => state.users);

  function fetchApi() {
    dispatch(fetchUsers(input));
  }

  const fetchHandler = () => {
    fetchApi();
  };
  const keyHandler = (e) => {
    if (e.key === "Enter") {
      fetchApi();
    }
  };

  const profileHandler = () => {
    dispatch(fetchProfile(input));
  };
  console.log("DATA", data.users);
  return (
    <section>
      <div>
        <div className="header">
          <h1>Github Profile</h1>
        </div>
        <center>
          <div className="searchDiv">
            <input
              autoFocus
              value={input}
              onKeyDown={keyHandler}
              onChange={inputHandler}
              className="inputDiv"
            />
            <button onClick={fetchHandler} className="searchHandler">
              Search
            </button>
          </div>
          <div className="displayContent">
            <div className="rowDisplay">
              <div className="column1Display">
                <img className="userImg" src={data.users.avatar_url} alt="" />
              </div>
              <div className="column2Display">
                <div>
                  <h2>{data.users.login}</h2>
                </div>
                <div>
                  <p>{data.users.bio}</p>
                </div>
                <div className="rowUserData">
                  <div className="column1UserData">
                    <span>{data.users.followers}</span> <span>Followers</span>
                  </div>
                  <div className="column2UserData">
                    <span>{data.users.following}</span> <span>Following</span>
                  </div>
                </div>
                <center>
                  <div>
                    <div className="profileBtnDiv">
                      <Link to={"/profile"}>
                        <button className="profileBtn" onClick={profileHandler}>
                          View Profile
                        </button>
                      </Link>
                    </div>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </center>
      </div>
    </section>
  );
}

export default LandingPage;
