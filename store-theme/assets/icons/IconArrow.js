import React from "react";

export default function IconArrow({pointArrow}) {
  return (
    <>
      {pointArrow === "right" && (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.25 16.5L13.75 11L8.25 5.5"
            stroke="#3A3A3A"
            stroke-width="1.9"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
      {pointArrow === "left" && (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.75 16.5L8.25 11L13.75 5.5"
            stroke="#3A3A3A"
            stroke-width="1.9"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
      {pointArrow === "top" && (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 13.75L11 8.25L5.5 13.75"
            stroke="#3A3A3A"
            stroke-width="1.9"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </>
  );
}
