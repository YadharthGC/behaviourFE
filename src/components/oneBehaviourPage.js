import React from "react";
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

export default function OneBehaviourPage() {
  const admin = window.localStorage.getItem("admin");
  const adminID = window.localStorage.getItem("adminID");

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
                <Avatar id="proAvaImg" />
              </div>
              <div className="proStatus">
                <div className="proName">Hari Yadharth</div>
                <div className="statusName">Active</div>
              </div>
            </div>
            <div className="proDetail">
              <div className="infoTitle">Information</div>
              <div className="details">
                <div className="detailsA">
                  <div className="objKey">Name</div>
                  <div className="objVal">: Hari Yadharth GC</div>
                </div>
                <div className="detailsA">
                  <div className="objKey">Gender</div>
                  <div className="objVal">: Male</div>
                </div>
                <div className="detailsA">
                  <div className="objKey">DOB</div>
                  <div className="objVal">: June 06,2000</div>
                </div>
              </div>
            </div>
          </div>
          <div className="partB">
            <div className="activityTitle">Activity</div>
            <div className="activityDiv">
              <span className="bigA">
                <Avatar alt={"h"} />
              </span>
              <span className="bigB">
                Hari was &nbsp;
                <span className="statusActive">active</span>, eating in the{" "}
                &nbsp;<span className="spanArea">dinning area</span>, recorded
                by camId &nbsp;<span className="spanCam">3456</span> &nbsp;at
                &nbsp;
                <span className="spanTime">3:05 pm.</span>
              </span>
            </div>
            <div className="activityDiv">
              <span className="bigA">
                <Avatar alt={"h"} />
              </span>
              <span className="bigB">
                Hari was &nbsp;
                <span className="statusActive">active</span>, studying in the{" "}
                &nbsp;<span className="spanArea">study room</span>, recorded by
                camId &nbsp;<span className="spanCam">3456</span> &nbsp;at
                &nbsp;
                <span className="spanTime">3:05 pm.</span>
              </span>
            </div>
            <div className="activityDiv">
              <span className="bigA">
                <Avatar alt={"h"} />
              </span>
              <span className="bigB">
                Hari was &nbsp;
                <span className="statusActive">inactive</span>, sleeping in the{" "}
                &nbsp;<span className="spanArea">study room</span>, recorded by
                camId &nbsp;<span className="spanCam">3456</span> &nbsp;at
                &nbsp;
                <span className="spanTime">3:05 pm.</span>
              </span>
            </div>
            <div className="activityDiv">
              <span className="bigA">
                <Avatar alt={"h"} />
              </span>
              <span className="bigB">
                Hari was &nbsp;
                <span className="statusActive">inactive</span>, sitting in the{" "}
                &nbsp;<span className="spanArea">bench</span>, recorded by camId
                &nbsp;<span className="spanCam">3456</span> &nbsp;at &nbsp;
                <span className="spanTime">3:05 pm.</span>
              </span>
            </div>
            <div className="activityDiv">
              <span className="bigA">
                <Avatar alt={"h"} />
              </span>
              <span className="bigB">
                Hari was &nbsp;
                <span className="statusActive">active</span>, running in the{" "}
                &nbsp;<span className="spanArea">hall area</span>, recorded by
                camId &nbsp;<span className="spanCam">3456</span> &nbsp;at
                &nbsp;
                <span className="spanTime">3:05 pm.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
