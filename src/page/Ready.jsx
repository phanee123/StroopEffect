import { useEffect, useContext } from "react";
import { ResultsContext } from "../context/Results";
import { useNavigate } from "react-router-dom";
import {
  getRandomColorsWithMatchText,
  generateRandomColorsWithDiffText,
} from "../common/utils";
import readyAudio from "../assets/readysound.mp3";

const Ready = () => {
  const navigate = useNavigate();
  const audio = new Audio(readyAudio);
  const { currentTest, setTestNum } = useContext(ResultsContext);

  useEffect(() => {
    audio.play();
    setTimeout(() => {
      if (currentTest !== 3) {
        setTestNum(getRandomColorsWithMatchText());
        navigate(`/test${currentTest}`);
      } else {
        setTestNum(generateRandomColorsWithDiffText());
        navigate(`/test1`);
      }
    }, 2500);
  }, []);
  return <h1>Ready</h1>;
};

export default Ready;
