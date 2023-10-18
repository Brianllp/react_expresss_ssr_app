import express from "express";

const app: express.Express = express();
const port: number = 9000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`This app listening on port ${port}`);
});
