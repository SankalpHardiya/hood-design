const px = (id: number, w = 800, h = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=${h}&w=${w}`;

export const HOODIE_IMAGES = {
  heroMan: px(21939625, 900, 1200),
  product: px(19461583, 900, 1100),
  released: px(28701950, 900, 1100),
  cream: px(6804868, 700, 1000),
  orange: px(30720840, 700, 900),
  red: px(29652516, 700, 1000),
  redSquare: px(29652516, 800, 900),
  black: px(19887010, 800, 1000),
  green: px(9406240, 700, 900),
  blackStudio: px(17043220, 800, 900),
  soda: px(15833162, 600, 800),
  seated: px(20248582, 600, 800),
  bw: px(28701960, 600, 800),
  dramatic: px(9406240, 600, 800),
  whiteHoodie: px(20248584, 600, 800),
};

export const HOODIE_CATEGORY_IMAGES: Record<string, string> = {
  ESSENTIALS: px(21939625, 480, 640),
  OVERSIZED: px(28701950, 480, 640),
  'HEAVY WEIGHT': px(17043220, 480, 640),
  ZIP: px(30720840, 480, 640),
  'TECH FLEECE': px(9406240, 480, 640),
  CROPPED: px(6804868, 480, 640),
  LIMITED: px(29652516, 480, 640),
};
