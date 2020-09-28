import React, { Component } from "react";

import Num from "./Num";

import { connect } from 'react-redux'

class Soma extends Component {
  render() {
    return (
      <Num title="Soma">
        <h1>{this.props.numberOne + this.props.numberTwo}</h1>
      </Num>
    );
  }
}

function mapStateToProps(state) {
  return {
    numberOne: state.number.number1,
    numberTwo: state.number.number2
  }
}

export default connect(mapStateToProps)(Soma)