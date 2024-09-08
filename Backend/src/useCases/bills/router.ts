import express, { Request, Response } from "express";
import BillsService from "./service.js";
import { Bill, BillDto } from "./models.js";

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
    try {
      const { ticket_id, bill_id } = req.params;
      const bill = await BillsService.fetchUnique(ticket_id, bill_id);
      res.status(200).json(bill);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching tickets." });
    }
  }
);

billsRouter.post("/update", async (req: Request, res: Response) => {
  try {
    const bill: Bill = req.body;
    await BillsService.updateBill(bill);
    res.status(200).json({ success: "Bill updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching tickets." });
  }
});

export default billsRouter;
