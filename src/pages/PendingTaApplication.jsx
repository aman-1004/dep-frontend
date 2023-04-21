import React ,{useState}from 'react'
import { taInfo } from "../dummy/taInfos";
import PendingTaTable from "../components/PendingTaTable.jsx";
import { useEffect } from "react";

export default function PendingTaApplication() {

  const getTaData = () => {
    fetch("/api/listPendingTAApplication", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setPendingTaList(data));
  };
  useEffect(()=>{
    getTaData()
  }, [])
  getTaData()
  const [pendingTaList, setPendingTaList] = useState(taInfo);
  //   return <>Pending Application</>;

  return 
    (
       <PendingTaTable data={pendingTaList} />
    );
      
    

}
