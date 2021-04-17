import UIfx from "uifx";
import correct_1 from "../resources/sound/correct_1.mp3";
import correct_2 from "../resources/sound/correct_2.mp3";
import wrong_1 from "../resources/sound/wrong_1.mp3";
import wrong_2 from "../resources/sound/wrong_2.mp3";
import wrong_3 from "../resources/sound/wrong_3.mp3";

const correctSound1 = new UIfx(correct_1, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});
const correctSound2 = new UIfx(correct_2, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});
export const wrongSound1 = new UIfx(wrong_1, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});
const wrongSound2 = new UIfx(wrong_2, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});
const wrongSound3 = new UIfx(wrong_3, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});

export const correctSound = [correctSound1, correctSound2];
export const wrongSound = [wrongSound2, wrongSound3];
