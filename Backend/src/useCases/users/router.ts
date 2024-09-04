import express, { Request, Response } from "express";

const usersRouter = express.Router();

usersRouter.post("/register", async (req: Request, res: Response) => {
  try {
    return "under construction";
  } catch (e) {
    res.status(500).json({ error: `internal server error ${e}` });
  }
});

export default usersRouter;
