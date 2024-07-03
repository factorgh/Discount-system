/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../services/api";

const GenerateDiscount = ({ userId, setUserId }) => {
  const [code, setCode] = useState("");

  ////Set userId to null after 3 mins
  useEffect(
    function () {
      const timeOut = setTimeout(() => {
        setUserId("");
      }, 120000);

      ///Clean up the timeout
      return clearTimeout(timeOut);
    },
    [setUserId]
  );

  const generateCode = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/discount/create-discount`,
        { userId }
      );
      console.log(response.data);
      setCode(response.data.code);
    } catch (error) {
      console.error("Error generating discount code", error);
    }
  };

  return (
    <div>
      <button onClick={generateCode} disabled={!userId}>
        Generate Discount Code
      </button>
      {code && <p>Generated Discount Code: {code}</p>}
    </div>
  );
};

export default GenerateDiscount;
