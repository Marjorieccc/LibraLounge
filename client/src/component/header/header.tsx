import React, { useState } from "react";
import Title from "./title";
import NavBar from "../navbar/navBar";
import SearchBar from "../searchBar/searchBar";
import AccountLoginButton from "../account/accountLoginButton";
import ReserveCheckButton from "../account/reserveCheckButton";
import LogoutBtn from "../account/LogoutBtn";

import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className="fixed top-0 z-10 w-full border-b border-gray-400 bg-white">
      <div className="container mx-auto flex items-center justify-between space-x-4 py-4">
        <Title />
        <div className="flex-grow"></div>
        <div className="flex flex-grow items-center space-x-4">
          <SearchBar />
          <span>{isAuthenticated ? user && user.name : "Guest "} </span>
          <AccountLoginButton />
          {/* <ReserveCheckButton /> */}
          {isAuthenticated && <LogoutBtn />}
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between space-x-4 py-1">
        <NavBar />
      </div>
    </div>
  );
}
