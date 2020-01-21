import React, { useState, useEffect } from "react";
import axios from "axios";
import DonationButton from "../components/DonationButton";
import "./styles/CampaignPageById.scss";
const { apiCall } = require("../conf");

export default function CampaignPageById(props) {
  const [campaignInfo, setCampaignInfo] = useState([]);

  useEffect(() => {
    axios.get(`${apiCall}/campaign/${props.match.params.id}`).then(res => {
      setCampaignInfo(res.data[0]);
    });
  }, [props.match.params.id]);

  return (
    <div className="campaignPage">
      <div className="infoProfilePage center">
        <img
          className="profileImage"
          src={campaignInfo.img}
          alt={campaignInfo.name}
        />
        ​
        <div className="infoContainer">
          <div className="firstContainer">
            <h2>{campaignInfo.name}</h2>
            <div className="profileTag">
              <img src="https://via.placeholder.com/50x50" alt="Tag" />
              <img src="https://via.placeholder.com/50x50" alt="Tag" />
              <img src="https://via.placeholder.com/50x50" alt="Tag" />
            </div>
          </div>
          ​<p className="resumeInfoPage">{campaignInfo.resume}</p>
        </div>
      </div>
      <div className="donationButton">
        <DonationButton
          value={campaignInfo.value1 + " €"}
          action={"Je donne !"}
        />
        <DonationButton
          value={campaignInfo.value2 + " €"}
          action={"Je donne !"}
        />
        <DonationButton
          value={campaignInfo.value3 + " €"}
          action={"Je donne !"}
        />
        <DonationButton
          value="Je ne veux pas donner"
          action={"Je participe !"}
        />
      </div>
    </div>
  );
}