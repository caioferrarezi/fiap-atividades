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

// src/repositories/Person.repository.ts
var Person_repository_exports = {};
__export(Person_repository_exports, {
  PersonRepository: () => PersonRepository
});
module.exports = __toCommonJS(Person_repository_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PersonRepository
});