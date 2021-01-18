const { Board, Led, Sensor } = require("johnny-five");
const loudness = require("loudness");
const brightness = require("brightness");

const board = new Board();

board.on("ready", () => {
  const volMeter = new Sensor({ pin: "A1", threshold: 5 });
  const brightMeter = new Sensor({ pin: "A0", threshold: 5 });

  volMeter.on("change", (data) => {
    const val = volMeter.scaleTo(0, 100);
    loudness.setVolume(val);
    console.log("volume ", val);
  });

  brightMeter.on("change", (data) => {
    const val = +brightMeter.fscaleTo(0, 1).toFixed(3);
    brightness.set(val);
    console.log("Brightness ", val);
  });
});
