module.exports = {
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./html-report",
        filename: "report.html",
        expand: true,
      },
    ],
  ],

  testEnvironment: "node",
  setupFiles: ["./setup-env.js"], // Load dotenv for Jest
};
