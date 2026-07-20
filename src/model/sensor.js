const five = require("johnny-five");

const board = new five.Board();

board.on("ready", () => {
  const thermometer = new five.Thermometer({
    controller: "LM35",
    pin: "A0"
  });

  thermometer.on("change", function () {
    console.log(this.celsius);
  });
});