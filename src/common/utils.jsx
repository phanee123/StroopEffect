import { COLORS_ARRAY } from "../constants/colors";
import { NUM_OF_COLORS_IN_GRID } from "../constants/general";

const duplicateElements = (array, times) => {
  return array.reduce((res, current) => {
    return res.concat(Array(times).fill(current));
  }, []);
};

function shuffleArray() {
  const numTimeToShuffle = Math.round(NUM_OF_COLORS_IN_GRID / COLORS_ARRAY.length);
  const array = duplicateElements(COLORS_ARRAY, numTimeToShuffle).filter(
    (value, index) => index < NUM_OF_COLORS_IN_GRID
  );

  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export { shuffleArray };
