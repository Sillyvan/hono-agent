import { Hono } from "hono";
import { MyAgent } from "./agent";

export { MyAgent };

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello World!");
});

export default app;
