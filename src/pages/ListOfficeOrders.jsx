import React from "react";
import OfficeOrderTable from "../components/OfficeOrderTable";
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
    <div className="bg-yellow-50 h-screen">

    <div className="flex py-4">
      <OfficeOrderTable data={LTCOfficeOrders} name="LTC Office Orders"/>
      <OfficeOrderTable data={TAOfficeOrders} name="TA Office Orders"/>
    </div>
    </div>
  );
} 
