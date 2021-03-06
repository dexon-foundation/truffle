var command = {
  command: "publish",
  description: "Publish a package to the Ethereum Package Registry",
  builder: {},
  help: {
    usage: "truffle publish",
    options: []
  },
  run: function(options, done) {
    var Config = require("@dexon-foundation/truffle-config");
    var Package = require("../package");

    var config = Config.detect(options);
    Package.publish(config, done);
  }
};

module.exports = command;
