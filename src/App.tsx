import React from 'react';
import './App.css';
import NumberInput from "./NumberInput";

let polynomialOrder = 2;

const onOrderChange = (order: number) => {
    if (!order) return;
    console.log(order);
    polynomialOrder = order;
}

const renderPolynomialTermsInput = () => {
    if (!polynomialOrder) return "";
    let inputs = [];
    for (let i = 0; i < polynomialOrder; i++) {
        inputs.push(<NumberInput labelText={`x^${i}`} onChange={() => {
            console.log("ok")
        }
        }/>)
    }
    return <div>{inputs}</div>;
}

function App() {
    return (
        <div className="App">
            <NumberInput labelText={"Order"} onChange={onOrderChange}/>
            {renderPolynomialTermsInput()}
        </div>
    );
}

export default App;
