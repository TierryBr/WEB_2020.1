import React, { Component } from "react";

import Num from "./Num";

import { connect } from 'react-redux';

class Maior extends Component {

  maior() {
    if(this.props.numberOne > this.props.numberTwo) {
      return this.props.numberOne
    }
    else if (this.props.numberTwo > this.props.numberOne){
      return this.props.numberTwo
    }
    else return <h1>iguais</h1>  
  }

  render() {
    return (
      <Num title="Maior">
        <h1>{this.maior()}</h1>
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

export default connect(mapStateToProps)(Maior)
