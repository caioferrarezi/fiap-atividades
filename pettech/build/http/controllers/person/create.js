"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/http/controllers/person/create.ts
var create_exports = {};
__export(create_exports, {
  create: () => create
});
module.exports = __toCommonJS(create_exports);

// src/use-cases/CreatePerson.ts
var CreatePersonUseCase = class {
  constructor(personRepository) {
    this.personRepository = personRepository;
  }
  handler(person) {
    return this.personRepository.create(person);
  }
};

// src/repositories/Person.repository.ts
var PersonRepository = class {
  async findById(id) {
    return {
      id,
      cpf: "12345678901",
      name: "Jo\xE3o",
      birth: /* @__PURE__ */ new Date(),
      email: "joao@email.com",
      user_id: 1
    };
  }
  async create(person) {
    return person;
  }
};

// src/http/controllers/person/create.ts
var import_zod = require("zod");
async function create(request, reply) {
  const registerBodySchema = import_zod.z.object({
    cpf: import_zod.z.string().min(11).max(14),
    name: import_zod.z.string(),
    birth: import_zod.z.date(),
    email: import_zod.z.string().email()
  });
  const { cpf, name, birth, email } = registerBodySchema.parse(request.body);
  try {
    const personRepository = new PersonRepository();
    const createPersonUseCase = new CreatePersonUseCase(personRepository);
    await createPersonUseCase.handler({ cpf, name, birth, email });
    return reply.status(201).send();
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error");
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  create
});
