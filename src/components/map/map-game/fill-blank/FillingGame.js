import React from "react";
import { Form, Input, Button } from "antd";
import UIfx from "uifx";
import correct_sfx from "../../../../resources/sound/correct-sound.mp3";

const correctSound = new UIfx(correct_sfx, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});

const FillingGame = (props) => {
  const [form] = Form.useForm();
  const checkCorrect = (e) => {
    let correctArr = [];
    let answerArr = [];
    answerArr = Object.values(e);
    props.info.forEach((item) => {
      if (item.inputType === "text") {
        correctArr.push(item.text);
      }
    });
    var is_same =
      correctArr.length === answerArr.length &&
      correctArr.every(function (element, index) {
        return element === answerArr[index];
      });
    if (is_same === true) {
      correctSound.play();
      setTimeout(() => {
        props.nextGame();
      }, 1000);
    }
  };

  return (
    <div className="game-choosing-wrap">
      <div className="question-text">
        <img src={props.questionImg} alt={props.questionImg} />
      </div>
      <Form form={form} onFinish={checkCorrect}>
        <div style={{ display: "grid", placeItems: "center" }}>
          <div className="game-filling-option">
            {props.info?.map((i, idx) =>
              i.optionInputType === "text" ? (
                <Form.Item name={`text${idx}`} key={idx}>
                  <Input autoComplete="off" />
                </Form.Item>
              ) : (
                <h1 key={idx}>{i.text}</h1>
              )
            )}
          </div>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                border: 0,
                background: "transparent",
                marginTop: 100,
              }}
            >
              <div className="progress-test-btn">
                <div className="oval-button" />
                <h1>Submit</h1>
              </div>
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default FillingGame;
