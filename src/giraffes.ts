export interface ImageMetadata {
  width: number;
  height: number;
  full: {
    baseLayer: string;
    spotLayer: string;
    voidLayer: string;
  };
  thumb: {
    baseLayer: string;
    spotLayer: string;
    voidLayer: string;
  };
  fillPath: string;
  qrSize: number;
  qrRotate: number;
}

export const giraffes: ImageMetadata[] = [
  {
    width: 6000,
    height: 3750,
    full: {
      baseLayer: new URL("giraffes/1/giraffe.jpg", import.meta.url).href,
      spotLayer: new URL("giraffes/1/fill.jpg?width=6000&height=3750", import.meta.url).href,
      voidLayer: new URL("giraffes/1/void.jpg?width=6000&height=3750", import.meta.url).href,
    },
    thumb: {
      baseLayer: new URL("giraffes/1/giraffe.jpg?width=300&height=187", import.meta.url).href,
      spotLayer: new URL("giraffes/1/fill.jpg?width=300&height=187", import.meta.url).href,
      voidLayer: new URL("giraffes/1/void.jpg?width=300&height=187", import.meta.url).href,
    },
    fillPath:
      "5.52,3661.54,70.72,3634.37,141.36,3609.92,206.56,3574.6,293.5,3536.56,399.46,3479.51,445.65,3444.19,491.84,3425.17,624.96,3349.1,744.51,3278.46,853.18,3215.97,1005.33,3161.63,1130.3,3107.29,1249.85,3055.67,1372.11,2985.03,1480.78,2908.96,1608.47,2830.17,1700.85,2756.82,1809.52,2680.74,1915.48,2596.52,2040.46,2493.28,2162.72,2392.75,2241.51,2324.83,2339.31,2246.04,2420.82,2167.25,2488.74,2104.76,2575.68,2009.67,2540.36,2069.45,2510.48,2110.2,2496.89,2169.97,2480.59,2213.44,2472.44,2240.61,2486.03,2294.95,2515.91,2338.42,2570.25,2365.59,2627.3,2365.59,2673.49,2349.28,2722.39,2330.27,2768.58,2286.8,2801.18,2254.19,2833.79,2213.44,2852.8,2183.55,2909.86,2169.97,3002.23,2159.1,3062,2110.2,3105.47,2066.73,3075.59,2156.39,3040.27,2275.93,2999.52,2368.3,2934.31,2468.83,2855.52,2588.37,2763.15,2702.48,2673.49,2803,2586.55,2898.09,2515.91,2971.45,2426.25,3080.12,2358.33,3164.35,2290.41,3254,2200.75,3346.38,2111.1,3460.49,2048.61,3536.56,1986.12,3615.35,1934.5,3688.71,1893.75,3740.33,2.8,3751.19",
    qrSize: 500,
    qrRotate: -23,
  },
  {
    width: 1200,
    height: 1200,
    full: {
      baseLayer: new URL("giraffes/2/giraffe.jpg", import.meta.url).href,
      spotLayer: new URL("giraffes/2/fill.jpg?width=1200&height=1200", import.meta.url).href,
      voidLayer: new URL("giraffes/2/void.jpg?width=1200&height=1200", import.meta.url).href,
    },
    thumb: {
      baseLayer: new URL("giraffes/2/giraffe.jpg?width=300&height=300", import.meta.url).href,
      spotLayer: new URL("giraffes/2/fill.jpg?width=300&height=300", import.meta.url).href,
      voidLayer: new URL("giraffes/2/void.jpg?width=300&height=300", import.meta.url).href,
    },
    fillPath:
      "791.55,894.37 784.51,860.56 791.55,795.78 836.62,743.66 897.18,735.21 916.9,718.31 877.47,643.66 892.96,623.94 1197.18,905.63 1198.59,1195.77 1028.17,1197.18 887.326,1018.31",
    qrSize: 150,
    qrRotate: 35,
  },
];
