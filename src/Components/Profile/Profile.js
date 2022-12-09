import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../redux/usersSlice";
import { fetchRepo } from "../../redux/usersSlice";
import NavProfile from "./NavProfile";
import "./Profile.css";

function Profile() {
  // Create State For Display Api content
  const [user, setUser] = useState([]);
  const [hide, setHide] = useState("seen");
  // UseSelect for get Redux State Value
  const data = useSelector((state) => state.users);
  const profile = useSelector((state) => state.users.profile);

  // UseState For Set User Value Into Login
  const [login, setLogin] = useState("");
  // UseDispatch
  const dispatch = useDispatch();
  // Slice The Display Array Hold Into Temp
  let temp = profile.slice(0, 8);

  console.log("DATA", data.users);

  useEffect(() => {
    // Set Temp into Display State
    setUser(temp);
    // Set User Name Into Login
    setLogin(data.users.login);
  }, [data, profile]);

  const repoFetchHandler = () => {
    // Set Temp into Display State
    setUser(temp);
    setHide("hide");
    // Dispatch FetchRepo Action
    dispatch(fetchRepo(login));
  };

  const overviewHandler = () => {
    // Set Temp into Display State
    setUser(temp);
    setHide("seen");
    // Dispatch FetchProfile Action
    dispatch(fetchProfile(login));
  };

  return (
    <div>
      <NavProfile />
      <div>
        <div className="rowProfile gridContainer">
          <div className="column1Profile gridItem">
            <div className="imgDiv">
              <img className="userImg" src={data.users.avatar_url} alt="" />
            </div>
            <div>
              <h2 style={{ marginLeft: "20%" }}>{data.users.name}</h2>
            </div>
            <div>
              <h3 style={{ color: "#57606a", marginLeft: "20%" }}>
                {data.users.login}
              </h3>
            </div>
            <div>
              <button className="editProfileBtn">Edit Profile</button>
            </div>
          </div>

          <div className="column2Profile gridItem">
            <div className="rowLinkBtn">
              <div className="column1Linkbtn">
                <button onClick={overviewHandler} className="navLinkBtn">
                  Overview
                </button>
              </div>
              <div className="column2Linkbtn">
                <button onClick={repoFetchHandler} className="navLinkBtn">
                  Repositories {data.users.repos_url.length}
                </button>
              </div>
              <div className="column3Linkbtn">
                <button className="navLinkBtn">Project</button>
              </div>
            </div>
            <div className={hide}>
              <div className="userBioDiv">
                <div>
                  <span style={{ fontWeight: "bold" }}>Bio </span>
                  {data.users.bio}
                </div>
                <hr></hr>
                <div>
                  <span style={{ fontWeight: "bold" }}>Location </span>
                  {data.users.location}
                </div>
              </div>
            </div>
            <div className="displayOverView">
              {/* Display Content */}
              {user.map((val, index) => (
                <div key={index} className="mainDivOverData">
                  <div className="rowOver">
                    <div className="column1Over">
                      <div>
                        <h4 style={{ color: "#2a7ddf" }}>{val.name}</h4>
                      </div>
                      <div>
                        <p>{val.language}</p>
                      </div>
                    </div>
                    <div className="column2Over">
                      <div className="visibilityDiv">{val.visibility}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
