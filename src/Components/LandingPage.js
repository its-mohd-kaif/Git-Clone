import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./LandingPage.css";
import { fetchUsers } from "../redux/usersSlice";
import { fetchProfile } from "../redux/usersSlice";
import { Link } from "react-router-dom";

function LandingPage() {
  // UseState For Input Values
  const [input, setInput] = useState("");
  // UseState For hide initial Content
  const [hide, setHide] = useState("hide");
  // Function for input values
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  // Use Dispatch
  const dispatch = useDispatch();
  // UseSelector For Current State Value
  const data = useSelector((state) => state.users);
  // Function To Dispatch Action FetchApi
  function fetchApi() {
    dispatch(fetchUsers(input));
  }
  // FetchHandler Function
  const fetchHandler = () => {
    if (input === "") {
      alert("Type Github User Name!!!");
      document.getElementById("input").focus();
    } else {
      setHide("seen");
      fetchApi();
    }
  };
  // Key Press Input Handle Function
  const keyHandler = (e) => {
    if (e.key === "Enter") {
      setHide("seen");
      fetchApi();
    }
  };
  // View Profile Button Function
  const profileHandler = () => {
    dispatch(fetchProfile(input));
    setHide("seen");
  };
  return (
    <section className="homePageSection">
      <div>
        <div className="header">
          <h1>Get Github Profile Cards!</h1>
        </div>
        <center>
          <div className="searchDiv">
            <input
              autoFocus
              value={input}
              onKeyDown={keyHandler}
              onChange={inputHandler}
              className="inputDiv"
              placeholder="Search a github user"
              id="input"
            />
            <button onClick={fetchHandler} className="searchHandler">
              Search
            </button>
          </div>
          <div className={hide}>
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
                          <button
                            className="profileBtn"
                            onClick={profileHandler}
                          >
                            View Profile
                          </button>
                        </Link>
                      </div>
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </section>
  );
}

export default LandingPage;
