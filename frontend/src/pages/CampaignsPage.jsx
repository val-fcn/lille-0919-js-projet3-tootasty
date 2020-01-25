import React, { useState, useEffect } from "react";
import CampaignCard from "../components/CampaignCard";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import "./styles/CampaignsPage.scss";

const { apiCall } = require("../conf");

export default function CampaignPage() {
  const dispatch = useDispatch();
  const campaigns = useSelector(state => state.campaignsInfo);
  const [totalCampaign, setTotalCampaign] = useState([]);
  const [showOngoing, toggleShowOngoing] = useState(true);

  useEffect(() => {
    axios
      .get(
        `${apiCall}/campaign/total${
          showOngoing ? "?inProgress=true" : "?done=true"
        }`
      )
      .then(res => setTotalCampaign(res.data[0]));
  }, [showOngoing]);

  useEffect(() => {
    axios.get(`${apiCall}/campaign`).then(({ data }) => {
      dispatch({ type: "GET_CAMPAIGNS_INFO", data });
    });
  }, [dispatch]);

  return (
    <div className="campaignsPage">
      <div className="campaignHero">
        <img className="CampaignBanner" src="./img/campaignBanner.png"></img>
        <h2 className="campaignHerotagline">Lorem pour donner envie</h2>
      </div>

      <div className="topContent">
        <div className="selectContent">
          <div
            className={showOngoing ? "inProgressStatus" : "unselected"}
            onClick={() => {
              toggleShowOngoing(true);
            }}
          >
            <div
              className={showOngoing ? "inProgressStatus" : "unselected"}
            ></div>
            <p id="inProgress"> Rencontres en cours</p>
          </div>
          <div
            className={showOngoing ? "unselected" : "doneStatus"}
            onClick={() => {
              toggleShowOngoing(false);
            }}
          >
            <div className={showOngoing ? "unselected" : "doneStatus"}></div>
            <p id="done">Rencontres terminées</p>
          </div>
        </div>

        <div
          className={
            showOngoing ? "totalInprogressCampaign" : "totalDoneCampaign"
          }
        >
          <p className="totalCamp">{totalCampaign.total}</p>
          <p className="campaignStatus">
            campagnes <br /> {showOngoing ? "en cours" : "terminées"}
          </p>
        </div>
      </div>

      <div className="cardContainer">
        {campaigns
          .filter(campaign => {
            return showOngoing === campaign.dateDiff > 0;
          })
          .map((campaign, key) => {
            return (
              <CampaignCard
                classname={showOngoing ? "Inprogress" : "done"}
                key={key}
                {...campaign}
              />
            );
          })}
      </div>
    </div>
  );
}
