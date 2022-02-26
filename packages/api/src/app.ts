import { FastifyPluginAsync } from "fastify";
import { child_router } from "./routers/child.router";
import { kindergarden_router } from "./routers/kindergarden.router";
import { nanny_router } from "./routers/nanny.router";
import { parent_router } from "./routers/parent.router";
import { match_router } from "./routers/match.router";

export const main_app: FastifyPluginAsync = async (app) => {
  app.register(nanny_router);
  app.register(parent_router);
  app.register(child_router);
  app.register(kindergarden_router);
  app.register(match_router);
};
