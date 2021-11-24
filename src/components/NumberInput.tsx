import React from "react";
import {useState} from "react";

interface Props {
    onChange(order: number): void,
}

const NumberInput: React.FC<Props> = ({onChange, children}) => {

    return (
        <label>
            <input type={"number"} onChange={event => onChange(parseInt(event.target.value))}/>
            {" "}
            {children}
        </label>
    );
};

export default NumberInput;

