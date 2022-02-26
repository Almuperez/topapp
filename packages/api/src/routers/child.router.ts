import { FastifyReply, FastifyRequest, FastifyPluginAsync } from "fastify";
import { Child } from "../models/Child.model";
import { Parent } from "../models/Parent.models";

const list_child = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const children = await Child.find().lean();
    reply.code(200).send(children);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

const get_child_byId = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const child = await Child.findById(request.params.id).lean();
    reply.code(200).send(child);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

const new_child = async (
  request: FastifyRequest<{
    Body: {
      name: string;
      dateOfBirth: Date;
      gender: boolean;
      otherInformation: [string];
      parentId: string;
    };
  }>,
  reply: FastifyReply
) => {
  try {
    const parents = await Parent.findById(request.body.parentId).lean();
    if (!parents) {
      reply.code(404).send({ message: "not found parents" });
    }

    //hacemos destructurin para guardar todo menos el parentID
    const { parentId, ...child } = request.body;
    const newChild = await Child.create(child);
    await Parent.findByIdAndUpdate(
      //usamos push cuando la propiedad es un array, para añadir el new child al parent buscando por el parentId

      request.body.parentId,
      { $push: { childrenIds: newChild?._id } }
    );

    //pedimos que devuelva todo, hijo con id y parent id

    reply.code(200).send({ ...newChild, parentId: request.body.parentId });
  } catch (error) {}
};

const update_child_by_id = async (
  request: FastifyRequest<{
    Params: { id: string };
    Body: {
      name: string;
      dateOfBirth: Date;
      gender: boolean;
      otherInformation: string;
    };
  }>,
  reply: FastifyReply
) => {
  try {
    const updatedChild = await Child.findByIdAndUpdate(
      request.params.id,
      request.body
    );
    reply.code(200).send(updatedChild);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

const delete_child_by_id = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const deletedChild = await Child.findByIdAndDelete(request.params.id);
    reply.code(200).send({ message: "child deleted" });
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

export const child_router: FastifyPluginAsync = async (app) => {
  app.get("/", list_child);
  app.get("/:id", get_child_byId);
  app.post("/", new_child);
  app.patch("/:id", update_child_by_id);
  app.delete("/:id", delete_child_by_id);
};
