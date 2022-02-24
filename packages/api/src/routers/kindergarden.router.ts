import { FastifyPluginAsync, FastifyRequest, FastifyReply } from "fastify";
import { Kindergarden } from "../models/Kindergarden.models";

const list_kindergarden = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const kindergardens = await Kindergarden.find().lean();
    reply.code(200).send(kindergardens);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

//el tipo de request es un fastyfy request pero tiene params.
const get_kindergarden_byId = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const kindergarden = await Kindergarden.findById(request.params.id).lean();
    reply.code(200).send(kindergarden);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

const new_kindergarden = async (
  request: FastifyRequest<{
    Body: {
      name: string;
      location: string;
      openTime: string;
      closeTime: string;
      priceMonth: number;
      classInfo: string;
      comedor: boolean;
      img: string;
      phone: number;
      email: string;
      capicity: number;
    };
  }>,
  reply: FastifyReply
) => {
  try {
    const newKindergarden = await Kindergarden.create(request.body);
    reply.code(200).send(newKindergarden);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

const update_kindergarden_by_id = async (
  request: FastifyRequest<{
    Params: { id: string };
    Body: {
      name: string;
      location: string;
      openTime: string;
      closeTime: string;
      priceMonth: number;
      classInfo: string;
      comedor: boolean;
      img: string;
      phone: number;
      email: string;
      capicity: number;
    };
  }>,
  reply: FastifyReply
) => {
  try {
    const updatedKindergarden = await Kindergarden.findByIdAndUpdate(
      request.params.id,
      request.body
    );
    reply.code(200).send(updatedKindergarden);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

const delete_kindergarden_by_id = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const deletedkindergarden = await Kindergarden.findByIdAndDelete(
      request.params.id
    );
    reply.code(200).send(deletedkindergarden);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

export const kindergarden_router: FastifyPluginAsync = async (app) => {
  app.get("/", list_kindergarden);
  app.get("/:id", get_kindergarden_byId);
  app.post("/", new_kindergarden);
  app.patch("/:id", update_kindergarden_by_id);
  app.delete("/:id", delete_kindergarden_by_id);
};
