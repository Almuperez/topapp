import { FastifyPluginAsync, FastifyRequest, FastifyReply } from "fastify";
import { Nanny, Day } from "../models/Nanny.model";

const list_nannies = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const nannies = await Nanny.find().lean();
    reply.code(200).send(nannies);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

//el tipo de request es un fastyfy request pero tiene params.
const get_nanny_byId = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const nanny = await Nanny.findById(request.params.id).lean();
    reply.code(200).send(nanny);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

//new nanny
const new_nanny = async (
  request: FastifyRequest<{
    Body: {
      name: string;
      dateOfBirth: Date;
      gender: boolean;
      location: string;
      availability: [Day];
      priceHour: number;
      img: string;
      phone: number;
      email: string;
    };
  }>,
  reply: FastifyReply
) => {
  try {
    const newNanny = await Nanny.create(request.body);
    reply.code(200).send(newNanny);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

//updatenanny

const update_nanny_by_id = async (
  request: FastifyRequest<{
    Params: { id: string };
    Body: {
      name: string;
      dateOfBirth: Date;
      gender: boolean;
      location: string;
      availability: [Day];
      priceHour: number;
      img: string;
      phone: number;
      email: string;
    };
  }>,
  reply: FastifyReply
) => {
  try {
    const updatedNanny = await Nanny.findByIdAndUpdate(
      request.params.id,
      request.body
    );
    reply.code(200).send(updatedNanny);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

//deletenanny

const delete_nanny_by_id = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const deletedNanny = await Nanny.findByIdAndDelete(request.params.id);
    reply.code(200).send(deletedNanny);
  } catch (error) {
    reply.code(500).send({ message: error });
  }
};

export const nanny_router: FastifyPluginAsync = async (app) => {
  app.get("/", list_nannies);
  //los dos puntos antes del id indican que es un parametro que quiere
  app.get("/:id", get_nanny_byId);
  app.post("/", new_nanny);
  app.patch("/:id", update_nanny_by_id);
  app.delete("/:id", delete_nanny_by_id);
};
