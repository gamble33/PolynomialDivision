import React, {useState} from 'react';
import './App.css';
import PolynomialInput from "./components/PolynomialInput";

var Latex = require('react-latex');

function App() {

    const [coefficients1, setCoefficients1] = useState<Array<number>>([]);
    const [coefficients2, setCoefficients2] = useState<Array<number>>([]);

    const generatePolynomial = (arr: Array<number>) => {
        let expr = ""
        for (let i = arr.length - 1; i >= 0; i--) {
            let k = arr[i];
            if (!k) continue;

            if (k > 0) {
                for (let j = i + 1; j <= arr.length; j++) {
                    if (arr[j]) {
                        expr += " + ";
                        break;
                    }
                }
            }
            if(k === -1 && i !== 0) expr += "-";
            else if(k !== 1 || i === 0) expr += k;
            const xPower = i === 1 ? "x" : `x^{${i}}`;
            if(i !== 0) expr += xPower;
        }
        return expr;
    }

    const renderExpression = () => {
        let numerator = generatePolynomial(coefficients1);
        let denominator = generatePolynomial(coefficients2);
        const expression = `$$\\frac{${numerator}}{${denominator}}$$`;
        return (<Latex>{expression}</Latex>);
    }

    const updateCoefficients1 = (arr: (arr: number[]) => number[]) => {
        setCoefficients1(arr);
    }

    const clearCoefficients1 = (order: number) => {
        setCoefficients1(new Array<number>(order));
    }

    const updateCoefficients2 = (arr: (arr: number[]) => number[]) => {
        setCoefficients2(arr);
    }

    const clearCoefficients2 = (order: number) => {
        setCoefficients2(new Array<number>(order));
    }

    return (
        <div className="App">
            <PolynomialInput setCoefficients={updateCoefficients1} clearCoefficients={clearCoefficients1}/>

            <PolynomialInput setCoefficients={updateCoefficients2} clearCoefficients={clearCoefficients2}/>
            {renderExpression()}
        </div>
    );
}

export default App;
