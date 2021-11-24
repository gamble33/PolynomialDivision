import React from "react";
import {useState} from "react";

interface Props {
    labelText: string,
    onChange(order: number): void,
}

const NumberInput: React.FC<Props> = ({labelText, onChange}) => {

    return (
        <label>
            {labelText + "\t"}
            <input type={"number"} onChange={event => onChange(parseInt(event.target.value))}/>
        </label>
    );
};

export default NumberInput;

