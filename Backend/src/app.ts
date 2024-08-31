import express, { Express, Request, Response } from "express";
import prisma from "./database/service.js";
import usersRouter from "./useCases/users/router.js";
import { middleware } from "./middleware/service.js";

const app: Express = express();
const port = process.env.PORT || 4334;

app.use(express.json());
app.use(middleware);
app.get("/", async (req: Request, res: Response) => {
  const users = await prisma.tbldevicevendors.findMany();
  res.send(users);
});

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
