import ACTION_TYPES from './ActionTypes.js';
import Problem from './Problem.js';

export default class ProblemGenerator {
    
    constructor(actionType, lowerBound=2, upperBound=9) {
        this.actionType = actionType;
        this.upperBound = upperBound;
        this.lowerBound = lowerBound;
    }

    generate = function() {
        return new Problem(this.getOperand(), this.getOperand(), this.actionType);
    }

    // get a number x s.t. this.lowerBound <= x <= this.upperBound 
    getOperand = function() {
        return Math.floor(Math.random()*(this.upperBound+1))+this.lowerBound; 
    }

}