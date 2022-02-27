import { FastifyPluginAsync } from "fastify";
import { child_router } from "./routers/child.router";
import { kindergarden_router } from "./routers/kindergarden.router";
import { nanny_router } from "./routers/nanny.router";
import { parent_router } from "./routers/parent.router";
import { match_router } from "./routers/match.router";
import mongoose from "mongoose";
import { DB_URL, DB_NAME } from "./config";

export const main_app: FastifyPluginAsync = async (app) => {
  await mongoose.connect(`${DB_URL}/${DB_NAME}`);

  app.register(nanny_router, { prefix: "/nanny" });
  app.register(parent_router, { prefix: "/parent" });
  app.register(child_router, { prefix: "/child" });
  app.register(kindergarden_router, { prefix: "/kindergarden" });
  app.register(match_router, { prefix: "/match" });
};
