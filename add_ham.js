var Command = require("./command.js");


function Add_ham () {
  Command.apply(this, Array.prototype.slice.call(arguments));
  this.description = "Add_ham";
}

Add_ham.prototype = new Command(Add_ham.description);

Add_ham.prototype.execute = function () {
  console.log("dodaję szynkę");
};

Add_ham.prototype.unexecute = function () {
  console.log("zdejmuję szynkę");
};

module.exports = Add_ham;
