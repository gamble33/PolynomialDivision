import React, {useState} from 'react';
import NumberInput from "./NumberInput";

var Latex = require('react-latex');

interface Props {
    setCoefficients(arr: (arr: number[]) => number[]): void;
    clearCoefficients(order: number): void;
}

const PolynomialInput: React.FC<Props> = ({setCoefficients, clearCoefficients}) => {

    const [polynomialOrder, setPolynomialOrder] = useState<number>(0);

    const renderPolynomialTermsInput = () => {
        if (!polynomialOrder || polynomialOrder < 1) return "";
        let inputs = [];
        for (let i = polynomialOrder - 1; i >= 0; i--) {

            const onCoefficientChange = (coefficient: number) => {
                setCoefficients(arr => [
                    ...arr.slice(0, i),
                    coefficient,
                    ...arr.slice(i + 1, arr.length)]
                );
            }

            const xPower = `$x^{${i}}$`;
            inputs.push(
                <NumberInput key={i} onChange={onCoefficientChange}><Latex>{xPower}</Latex></NumberInput>
            )
        }
        return (<div>{inputs}</div>);
    }

    const onOrderChange = (order: number) => {
        if (!order) return;
        clearCoefficients(order);
        setPolynomialOrder(order);
    }

    return (
        <div>
            <NumberInput onChange={onOrderChange}>Order </NumberInput>
            {renderPolynomialTermsInput()}
        </div>
    );
};

export default PolynomialInput;
