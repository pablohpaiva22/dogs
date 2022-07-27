import React, { Component } from "react";
import styles from "./Teste.module.css";

export default class Teste extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contar: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("hello");
  }

  handleClick() {
    this.setState({ contar: this.state.contar + 1 });
  }

  render() {
    return (
      <div className={styles.container}>
        <button onClick={this.handleClick}>clique</button>
        <p>{this.state.contar}</p>
      </div>
    );
  }
}
