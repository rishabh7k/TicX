import express, { Request, Response } from "express";
import Users from "../useCases/users/models.js";
import AuthenticationService from "./service.js";

const authenticateRouter = express.Router();

authenticateRouter.post("/", async (req: Request, res: Response) => {
  try {
    const userDetails: Users = req.body;
    const authResponse = await AuthenticationService.authorize(userDetails);
    res.json(authResponse);
  } catch (e) {
    res.status(500).json({ error: `internal server error ${e}` });
  }
});

export default authenticateRouter;
