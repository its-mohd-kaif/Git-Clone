import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavProfile from "./NavProfile";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState([]);
  const data = useSelector((state) => state.users);
  const profile = useSelector((state) => state.users.profile);

  // setUser(profile)

  // profile.length = 6;

  useEffect(() => {
    let temp = []
    temp = profile.slice(0, 6);
    setUser(temp);
  }, []);
  console.log("USER OVERVIEW", user);
  console.log("data pro", data.users);

  return (
    <div>
      <NavProfile />
      <div>
        <div className="rowProfile">
          <div className="column1Profile">
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

          <div className="column2Profile">
            <div className="rowLinkBtn">
              <div className="column1Linkbtn">
                <button className="navLinkBtn">Overview</button>
              </div>
              <div className="column2Linkbtn">
                <button className="navLinkBtn">Repositories</button>
              </div>
              <div className="column3Linkbtn">
                <button className="navLinkBtn">Project</button>
              </div>
            </div>
            <div>
              <p>Popular repositories </p>
            </div>
            <div className="displayOverView">
              {user.map((val) => (
                <div className="mainDivOverData">
                  <div className="rowOver">
                    <div className="column1Over">
                      <div>
                        <h4 style={{color:"#2a7ddf"}}>{val.name}</h4>
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
