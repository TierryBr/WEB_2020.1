import React, { Component } from "react";

import "../App.css";

import Num from "./Num";

import { connect } from 'react-redux'

class Navigate extends Component {
  render() {
    return (
        <div className="line">
            <Num title="Número 1">
                <h1>{this.props.numberOne}</h1>
            </Num>

            <Num title="Número 2">
                <h1>{this.props.numberTwo}</h1>
            </Num>
        </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    numberOne: state.number.number1,
    numberTwo: state.number.number2
  }
}

export default connect(mapStateToProps)(Navigate)
