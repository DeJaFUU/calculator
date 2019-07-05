import * as actionTypes from '../actions/actionTypes';

const updateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject,
		...updatedProperties
	}
}


const initialState = {
	updatedNumber: "",
	display: "",
	currState: "",
	lastNumber: "",
	decimal: false,
	operator: ""
};


const addNumber = (state, action) => {
	return updateObject(state, {display: state.display + action.value,
								lastNumber: state.display + action.value});
}

const addOperator = (state, action) => {
	return updateObject(state, {currState: !state.currState ? state.display : state.currState,
								updatedNumber: state.display ? state.display : state.updatedNumber,
								display: initialState.display,
								operator: action.operator,
								decimal: false});
}

const equals = (state, action) => {
	const updatedNumber = Number(state.currState) + state.operator + Number(state.lastNumber);
	return updateObject(state, 	{display: eval(updatedNumber),
								currState: eval(updatedNumber),
								updatedNumber: updatedNumber,
								decimal: false})
}

const clear = (state, action) => {
	return updateObject(state, initialState);
}

const revert = (state, action) => {
	return updateObject(state, {display: state.display * -1,
								lastNumber: state.display *-1});
}

const percentage = (state, action) => {
	return updateObject(state, {display: state.display / 100,
								currState: state.display / 100,
								updatedNumber: state.display + "/100",
								decimal: true});
}

const deleted = (state, action) => {
	return updateObject(state, {display: !Number(state.display) ? state.display.substring(0, state.display.length -1) : "",
								lastNumber: !Number(state.display) ? state.lastNumber.substring(0, state.lastNumber.length -1) : "",
								updatedNumber: eval(state.updatedNumber)});
}

const decimal = (state, action) => {
	return updateObject(state, {display: state.display + action.decimal,
								decimal: true});
}

const rootReducer = (state = initialState , action) => {
	switch(action.type){
		case actionTypes.ADD_NUMBER: return addNumber(state, action);
		case actionTypes.ADD_OPERATOR: return addOperator(state, action);
		case actionTypes.EQUALS: return equals(state, action);
		case actionTypes.CLEAR: return clear(state, action);
		case actionTypes.DECIMAL: return decimal(state, action);
		case actionTypes.REVERT: return revert(state, action);
		case actionTypes.PERCENTAGE: return percentage(state, action);
		case actionTypes.DELETED: return deleted(state, action);
		default: return state;
	}
};




export default rootReducer;