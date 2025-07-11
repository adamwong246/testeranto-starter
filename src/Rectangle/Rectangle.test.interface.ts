import { Ibdd_in } from "testeranto/src/Types";
import type { PM } from "testeranto/src/PM";

import { BaseTestInterface } from "testeranto/src/lib/index";

import Rectangle from "./Rectangle";
import { afterEach } from "node:test";

export type I = Ibdd_in<
  null,
  null,
  Rectangle,
  Rectangle,
  Rectangle,
  (...x) => (rectangle: Rectangle, utils: IPM) => Rectangle,
  (rectangle: Rectangle, utils: IPM) => Rectangle
>;

export const RectangleTesterantoBaseInterface = {
  beforeEach: async (subject, i) => {
    return i();
  },
  andWhen: async function (s, whenCB, tr, utils) {
    return whenCB(s, utils);
  },
  butThen: async (s, t, tr, pm) => {
    return t(s, pm);
  },
  afterEach: (z) => {
    return z
  },
  afterAll: () => {
    
  },
  assertThis: (x: any, y) => {
  },
};
