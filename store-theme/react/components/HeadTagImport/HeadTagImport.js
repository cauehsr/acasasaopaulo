import React, { useEffect } from "react";

const HeadTagImport = () => {
  useEffect(() => {
    document.head.innerHTML += `
          <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        `;
  }, []);

  return true;
};
export default HeadTagImport;
