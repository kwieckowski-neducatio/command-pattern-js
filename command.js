function Command(description) {
  this.description = description;
}

Command.prototype.execute = function () {
  throw new Error("Oh no! Execute isn't implemented :(");
};

Command.prototype.unexecute = function () {
  throw new Error("Oh no! Unexecute isn't implemented :(");
};

module.exports = Command;
