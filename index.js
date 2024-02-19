const { Toolkit } = require("actions-toolkit");

Toolkit.run(async (tools) => {
  tools.log.success("Success");
  tools.exit.success("Hello, World!");
});
