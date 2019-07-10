import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/operators";
import "../styles/styles.css";
import Screen from "../components/Screen";
import KeypadRow from "../components/KeypadRow";
import Button from "../components/Button"


class Display extends Component {
	render(){	
		return (
		<div className="Display">
		<Screen display={this.props.display} updatedNumber={this.props.updatedNumber}/>
		<KeypadRow>
		 <Button id="percentage" type="operator" clicked={this.props.onPercentage}>%</Button>
		 <Button id="clear" type="primary" clicked={this.props.onClear}>c</Button>
		 <Button id="deleted" type="primary" clicked={this.props.onDeleted}>del</Button>
		 <Button id="divide" type="operator" clicked={() => this.props.onPressOperator("/")}>/</Button>
				</KeypadRow>
				<KeypadRow>
		 <Button id="seven" clicked={() => this.props.onPressNumber(7)}>7</Button>
		 <Button id="eight" clicked={() => this.props.onPressNumber(8)}>8</Button>
		 <Button id="nine" clicked={() => this.props.onPressNumber(9)}>9</Button>
		 <Button id="multiply" type="operator" clicked={() => this.props.onPressOperator("*")}>*</Button>
		 		</KeypadRow>
		 		<KeypadRow>
		 <Button id="four" clicked={() => this.props.onPressNumber(4)}>4</Button>
		 <Button id="five" clicked={() => this.props.onPressNumber(5)}>5</Button>
		 <Button id="six" clicked={() => this.props.onPressNumber(6)}>6</Button>
		 <Button id="substract" type="operator" clicked={() => this.props.onPressOperator("-")}>-</Button>
		 		 </KeypadRow>
		 		 <KeypadRow>
		 <Button id="one" clicked={() => this.props.onPressNumber(1)}>1</Button>
		 <Button id="two" clicked={() => this.props.onPressNumber(2)}>2</Button>
		 <Button id="three" clicked={() => this.props.onPressNumber(3)}>3</Button>
		 <Button id="add" type="operator" clicked={() => this.props.onPressOperator("+")}>+</Button>
		 		</KeypadRow>
		 		<KeypadRow>
		 <Button id="revert" type="operator" clicked={this.props.display ? this.props.onRevert : null}>&plusmn;</Button>
		 <Button id="zero" clicked={this.props.display ? () => this.props.onPressNumber(0) : null}>0</Button>
		 <Button id="decimal" type="operator" clicked={(Number(this.props.display))===Math.floor(Number(this.props.display)) ? this.props.onDecimal : ""}>.</Button>
		 <Button  id="equals" type="operator" clicked={this.props.operator ? this.props.onPressEquals : null}>=</Button>
				</KeypadRow>
		</div>
		)
	}
}

const mapStateToProps = (state) =>{
	return {
	display: state.display,
	prevState: state.prevState,
	history: state.history,
	operator: state.operator,
	updatedNumber: state.updatedNumber
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onPressNumber: (num) => dispatch(actions.addNumber(num)),
		onPressOperator: (op) => dispatch(actions.addOperator(op)),
		onPressEquals: () => dispatch(actions.equals()),
		onClear: () => dispatch(actions.clear()),
		onDecimal: () => dispatch(actions.decimal(".")),
		onRevert: () => dispatch(actions.revert()),
		onPercentage: () => dispatch(actions.percentage()),
		onDeleted: () => dispatch(actions.deleted())
	}	
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);