const path = require("path");

module.exports = {
  title: "React Use Cursor Follow",
  components: "src/**/*.{ts,tsx}",
  ignore: ["**/*.test.{ts,tsx}", "**/index.ts"],
  skipComponentsWithoutExample: true,
  usageMode: "expand", // Keep prop tables always expanded
  exampleMode: "expand", // Keep code examples always expanded
  showSidebar: false, // Hide the sidebar
  propsParser: require("react-docgen-typescript").parse,
  getComponentPathLine: () =>
    `import { useCursorFollow } from "react-use-cursor-follow";`,
  ribbon: {
    // Link to open on the ribbon click (required)
    url: "https://github.com/areknow/react-use-cursor-follow",
    // Text to show on the ribbon (optional)
    text: "Fork me on GitHub",
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        "react-use-cursor-follow": path.resolve(__dirname, "src/index.ts"),
      },
    },
    ignoreWarnings: [
      {
        message: /The legacy JS API is deprecated/,
      },
    ],
  },
  theme: {
    color: {
      link: "#4ecdc4",
      linkHover: "#ff6b6b",
    },
    fontFamily: {
      base: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    },
  },
  styles: {
    Playground: {
      preview: {
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        fontFamily:
          '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      },
    },
  },
};
