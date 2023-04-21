import React from "react";
import Input from "./Input";

export default function AccountsTaRow(props) {
  const { serialNo, particulars, name, type } = props;
  return (
    <>
      <tr>
        <th>{serialNo}</th>
        <th>{particulars}</th>
        <td>
          <Input name={name} type={type}  />
        </td>
        
      </tr>
    </>
  );
}
