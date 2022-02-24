import { FastifyPluginAsync, FastifyRequest, FastifyReply } from "fastify";
import { Kindergarden } from "../models/Kindergarden.models";
import { Match } from "../models/Match.models";
import { Nanny } from "../models/Nanny.model";
import { Parent } from "../models/Parent.models";

const new_match = async (
  request: FastifyRequest<{
    Body: {
      nannyId?: string;
      kindergardenId?: string;
      parentId: string;
      totalprice: number;
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
