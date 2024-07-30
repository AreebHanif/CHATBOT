import React from "react";

export default function Res({ response, type }) {
  return (
    <>
      <div>
        <li className={type}>
          <div dangerouslySetInnerHTML={{ __html: response }}></div>
        </li>
      </div>
    </>
  );
}
