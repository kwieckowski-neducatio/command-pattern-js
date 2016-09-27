var Command = require("./command.js");


function Add_pineapple () {
  Command.apply(this, Array.prototype.slice.call(arguments));
  this.description = "Add_pineapple";
}

Add_pineapple.prototype = new Command(Add_pineapple.description);

Add_pineapple.prototype.execute = function () {
  console.log("Adding pineapple");
};

Add_pineapple.prototype.unexecute = function () {
  console.log("Removing pineapple");
};

module.exports = Add_pineapple;
