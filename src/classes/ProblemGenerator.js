import {ACTION_TYPES, INVERSE_ACTIONS} from './ActionTypes.js';
import Problem from './Problem.js';

export default class ProblemGenerator {
    
    constructor(actionType, lowerBound=2, upperBound=9) {
        this.actionType = actionType;
        this.lowerBound = lowerBound;
        this.upperBound = upperBound;
    }

    generate = function(target, targetProb=0.5) {
        if (Math.random() < targetProb) {
            // generate a problem that meets the target
            let operand1 = -1;
            let operand2 = -1;
            while (operand1 < 0 || operand2 < 0) {
                operand1 = this.getRandom();
                operand2 = new Problem(target, operand1, INVERSE_ACTIONS[this.actionType]).getSolution();
            }
            return new Problem(operand1, operand2, this.actionType);
        } else {
            // generate a random problem
            return new Problem(this.getRandom(), this.getRandom(), this.actionType);
        }
    }

    // get a number x s.t. this.lowerBound <= x <= this.upperBound 
    getRandom = function() {
        return Math.floor(Math.random()*(this.upperBound-this.lowerBound+1))+this.lowerBound; 
    }

}