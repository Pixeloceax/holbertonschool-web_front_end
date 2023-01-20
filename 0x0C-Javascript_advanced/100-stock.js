let stock = {
  macbook: 2,
  iphone: 4,
  processPayment: function (itemName) {
    if (
      (itemName === "macbook" && this.macbook > 0) ||
      (itemName === "iphone" && this.iphone > 0)
    ) {
      this[itemName] -= 1;
    }
    console.log(`Payment is being processed for item ${itemName}`);
  },
  processError: function (itemName) {
    console.log(`No more ${itemName} in stock`);
    console.log(`Payment is not being processed`);
  },

  processOrder: function (itemName, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${itemName}`);
    if (
      (itemName === "macbook" && this.macbook > 0) ||
      (itemName === "iphone" && this.iphone > 0)
    ) {
      callbackPayment(itemName);
    } else {
      callbackError(itemName);
    }
  },
};

let item = prompt(
  "Please enter the item you would like to purchase (Macbook, iPhone)"
).toLowerCase();

if (item === "macbook") {
  stock.processOrder(item, stock.processPayment, stock.processError);
} else if (item === "iphone") {
  stock.processOrder(item, stock.processPayment, stock.processError);
} else {
  console.log("Invalid item selected");
}
