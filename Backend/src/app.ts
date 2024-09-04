import express, { Express, Request, Response } from "express";
import prisma from "./database/service.js";
import usersRouter from "./useCases/users/router.js";
import ticketsRouter from "./useCases/tickets/router.js";
import authenticateRouter from "./authentication/router.js";
import { middleware } from "./middleware/service.js";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 4334;
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(middleware);
app.get("/", async (req: Request, res: Response) => {
  const users = await prisma.tbldevicevendors.findMany();
  res.send(users);
});

app.use("/users", usersRouter);
app.use("/tickets", ticketsRouter);
app.use("/authenticate", authenticateRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
