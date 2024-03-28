import { Request, Response, NextFunction } from "express";
const { expressjwt: expressJwt } = require("express-jwt");
const jwks = require("jwks-rsa");

import auth0ConfigJson from "./auth_config.json";

const verifyJwt = expressJwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: auth0ConfigJson.jwksUri,
  }),
  audience: auth0ConfigJson.audience,
  issuer: auth0ConfigJson.issuer,
  algorithms: ["RS256"],
});

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  verifyJwt(req, res, (err: any) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ message: "Invalid token" });
    }

    next();
  });
}
