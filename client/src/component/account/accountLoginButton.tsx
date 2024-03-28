import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "primeicons/primeicons.css";

export default function AccountLoginButton() {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  const handleAccountLogin = () => {
    loginWithRedirect();
  };

  if (isAuthenticated) {
    return (
      <div>        
        <Link to="/account" className="no-underline">
          <span className="pi pi-user" style={{ fontSize: "1.5rem" }}></span>
        </Link>
      </div>
    );
  }

  return (
    <Link to="/account" className="no-underline">
      <span
        className="pi pi-user"
        style={{ fontSize: "1.5rem" }}
        onClick={handleAccountLogin}
      ></span>
    </Link>
  );
}
