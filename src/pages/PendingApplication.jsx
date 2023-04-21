import React, { useState } from "react";
import { ltcInfo } from "../dummy/ltcInfos";
import PendingTable from "../components/PendingTable";
import { useEffect } from "react";

export default function PendingApplication() {
  const getData = () => {
    fetch("/api/listPendingLTCApplication", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setPendingList(data));
  };
  useEffect(() => {
    getData();
  }, []);
  getData();
  const [pendingList, setPendingList] = useState(ltcInfo);
  //   return <>Pending Application</>;

  return (
    <>
      <PendingTable data={pendingList} />
    </>
  );
}
