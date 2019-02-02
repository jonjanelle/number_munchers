import ACTION_TYPES from './ActionTypes.js';

export default class Problem {
    constructor(operand1, operand2, operator) {
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.operator = operator;
        this.solution = this.getSolution();
        this.displayString = this.getDisplayString();
    }

    getSolution() {
        if (this.operator === ACTION_TYPES.ADD) 
            return this.operand1 + this.operand2;
        else if (this.operator === ACTION_TYPES.SUB) 
            return this.operand1 - this.operand2;
        else if (this.operator === ACTION_TYPES.MUL) 
            return this.operand1 * this.operand2;
        else if (this.operator === ACTION_TYPES.DIV) 
            return this.operand1 / this.operand2;
        else if (this.operator === ACTION_TYPES.MOD) 
            return this.operand1 % this.operand2;
    }

    getDisplayString() {
        return `${this.operand1} ${this.operator} ${this.operand2}`; 
    }
}