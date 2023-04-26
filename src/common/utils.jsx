import { COLORS_ARRAY } from "../constants/colors";
import { NUM_OF_COLORS_IN_GRID } from "../constants/general";

const duplicateElements = (array, times) => {
  const data = array.reduce((res, current) => {
    return res.concat(Array(times).fill(current));
  }, []);
  // Fisher-Yates shuffle algorithm
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
};

function getRandomColorsWithMatchText(numberOfColors = NUM_OF_COLORS_IN_GRID) {
  const numTimeToShuffle = Math.round(numberOfColors / COLORS_ARRAY.length) + 1;
  const array = duplicateElements(COLORS_ARRAY, numTimeToShuffle).filter((value, index) => index < numberOfColors);
  return array;
}

function generateRandomColorsWithDiffText(numberOfColors = NUM_OF_COLORS_IN_GRID * 2) {
  const colors = ["RED", "GREEN", "BLUE", "#f59f00"];
  const numTimeToShuffle = Math.round(numberOfColors / colors.length) + 1;
  const data = duplicateElements(colors, numTimeToShuffle).filter((value, index) => index < numberOfColors);

  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  let finalResult = [];

  for (let i = 0; i < data.length; i = i + 2) {
    finalResult.push({ label: data[i], value: data[i + 1], displayColor: data[i + 1] });
  }
  const newfinalResult = finalResult.map((colorSet) => {
    if (colorSet.label === "#f59f00") {
      return { label: "YELLOW", value: colorSet.value, displayColor: colorSet.value };
    } else return colorSet;
  });
  return newfinalResult;
}
export { getRandomColorsWithMatchText, generateRandomColorsWithDiffText };
