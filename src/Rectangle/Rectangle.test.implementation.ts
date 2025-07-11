import { assert } from "chai";
import type { PM } from "testeranto/src/PM";

import Rectangle from "./Rectangle";
import { O } from "./Rectangle.test.specification";

export type M = {
  givens: {
    [K in keyof O["givens"]]: (...Iw: O["givens"][K]) => Rectangle;
  };
  whens: {
    [K in keyof O["whens"]]: (
      ...Iw: O["whens"][K]
    ) => (rectangle: Rectangle, utils: PM) => Rectangle;
  };
  thens: {
    [K in keyof O["thens"]]: (
      ...Iw: O["thens"][K]
    ) => (rectangle: Rectangle, utils: PM) => Rectangle;
  };
};

export const RectangleTesterantoBaseTestImplementation = {
  suites: {
    Default: "a default suite",
  },

  givens: {
    Default: () => new Rectangle(2, 2),
    WidthOfOneAndHeightOfOne: () => new Rectangle(1, 1),
    WidthAndHeightOf: (width, height) => new Rectangle(width, height),
  },

  whens: {
    HeightIsPubliclySetTo: (height) => (rectangle) => {
      rectangle.setHeight(height);
      return rectangle;
    },
    WidthIsPubliclySetTo: (width) => (rectangle) => {
      rectangle.setWidth(width);
      return rectangle;
    },
    setWidth: (width: number) => (rectangle) => {
      rectangle.setWidth(width);
      return rectangle;
    },
    setHeight: (height: number) => (rectangle) => {
      rectangle.setHeight(height);
      return rectangle;
    },
  },

  thens: {
    AreaPlusCircumference: (combined) => (rectangle) => {
      const actual = rectangle.area() + rectangle.circumference();
      assert.equal(actual, combined);
      return rectangle;
    },
    getWidth: (expectedWidth) => (rectangle) => {
      console.log("then.getWidth", expectedWidth)
      assert.equal(rectangle.getWidth(), expectedWidth);
      return rectangle;
    },
    getHeight: (expectedHeight) => (rectangle) => {
      console.log("then.getHeight", expectedHeight)
      assert.equal(rectangle.getHeight(), expectedHeight);
      return rectangle;
    },
    area: (area) => (rectangle) => {
      assert.equal(rectangle.area(), area);
      return rectangle;
    },
    prototype: () => (rectangle) => {
      assert.equal(Object.getPrototypeOf(rectangle), Rectangle.prototype);
      return rectangle;
    },
    circumference: (circumference: number) => (rectangle: Rectangle) => {
      assert.equal(rectangle.circumference(), circumference);
      return rectangle;
    },
  },

  checks: {
    Default: () => new Rectangle(2, 2),
    WidthOfOneAndHeightOfOne: () => new Rectangle(1, 1),
    WidthAndHeightOf: (width, height) => new Rectangle(width, height),
  },
};
