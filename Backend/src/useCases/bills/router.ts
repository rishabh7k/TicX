import express, { Request, Response } from "express";

const billsRouter = express.Router();

billsRouter.post("/add/:ticket_id", async (req: Request, res: Response) => {
  try {
    const { ticket_id } = req.params;
  } catch (e) {
    res.status(500).json({ error: `Internal Server Error: ${e}` });
  }
});

billsRouter.post(
  "/fetch/:ticket_id/:bill_id",
  async (req: Request, res: Response) => {
    const { ticket_id, bill_id } = req.params;
    try {
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching tickets." });
    }
  }
);

export default billsRouter;
