import { Ibdd_in, IPartialInterface } from "testeranto/src/Types";
import { IPM } from "testeranto/src/lib/types";

import Rectangle from "./Rectangle";

export type I = Ibdd_in<
  null,
  null,
  Rectangle,
  Rectangle,
  Rectangle,
  (...x) => (rectangle: Rectangle, utils: IPM) => Rectangle,
  (rectangle: Rectangle, utils: IPM) => Rectangle
>;

export const RectangleTesterantoBaseInterface: IPartialInterface<I> = {
  beforeEach: async (subject, i) => {
    return i();
  },
  andWhen: async function (s, whenCB, tr, utils) {
    return whenCB(s)(s, utils);
  },
  butThen: async (s, t, tr, pm) => {
    return t(s, pm);
  },
};
