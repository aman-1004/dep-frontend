import React from "react";
import OfficeOrderTable from "../components/officeOrderTable";
import { useState } from "react";
import { useEffect } from "react";

export default function ListOfficeOrders() {
  const [LTCOfficeOrders, setLTCOfficeOrders] = useState([]);
  const [TAOfficeOrders, setTAOfficeOrders] = useState([]);

  const handleLTCList = (data) => {
    setLTCOfficeOrders(data);
  };
  const handleTAList = (data) => {
    setTAOfficeOrders(data);
  };

  useEffect(() => {
    fetch("/api/listLTCOfficeOrders", {
      method: "POST",
    })
      .then((res) => res.json())
      .then(handleLTCList);

    fetch("/api/listTAOfficeOrders", {
      method: "POST",
    })
      .then((res) => res.json())
      .then(handleTAList);
  }, []);

  return (
    <>
      <OfficeOrderTable data={LTCOfficeOrders} name="LTC Office Orders" />;
      <OfficeOrderTable data={TAOfficeOrders} name="TA Office Orders"/>;
    </>
  );
} 
