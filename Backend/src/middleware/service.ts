import { Request, Response, NextFunction } from "express";
import AuthenticationService from "../authentication/service.js";

export const middleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const exemptRoutes = ["/authenticate"];
  if (exemptRoutes.includes(req.path)) {
    return next();
  }
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      res.status(500).json({ error: "Bearer token is required" });
    }
    const token =
      authHeader && authHeader.startsWith("Bearer ")
        ? authHeader.slice(7)
        : null;

    if (token && AuthenticationService.validate(token)) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.error("Authorization error:", error);
    res.sendStatus(500);
  }
};
