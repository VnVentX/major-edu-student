import React from "react";
import { Form, Input, Button } from "antd";
import { wrongSound1, correctSound } from "../../../../helper/sound";

const FillingGame = (props) => {
  const [form] = Form.useForm();
  const checkCorrect = (e) => {
    let correctArr = [];
    let answerArr = [];
    answerArr = Object.values(e);
    props.info.forEach((item) => {
      if (item.optionInputType === "text") {
        correctArr.push(item.text);
      }
    });
    var is_same =
      correctArr.length === answerArr.length &&
      correctArr.every(function (element, index) {
        return element === answerArr[index];
      });
    if (is_same === true) {
      let correct =
        correctSound[Math.floor(Math.random() * correctSound.length)];
      correct.play();
      setTimeout(() => {
        props.nextGame();
      }, 1000);
    } else {
      let input = document.getElementsByName("input");
      input.forEach((item) => {
        item.classList.add("shaky_error");
        setTimeout(() => {
          item.classList.remove("shaky_error");
        }, 200);
      });
      wrongSound1.play();
    }
  };

  return (
    <div className="game-choosing-wrap">
      <div className="question-img">
        <img src={props.questionImg} alt={props.questionImg} />
      </div>
      <Form form={form} onFinish={checkCorrect}>
        <div style={{ display: "grid", placeItems: "center" }}>
          <div className="game-filling-option">
            {props.info?.map((i, idx) =>
              i.optionInputType === "text" ? (
                <Form.Item name={`text${idx}`} key={idx}>
                  <Input name="input" autoComplete="off" />
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
                <h1>Answer</h1>
              </div>
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default FillingGame;
