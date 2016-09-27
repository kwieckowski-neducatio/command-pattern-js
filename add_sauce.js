var Command = require("./command.js");


function Add_sauce () {
  Command.apply(this, Array.prototype.slice.call(arguments));
  this.description = "Add_sauce";
}

Add_sauce.prototype = new Command(Add_sauce.description);

Add_sauce.prototype.execute = function () {
  console.log("dodaję sos");
};

Add_sauce.prototype.unexecute = function () {
  console.log("zdejmuję sos");
};

module.exports = Add_sauce;
