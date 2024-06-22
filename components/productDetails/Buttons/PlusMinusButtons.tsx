"use client";
import React, { useState } from "react";

interface IPlusMinusButtonsProps {

}

export const PlusMinusButtons: React.FunctionComponent<IPlusMinusButtonsProps> = React.memo(() => {
    const [quantity, setQuantity] = useState(1);

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity((prevState) => prevState - 1);
        }
    };

    const handlePlus = () => {
        setQuantity((prevState) => prevState + 1);
    }

    return (
        <div className="flex size-full items-center justify-center space-x-8 lg:w-2/4 border-[1px] border-primary-light p-2 rounded">
            <button className="text-primary-light text-lg" onClick={handleMinus}>{"-"}</button>
            <span className="text-primary-light">{quantity}</span>
            <button className="text-primary-light text-lg" onClick={handlePlus}>{"+"}</button>
        </div>
    )
});