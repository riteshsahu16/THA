import React, { Component } from "react";
import Card from "./card";

class Cards extends Component {
  state = {
    cards: [
      { name: "Chaursela", calories: 10 },
      { name: "Thethri", calories: 20 },
      { name: "Khurmi", calories: 30 },
      { name: "pizza", calories: 10 },
      { name: "burger", calories: 20 },
      { name: "samosa", calories: 30 },
    ],
  };

  container = {
    borderColor: "black",
    borderWidth: "3",
    borderStyle: "solid",
    margin: "20px",
    padding: "50px",
    height: "500px",
    width: "700px",
    overflow: "scroll",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  };

  render() {
    return (
      <div style={this.container}>
        {this.state.cards.map((card) => (
          <Card name={card.name} calories={card.calories}></Card>
        ))}
      </div>
    );
  }
}

export default Cards;
