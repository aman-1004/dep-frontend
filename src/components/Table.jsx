import React, { useRef } from "react";
import Input from "./Input";

function getStr(value) {
  return `${value}`;
}

export default function Table({ fields, data, setData, readOnly = false }) {
  const newRef = useRef(null);
  console.log(data);
  const addNewRow = () => {
    console.log("New Row");
    const inputs = [...newRef.current.querySelectorAll("input")];
    const newRow = Object.fromEntries(
      new Map(
        inputs.map((input) => {
          let out = [0, 0];
          out[0] = input.name;

          if (input.type == "checkbox") {
            out[1] = input.checked ? "YES" : "NO";
            input.checked = false;
          } else out[1] = input.value;
          input.value = "";

          return out;
        })
      )
    );
    setData((data) => [...data, newRow]);
    console.log(newRow);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            {fields.map((field) => (
              <th>{field.heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              {fields.map((field) => (
                <td>
                  {getStr(
                    item[
                      field.stateKey
                        ? field.stateKey
                        : field.heading.replaceAll(" ", "_").toLowerCase()
                    ]
                  )}
                </td>
              ))}
            </tr>
          ))}
          {!readOnly && (
            <tr ref={newRef}>
              {fields.map((field) => (
                <td>
                  <Input
                    type={field.type}
                    name={
                      field.stateKey
                        ? field.stateKey
                        : field.heading.replaceAll(" ", "_").toLowerCase()
                    }
                  />
                </td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
      {!readOnly && (
        <button type="button" onClick={addNewRow}>
          Add New Row
        </button>
      )}
    </>
  );
}
