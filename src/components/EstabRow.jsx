import React from "react";
import Input from "./Input";

export default function EstabRow(props) {
  const { serialNo, particulars, name, type, dataOld, dataNew } = props;
  return (
    <>
      <tr>
        <th>{serialNo}</th>
        <th className=" font-semibold">{particulars}</th>
        <td>
          <Input name={"last" + name} type={type} value={dataOld} />
        </td>
        <td>
          <Input name={"current" + name} type={type} value={dataNew} />
        </td>
      </tr>
    </>
  );
}
