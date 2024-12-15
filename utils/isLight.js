import tinycolor from 'tinycolor2';

export const isLight = color => {
  const brightness = tinycolor(color).getBrightness();
  if (brightness > 200) return true;
  else return false;
};

export const getReversedColor = value =>
  isLight(value) ? '#2e2e2e' : '#ececec';
