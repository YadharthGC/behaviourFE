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

export default function BehaviourPage() {
  const [user, setUser] = useState([]);
  const admin = window.localStorage.getItem("admin");
  const adminID = window.localStorage.getItem("adminID");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    console.log(params);
    handleGetUsers();
    let initialize = setInterval(handleGetUsers, 3000);
    if (
      !params["*"].includes("behaviour") ||
      params["*"].includes("onebehaviour")
    ) {
      clearInterval(initialize);
    }
  }, []);

  const handleGetUsers = () => {
    try {
      axios
        .get(`${renderhost}/behave`, { admin, adminID })
        .then((res) => {
          console.log(res.data);
          setUser(res?.data?.all);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  // "SittingInChair&Active", "Bitting", "Fighting", "Running", "SittingInChair&IN-Active", "HandFlapping

  return (
    <div id="behaviourPage">
      <div className="heading">
        <div className="headTitle">Behavioural</div>
        <div className="adminSec">
          <span className="adminText">Welcome {admin}</span>
          <span className="AvatarIcon">
            <Avatar alt={admin} src="/static/images/avatar/3.jpg" />
          </span>
        </div>
      </div>
      <div className="behaviourSection">
        <div className="allTextDiv">
          <div className="userTextField">
            <TextField
              id="standard-basic"
              label="Search"
              variant="standard"
              onChange={(e) => {}}
            />
          </div>
        </div>
        <div className="allTableDiv">
          <div className="allTableHead">
            <div className="imgTitle">Image</div>
            <div className="idTitle">CamID</div>
            <div className="personTitle">Person</div>
            <div className="timeTitle">Timing</div>
            <div className="actionTitle">Action</div>
          </div>
          <div className="allTableBody">
            {user.length &&
              user.map((data) => {
                return (
                  <div
                    className="bodyPart"
                    onClick={() => {
                      navigate(`../onebehaviour/${data._id}`);
                    }}
                  >
                    <div className="imgAns">
                      <img
                        alt={"none"}
                        src={data.photoa}
                        className="entryUserImg crowd"
                        onClick={() => {}}
                      />
                    </div>
                    <div className="camAns">{data?.activity[0].cam}</div>
                    <div className="nameAns">{data.name}</div>
                    <div className="timeAns">
                      <div>{data?.activity[0].cam}</div>
                      <div>2024-12-12</div>
                    </div>

                    <div className="actionAns">{data?.activity[0].status}</div>
                  </div>
                );
              })}
            {/* {user.map((data) => {
              return (
                <div className="bodyPart">
                  <div className="imgAns">
                    <img
                      alt={"none"}
                      src={blank}
                      className="entryUserImg crowd"
                      onClick={() => {}}
                    />
                  </div>
                  <div className="camAns">{data.camID}</div>
                  <div className="nameAns">{data.name}</div>
                  <div className="timeAns">
                    <div>11.00pm</div>
                    <div>2024-12-12</div>
                  </div>

                  <div className="actionAns">Active</div>
                </div>
              );
            })} */}
          </div>
        </div>
        {/* <div className="gridDiv">
          <Grid container columnSpacing={1}>
            <Grid item md={9}>
              <div className="notifications">
                <div className="bodyCon">
                  <div className="conA">
                    <div className="accountGrp">
                      <div className="accDiv">
                        <Avatar alt={admin} src="/static/images/avatar/3.jpg" />
                      </div>
                      <div className="accText">
                        Hari Yadharth
                        <br />
                        Detected on cam4
                      </div>
                    </div>
                    <div className="actionDiv">Running</div>
                  </div>
                  <div className="conB"> 1hr ago</div>
                </div>
              </div>
            </Grid>
            <Grid item md={3}>
              <div className="notifications"></div>
            </Grid>
          </Grid>
        </div> */}
      </div>
    </div>
  );
}
