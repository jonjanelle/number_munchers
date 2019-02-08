import ActionType from './ActionType.js';

export default class Problem {
    constructor(operand1, operand2, operator) {
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.operator = operator;
        this.solution = this.getSolution();
        this.displayString = this.getDisplayString();
    }

    getSolution() {
        if (this.operator === ActionType.Add) 
            return this.operand1 + this.operand2;
        else if (this.operator === ActionType.Sub) 
            return this.operand1 - this.operand2;
        else if (this.operator === ActionType.Mul) 
            return this.operand1 * this.operand2;
        else if (this.operator === ActionType.Div) 
            return this.operand1 / this.operand2;
        else if (this.operator === ActionType.Mod) 
            return this.operand1 % this.operand2;
    }

    getDisplayString() {
        return `${this.operand1} ${this.operator} ${this.operand2}`; 
    }
    
}