import Testeranto from "testeranto/src/Node";

import { RectangleTesterantoBaseTestImplementation } from "./Rectangle.test.implementation";
import { RectangleTesterantoBaseTestSpecification } from "./Rectangle.test.specification";
import { RectangleTesterantoBaseInterface } from "./Rectangle.test.interface";

export default Testeranto(
  null,
  RectangleTesterantoBaseTestSpecification,
  RectangleTesterantoBaseTestImplementation,
  RectangleTesterantoBaseInterface
).catch((error) => {
  console.error('Test runner error:', error);
  process.exit(1);
});
