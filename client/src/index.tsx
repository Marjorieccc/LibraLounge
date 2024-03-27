import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import HomePage from "./pages/home";
import HomeContent from "./pages/homeContent";
import ExplorePage from "./pages/explore";
import ResourceDetailPage from "./pages/resourceDetail";
import "./index.css";

import auth0ConfigJson from "./auth_config.json";

const auth0Config = {
  domain: auth0ConfigJson.domain,
  clientId: auth0ConfigJson.clientId,
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <Auth0Provider {...auth0Config}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomeContent />} />
          <Route path="explore" element={<ExplorePage />} />
          <Route
            path="resource/:resource_id"
            element={<ResourceDetailPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </Auth0Provider>,
);
