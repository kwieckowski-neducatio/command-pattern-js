var Command = require("./command.js");


function Add_sauce () {
  Command.apply(this, Array.prototype.slice.call(arguments));
  this.description = "Add_sauce";
}

Add_sauce.prototype = new Command(Add_sauce.description);

Add_sauce.prototype.execute = function () {
  console.log("Adding tomato sauce");
};

Add_sauce.prototype.unexecute = function () {
  console.log("Removing tomato sauce");
};

module.exports = Add_sauce;
