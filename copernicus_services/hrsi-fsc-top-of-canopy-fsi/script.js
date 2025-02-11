//VERSION=3

function setup() {
  return {
    input: ["FSCTOC", "dataMask"],
    output: { bands: 4, sampleType: "AUTO" },
  };
}

const ramps = [
  [0, 0xffffff],
  [100, 0x4d4dff],
];

const visualizer = new ColorRampVisualizer(ramps);

function evaluatePixel(sample) {
  var FSCTOC_viz = visualizer.process(sample.FSCTOC);
  if (sample.FSCTOC == 255) {
    return [0, 0, 0, sample.dataMask];
  } else if (sample.FSCTOC == 205) {
    return [0.9, 0.9, 0.9, sample.dataMask];
  } else {
    return [FSCTOC_viz[0], FSCTOC_viz[1], FSCTOC_viz[2], sample.dataMask];
  }
}
