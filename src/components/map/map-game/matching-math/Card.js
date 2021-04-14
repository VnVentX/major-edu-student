import React, { Component } from "react";

class Card extends Component {
  state = {
    index: this.props.index,
    targetbox: null,
  };

  cssGrid = {
    1: "math-one",
    2: "math-two",
    3: "math-three",
    4: "math-four",
  };

  dragEnd = (event) => {
    this.setState({ targetbox: null });
  };

  dragStart = (event) => {
    event.dataTransfer.setData("text", event.target.id);
    this.setState({ targetbox: true });
  };

  drop = (event) => {
    if (event.target.id) {
      this.props.swap(event.dataTransfer.getData("text"), event.target.id);
      event.dataTransfer.clearData();
    }
  };

  render() {
    if (this.state.targetbox === null) {
      return (
        <div
          className={this.cssGrid[this.state.index]}
          id={this.props.question}
          draggable="true"
          onDrop={this.drop}
          onDragStart={this.dragStart}
          onDragOver={(event) => event.preventDefault()}
          onDragEnd={this.dragEnd}
          style={
            this.props.options === this.props.correct
              ? { backgroundColor: "aquamarine" }
              : null
          }
        >
          {this.props.options}
        </div>
      );
    } else {
      const style = { backgroundColor: "lightblue", zIndex: 2 };
      return (
        <div
          style={style}
          className={this.cssGrid[this.state.index]}
          id={this.props.question}
          draggable="true"
          onDrop={this.drop}
          onDragStart={this.dragStart}
          onDragOver={(event) => event.preventDefault()}
          onDragEnd={this.dragEnd}
        />
      );
    }
  }
}

export default Card;
