import { useState } from "react";
import RegisterUser from "../components/RegisterUser.jsx";
import GenerateDiscount from "../components/GenerateDiscount.jsx";
import LoginUser from "../components/LoginUser.jsx";

const HomePage = () => {
  const [userId, setUserId] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center mx-auto">
      <h1 className="text-3xl font-semibold mb-5">
        Discount Management System
      </h1>
      {!userId && (
        <>
          {!isLogin && <RegisterUser setUserId={setUserId} />}
          {isLogin && <LoginUser setUserId={setUserId} />}

          <div className="mt-3 text-slate-500 ">
            <button
              className=""
              onClick={() => setIsLogin((prevState) => !prevState)}
            >
              {isLogin ? "register" : "Login"}
            </button>
          </div>
        </>
      )}
      {userId && (
        <>
          <GenerateDiscount userId={userId} setUserId={setUserId} />
        </>
      )}
    </div>
  );
};

export default HomePage;
