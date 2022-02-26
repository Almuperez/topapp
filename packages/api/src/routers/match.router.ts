import { FastifyPluginAsync, FastifyRequest, FastifyReply } from "fastify";
import { Kindergarden } from "../models/Kindergarden.models";
import { Match } from "../models/Match.models";
import { Nanny } from "../models/Nanny.model";
import { Parent } from "../models/Parent.models";

const list_match = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const matchs = await Match.find().lean();
    reply.code(200).send(matchs);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

const get_match_byId = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const match = await Match.findById(request.params.id).lean();
    reply.code(200).send(parent);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

const new_match = async (
  request: FastifyRequest<{
    Body: {
      nannyId?: string;
      kindergardenId?: string;
      parentId: string;
      totalPrice: number;
    };
  }>,
  reply: FastifyReply
) => {
  try {
    if (!request.body.nannyId && !request.body.kindergardenId) {
      reply.code(404).send({ message: "missing service id" });
    }
    const parents = await Parent.findById(request.body.parentId).lean();
    if (!parents) {
      reply.code(404).send({ message: "not found parents" });
    }

    //si no se pone nada a la variable es null
    let serviceId;

    if (request.body.nannyId) {
      const nanny = await Nanny.findById(request.body.nannyId).lean();
      serviceId = nanny?._id;
    } else {
      const kindergarden = await Kindergarden.findById(
        request.body.kindergardenId
      ).lean();

      serviceId = kindergarden?._id;
    }

    if (!serviceId) {
      reply.code(404).send({ message: "service not found" });
    }

    const newMatch = await Match.create(request.body);
    reply.code(200).send(newMatch);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

const update_match_by_id = async (
  request: FastifyRequest<{
    Params: { id: string };
    Body: {
      nannyId: string;
      kindergardenId: string;
      parentId: string;
      totalprice: number;
      hasContacted: boolean;
      hasbooked: boolean;
    };
  }>,
  reply: FastifyReply
) => {
  try {
    const updatedMatch = await Match.findByIdAndUpdate(
      request.params.id,
      request.body
    );
    reply.code(200).send(updatedMatch);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

const delete_match_by_id = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const deletedMatch = await Match.findByIdAndDelete(request.params.id);
    reply.code(200).send(deletedMatch);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

export const match_router: FastifyPluginAsync = async (app) => {
  app.get("/", list_match);
  app.get("/:id", get_match_byId);
  app.post("/", new_match);
  app.patch("/:id", update_match_by_id);
  app.delete("/:id", delete_match_by_id);
};
