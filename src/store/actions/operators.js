import * as actionTypes from "./actionTypes";


export const addNumber = (num) => {
	return {
		type: actionTypes.ADD_NUMBER,
		value: num
	}
}

export const addOperator = (operator) => {
	return {
		type: actionTypes.ADD_OPERATOR,
		operator: operator
	}
}

export const equals = () => {
	return {
		type: actionTypes.EQUALS,
	}
}

export const clear = () => {
	return {
		type: actionTypes.CLEAR,
	}
}

export const decimal = (decimal) => {
	return {
		type: actionTypes.DECIMAL,
		decimal: decimal
	}
}

export const revert = () => {
	return {
		type:actionTypes.REVERT
	}
}

export const percentage = () => {
	return {
		type:actionTypes.PERCENTAGE
	}
}

export const deleted = () => {
	return {
		type:actionTypes.DELETED
	}
}

