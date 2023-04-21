import React from "react";
import Input from "./Input";
import EstabRow from "./EstabRow";
import { ltcInfoOld } from "../dummy/ltcInfosOld";
import { ltcInfo } from "../dummy/ltcInfos";

export default function EstabTaTable() {
  const ltcData = ltcInfo[0];
  const ltcDataOld = ltcInfoOld[0];
  return (
    <>
      <ul>
        <li className="py-8 flex space-x-1 items-center">
          <p className="whitespace-nowrap">Certified that Dr./Sri/Smt./Kum</p>
          <Input
            name="name1"
            type="text"
            // value={ltcData.user.firstName +" "+ ltcData.user.lastName}
            value={`${ltcData.user.firstName} ${ltcData.user.lastName}`}
          />
          <p className="whitespace-nowrap">
            has rendered continuous service for one year or more on the date of
            commencing the outward journey.
          </p>
        </li>
        <li>
          Certified that necessary entries as required under Para 3 of the
          Ministry of Home Affairs Para O.M. No. 43/1/55.Est.(A).Pt.II dated
          11th October, 1956 has been made in the Service Book of Dr. /Sri/Smt.
          <Input
            name="name2"
            type="text"
            value={ltcData.user.firstName + " " + ltcData.user.lastName}
          />
          .
        </li>
      </ul>
    </>
  );
}
