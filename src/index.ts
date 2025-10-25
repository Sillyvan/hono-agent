import { Hono } from "hono";
import { MyAgent } from "./agent";
import { agentsMiddleware } from "hono-agents";

export { MyAgent };

const app = new Hono();
app.use("*", agentsMiddleware());

app.get("/", (c) => {
  return c.text("Hello World!");
});

export default app;
