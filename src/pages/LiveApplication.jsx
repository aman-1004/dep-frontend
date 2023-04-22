import React from "react";
import LiveTable from "../components/LiveTable";
import { useState, useEffect } from "react";
import { taInfo } from "../dummy/taInfos";

export default function LiveApplication() {
  const [liveApplications, setLiveApplications] = useState(taInfo);
  const handleList = (data) => {
    setLiveApplications(data);
  };
  useEffect(() => {
    fetch("/api/listLiveLTCApplications", {
      method: "POST",
    })
      .then((res) => res.json())
      .then(handleList);
  },[]);
  return <LiveTable data={liveApplications} />;
}
