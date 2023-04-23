import React from "react";
import LiveTaTable from "../components/LiveTaTable";
import { useState, useEffect } from "react";
import { taInfo } from "../dummy/taInfos";

export default function LiveTaApplication() {
  const [liveTaApplications, setLiveTaApplications] = useState(taInfo);
  const handleTaList = (data) => {
    setLiveTaApplications(data);
  };
  useEffect(() => {
    fetch("/api/listLiveTAApplications", {
      method: "POST",
    })
      .then((res) => res.json())
      .then(handleTaList);
  },[]);

  return <LiveTaTable data={liveTaApplications} />;
}
