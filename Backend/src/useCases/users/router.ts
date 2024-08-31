import express, { Request, Response } from "express";
import Users from "./models.js";
import prisma from "../../database/service.js";
import AuthenticationService from "../../authentication/service.js";

const usersRouter = express.Router();

usersRouter.post("/authenticate", async (req: Request, res: Response) => {
  try {
    const userDetails: Users = req.body;
    const user = await prisma.tblusers.findUnique({
      where: {
        user_id: userDetails.user_id,
      },
    });
    if (user && isUsers(user)) {
      const authResponse = AuthenticationService.authorize(userDetails, user);
      res.json(authResponse);
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (e) {
    res.status(500).json({ error: `internal server error ${e}` });
  }
});

function isUsers(obj: any): obj is Users {
  return (
    obj && typeof obj.user_id === "string" && typeof obj.password === "string"
  );
}

export default usersRouter;
