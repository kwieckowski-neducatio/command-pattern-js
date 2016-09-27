var Compose = require("./compose.js");
var Add_ham = require("./add_ham.js");
var Add_pineapple = require("./add_pineapple.js");
var Add_sauce = require("./add_sauce.js");


var pizza = new Compose();

pizza.add_command(new Add_sauce());
pizza.add_command(new Add_ham());
pizza.add_command(new Add_pineapple());

pizza.description();

pizza.execute();
pizza.unexecute();
