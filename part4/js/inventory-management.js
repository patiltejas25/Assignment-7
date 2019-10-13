/*eslint-env browser*/

function display_menu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - view all product");
    window.console.log("update - update existing product's inventory");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function display(inventory) {
    "use strict";
    inventory.sort();
    inventory.forEach(function (product) {
        window.console.log(product[0] + " " + product[1] + " (" + product[2] + ") $" + product[3]);
    });
    window.console.log("");
}


function update(inventory){
    "use strict";
    
    var flag = false;
    var sku = parseInt(window.prompt("Enter sku number of the product to update"), 10);
    var newQuantity = parseInt(window.prompt("Enter quantity"), 10);
    inventory.forEach(function (product) {
        if (sku === product[0]){
            product[2] = newQuantity;
            flag = true;
        }
    });

    if (flag === false) {
        window.console.log("SKU number could not be found");
    }
}


function main(){
    "use strict";
    var command;
    display_menu();
    
    var inventory = [[4824, "Shirt", 10, 15.99], [6343, "Jeans", 22, 39.99],  [3223, "Socks", 36, 9.99],[2233, "Hat", 12, 14.99], [9382, "Jacket", 5, 49.99] ];
    
    while (true) {
        command = window.prompt("Enter command");
        command = command.toLowerCase();
        if (command !== null) {
            if (command === "view") {
                display(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}

main();