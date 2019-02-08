const ActionType = { Add: "+", Sub: "-", Div: "/", Mul: "*", Mod: "%"};
const InverseSymbol = {'+': '-', '-': "+", '/': "*", '*': "/"};

Object.freeze(ActionType);
Object.freeze(InverseSymbol);

export default ActionType;
export { InverseSymbol };