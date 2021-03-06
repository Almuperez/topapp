import { FastifyPluginAsync } from "fastify";
import { child_router } from "./routers/child.router";
import { kindergarden_router } from "./routers/kindergarden.router";
import { nanny_router } from "./routers/nanny.router";
import { parent_router } from "./routers/parent.router";
import { match_router } from "./routers/match.router";
import { main_router } from "./routers/main_routers";
import connectDB from "./lib/db";
import { AUTH0 } from "./config";
import fastifyAuth0Verify from "fastify-auth0-verify";
import fastifyCors from "fastify-cors";
import blipp from "fastify-blipp";

export const main_app: FastifyPluginAsync = async (app) => {
  console.log("comprobando api");
  connectDB();
  //blipp sirve para ver en la terminal a que ruta se llama
  await app.register(blipp);
  //capa de seguridad extra, si no lo pones te indica el error dominios cruzados.
  await app.register(fastifyCors);

  await app.register(fastifyAuth0Verify, {
    domain: AUTH0.DOMAIN,
    audience: AUTH0.AUDIENCE,
  });

  app.get("/verify", {
    handler(request, reply) {
      reply.send(request.user);
    },
    preValidation: app.authenticate,
  });

  app.register(main_router);
  app.register(nanny_router, { prefix: "/nanny" });
  app.register(parent_router, { prefix: "/parent" });
  app.register(child_router, { prefix: "/child" });
  app.register(kindergarden_router, { prefix: "/kindergarden" });
  app.register(match_router, { prefix: "/match" });

  app.blipp();
};
