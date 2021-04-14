import React, { Component } from "react";
import UIfx from "uifx";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import correct_sfx from "../../../../resources/sound/correct-sound.mp3";

const correctSound = new UIfx(correct_sfx, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});

// a little function to help us with reordering the result
const swap = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const temp = list[endIndex].falseAnswer;
  //swap items at index
  result[endIndex].falseAnswer = list[startIndex].falseAnswer;
  result[startIndex].falseAnswer = temp;
  return result;
};

const getItemStyle = (item, isDragging, style) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  display: "grid",
  placeItems: "center",
  width: 250,
  height: 80,
  borderBottomLeftRadius: "15px",
  borderBottomRightRadius: "15px",
  margin: "0px 50px 0px 50px",
  background: "white",
  // change background colour if dragging
  border:
    item.answer === item.falseAnswer
      ? "8px solid aquamarine"
      : "8px solid lightcoral",
  borderTop:
    item.answer === item.falseAnswer
      ? "5px solid aquamarine"
      : "5px solid lightcoral",
  // styles we need to apply on draggables
  ...style,
});

const getListStyle = () => ({
  display: "grid",
  placeItems: "center",
  gridTemplateColumns: "repeat(4, 1fr)",
});

export default class SwapGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.info,
    };
    this.onDragEnd = this.onDragEnd.bind(this);
    this.checkCorrect = this.checkCorrect.bind(this);
  }

  checkCorrect = () => {
    var count = 0;
    this.state.items.map((item) => {
      if (item.answer === item.falseAnswer) {
        count++;
        if (count === 4) {
          correctSound.play();
        }
      }
      return count;
    });
    console.log(count);
    if (count === 4) {
      setTimeout(() => {
        count = 0;
        this.props.nextGame();
      }, 1000);
    }
  };

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = swap(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
    this.checkCorrect();
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle()}
              {...provided.droppableProps}
            >
              {this.state.items.map((item, index) => (
                <div key={index}>
                  <div
                    className={
                      item.answer === item.falseAnswer
                        ? "swap-question swap-question-true"
                        : "swap-question swap-question-false"
                    }
                  >
                    {item.question}
                  </div>
                  <Draggable draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          item,
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.falseAnswer}
                      </div>
                    )}
                  </Draggable>
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
