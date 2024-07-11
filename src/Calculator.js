// src/Calculator.js
import React, {useState, useEffect} from 'react';
import './App.css'

const Calculator = () => {
    const [inputValue, setInputValue] = useState(0);
    const [result1, setResult1] = useState(0);
    const [result2, setResult2] = useState(0);
    const [result3, setResult3] = useState(0);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        const value = parseFloat(inputValue);

        let res1, res2, res3;

        if (value <= 5000) {
            res1 = value * 0.3 / 100 / 12
        } else if (value <= 10000) {
            res1 = (value - 5000) * 0.4 / 100 / 12
            res1 += 5000 * 0.3 / 100 / 12
        } else {
            res1 = (value - 10000) * 0.5 / 100 / 12
            res1 += 5000 * 0.4 / 100 / 12
            res1 += 5000 * 0.3 / 100 / 12
        }

        res2 = value * 2.95 / 100 / 12
        res3 = value * 3.65 / 100 / 12;

        setResult1(res1.toFixed(2));
        setResult2(res2.toFixed(2));
        setResult3(res3.toFixed(2));

    }, [inputValue]);

    return (
        <div className="Calculator">
            <h1>Υπολογιστής Μηνιαίου Τόκου</h1>
            <div>
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter a number"/>
            </div>
            {(
                <div>
                    <h2>Eurobank: {result1}€</h2>
                    <h2>Revolut: {result2}€</h2>
                    <h2>Freedom24: ~{result3}€</h2>
                </div>
            )}
        </div>
    );
};

export default Calculator;
