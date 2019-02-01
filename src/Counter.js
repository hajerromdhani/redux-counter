import React from "react";
import { connect } from "react-redux";

const Counter = props => {
  return (
    <div>
      <input type="button" value="+" onClick={props.increment} />
      <input type="button" value="-" onClick={props.decrement} />
      <h3>{props.counter}</h3>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" })
  };
};
const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default ConnectedCounter;
