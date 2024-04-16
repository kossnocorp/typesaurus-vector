import * as admin from "firebase-admin";
import { schema } from "typesaurus";
import { describe, it } from "vitest";

admin.initializeApp();

interface Model {}

const db = schema(($) => ({
  vector: $.collection<Model>(),
}));

describe("Vector", () => {
  it.todo("TODO");
});
