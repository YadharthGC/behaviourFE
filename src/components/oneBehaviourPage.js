import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import blank from "../images/blankProfile.jpg";
import "../SCSS/behaviourPage.scss";
import NestCamWiredStandIcon from "@mui/icons-material/NestCamWiredStand";
import "../CSS/crowd.css";
import { beSam } from "../calendarSample";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { renderhost } from "../nodeLink";
import { useNavigate, useParams } from "react-router-dom";

export default function OneBehaviourPage() {
  const [user, setUser] = useState("");
  const [userAct, setUserAct] = useState([]);
  const admin = window.localStorage.getItem("admin");
  const adminID = window.localStorage.getItem("adminID");
  const params = useParams();

  useEffect(() => {
    handleGetUser();
    console.log(params["*"]);
    let initialize = setInterval(handleGetUser, 3000);
    // if (!params["*"].includes("onebehaviour")) {
    return () => {
      clearInterval(initialize);
    };
    // }
  }, []);

  const handleGetUser = () => {
    try {
      console.log(params.id);
      axios
        .get(`${renderhost}/onebehave/${params.id}`, { admin, adminID })
        .then((res) => {
          console.log(res.data?.msg);
          if (res.data?.msg?.activity) {
            setUserAct(res.data?.msg?.activity);
            setUser(res.data?.msg);
          }
          // setUser(res?.data?.all);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="oneBehaviourPage">
      <div className="heading">
        <div className="headTitle">oneBehavioural</div>
        <div className="adminSec">
          <span className="adminText">Welcome {admin}</span>
          <span className="AvatarIcon">
            <Avatar alt={admin} src="/static/images/avatar/3.jpg" />
          </span>
        </div>
      </div>
      <div className="onebehaviourSection">
        <div className="profileStudents">
          <div className="partA">
            <div className="proImg">
              <div className="proAva">
                <Avatar id="proAvaImg" src={user.photoa} />
              </div>
              <div className="proStatus">
                <div className="proName">{user.name}</div>
                <div className="statusName">
                  {userAct[0] ? userAct[0]?.status : ""}
                </div>
              </div>
            </div>
            <div className="proDetail">
              <div className="infoTitle">Information</div>
              <div className="details">
                <div className="detailsA">
                  <div className="objKey">Name</div>
                  <div className="objVal">: {user.name}</div>
                </div>
                <div className="detailsA">
                  <div className="objKey">Gender</div>
                  <div className="objVal">: {user.gender}</div>
                </div>
                <div className="detailsA">
                  <div className="objKey">DOB</div>
                  <div className="objVal">: {user.dob}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="partB">
            <div className="activityTitle">Activity</div>
            {userAct.length &&
              userAct.map((data) => {
                return (
                  <div className="activityDiv">
                    <span className="bigA">
                      <Avatar alt={"h"} src={user.photoa} />
                    </span>
                    <span className="bigB">
                      {user.name} was &nbsp;
                      <span className="statusActive">{data.status}</span>,
                      {data.activitycur} in the &nbsp;
                      <span className="spanArea">{data.area}</span>, recorded by
                      camId &nbsp;
                      <span className="spanCam">{data.cam}</span> &nbsp;at
                      &nbsp;
                      <span className="spanTime">{data.time}</span>
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
