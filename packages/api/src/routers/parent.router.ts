import { FastifyPluginAsync, FastifyRequest, FastifyReply } from "fastify";
import { Child } from "../models/Child.model";
import { Match } from "../models/Match.models";
import { Parent } from "../models/Parent.models";

const list_parents = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const parents = await Parent.find().lean();
    reply.code(200).send(parents);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

//el tipo de request es un fastyfy request pero tiene params.
const get_parent_byId = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const parent = await Parent.findById(request.params.id).lean();
    reply.code(200).send(parent);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

//el body serán los imput que tendre que rellenar en foumulario
const new_parent = async (
  request: FastifyRequest<{
    Body: {
      name: string;
      location: string;
      phone: number;
      email: string;
      otherInformation: string;
    };
  }>,
  reply: FastifyReply
) => {
  try {
    const newParent = await Parent.create(request.body);
    reply.code(200).send(newParent);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

const update_parent_by_id = async (
  request: FastifyRequest<{
    Params: { id: string };
    Body: {
      name: string;
      location: string;
      phone: number;
      email: string;
      otherInformation: string;
    };
  }>,
  reply: FastifyReply
) => {
  try {
    const updatedParent = await Parent.findByIdAndUpdate(
      request.params.id,
      request.body
    );
    reply.code(200).send(updatedParent);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

const delete_parent_by_id = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const deletedParent = await Parent.findByIdAndDelete(request.params.id);
    //in quiere decir buscame
    await Child.deleteMany({
      id: { $in: deletedParent?.childrenIds },
    });
    await Match.deleteMany({
      parentId: deletedParent?._id,
    });

    reply
      .code(200)
      .send({ message: "Everything with parent has been deleted" });
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

export const parent_router: FastifyPluginAsync = async (app) => {
  app.get("/", list_parents);
  app.get("/:id", get_parent_byId);
  app.post("/", new_parent);
  app.patch("/:id", update_parent_by_id);
  app.delete("/:id", delete_parent_by_id);
};
