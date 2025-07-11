import { IProject } from "testeranto/src/Types";

const config: IProject = {
  projects: {
    rectangle: {

      tests: [
        // the Rectangle class, tested on all 3 environments
        ["./src/Rectangle/Rectangle.test.node.ts", "node", { ports: 0 }, []],
        ["./src/Rectangle/Rectangle.test.web.ts", "web", { ports: 0 }, []],
        ["./src/Rectangle/Rectangle.test.pure.ts", "pure", { ports: 0 }, []],
      ],

      ports: ["3001"],
      src: "src",
      debugger: false,
      minify: false,
      clearScreen: false,
      externals: [],
      importPlugins: [],
      nodePlugins: [],
      webPlugins: [],
      
      featureIngestor: async function (s: string): Promise<string> {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (res) => {
          try {
            res((await (await fetch(new URL(s).href)).json()).body);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (err) {
            res(s);
          }
        });
      },
      
    },
  },
};
export default config;
