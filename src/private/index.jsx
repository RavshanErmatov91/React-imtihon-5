// import React, { useEffect , useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";
import { setAuth } from "../hooks/useAuth";
const Private = () => {
  const auth = setAuth();

  console.log(auth);

  return (
    <>
      {auth ? (
        <>
          <Header />
          <main>
            <div className="container">
              <Outlet />
            </div>
          </main>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Private;
