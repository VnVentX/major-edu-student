import React, { Component } from "react";
import UIfx from "uifx";
import correct_sfx from "../../../../resources/sound/correct-sound.mp3";
import CardContainer from "./CardContainer";

const correctSound = new UIfx(correct_sfx, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});

class MatchingGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: props.info,
    };
    this.swap = this.swap.bind(this);
    this.checkCorrect = this.checkCorrect.bind(this);
  }

  swap = (title1, title2) => {
    let pos2 = this.state.info.findIndex((object) => {
      return object.question === title2;
    });
    let pos1 = this.state.info.findIndex((object) => {
      return object.question === title1;
    });
    let data = this.state.info;
    let temp = this.state.info[pos1].falseAnswer;
    data[pos1].falseAnswer = this.state.info[pos2].falseAnswer;
    data[pos2].falseAnswer = temp;
    this.setState({ info: data });
    this.checkCorrect();
  };

  checkCorrect = () => {
    var count = 0;
    this.state.info.map((item) => {
      if (item.answer === item.falseAnswer) {
        count++;
        if (count === 6) {
          correctSound.play();
        }
      }
      return count;
    });
    console.log(count);
  };

  render() {
    return (
      <div>
        <CardContainer swap={this.swap} info={this.state.info} />
      </div>
    );
  }
}

export default MatchingGame;
