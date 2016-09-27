function Compose() {
  this.commands = [];
}

Compose.prototype.add_command = function (command) {
  this.commands.push(command);
};

Compose.prototype.execute = function () {
  this.commands.forEach(function (command) {
    command.execute();
  });
};

Compose.prototype.unexecute = function () {
  this.commands.reverse().forEach(function (command) {
    command.unexecute();
  });
};

Compose.prototype.description = function () {
  this.commands.forEach(function (command) {
    console.log(command.description);
  });
};


module.exports = Compose;
