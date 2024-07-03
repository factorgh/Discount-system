/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../services/api";

const RegisterUser = ({ setUserId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const registerUser = async () => {
    if (!name || !email) return;
    try {
      const response = await axios.post(`${BASE_URL}/api/users/register`, {
        name,
        email,
      });
      console.log(response.data._id);
      setUserId(response.data._id);
    } catch (error) {
      console.error("Error registering user", error);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-[300px]  justify-center">
      <input
        type="text"
        placeholder="Enter username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-slate-200 p-2 rounded-md"
      />
      {!name && <span className="text-red-300">Name is required</span>}
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-slate-200 p-2 rounded-md"
      />
      {!email && <span className="text-red-300">Email is required</span>}
      <div className="w-full flex items-center justify-center">
        <button
          className="w-[100px] h-[50px] bg-orange-300 text-white rounded-full"
          onClick={registerUser}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterUser;
