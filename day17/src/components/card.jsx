import React, { Component } from "react";

class Card extends Component {
  state = {
    name: this.props.name,
    calories: this.props.calories,
  };

  cardStyle = {
    backgroundColor: "green",
    padding: "10px",
    textAlign: "center",
    margin: "10px",
  };
  render() {
    return (
      <div style={this.cardStyle}>
        <h3>{this.state.name}</h3>
        <p>You have consumed {this.state.calories} cals today</p>
      </div>
    );
  }
}

export default Card;
