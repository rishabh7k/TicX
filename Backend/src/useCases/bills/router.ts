import express, { Request, Response } from "express";
import BillsService from "./service.js";
import { BillDto } from "./models.js";

const billsRouter = express.Router();

billsRouter.post("/add", async (req: Request, res: Response) => {
  try {
    const bill: BillDto = req.body;
    await BillsService.addBill(bill);
    res.status(200).json({ success: "Bill Added successfully" });
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
