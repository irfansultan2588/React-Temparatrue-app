import React, { useState } from 'react'

const Temperatrue = () => {

    const [tempValue, setTempValue] = useState(10);
    const [tempColor, setTempcolor] = useState("cold");

    const incrTemp = () => {

        if (tempValue === 35) return;
        const newTemp = tempValue + 1

        if (newTemp >= 15) {
            setTempcolor('hot');
        }

        setTempValue(newTemp);
    };


    const decrTemp = () => {

        if (tempValue === 0) return;


        const newTemp = tempValue - 1

        if (newTemp < 15) {
            setTempcolor('cold');
        }

        setTempValue(newTemp);
    };


    return (
        <div className="app-container">
            <div className="temp-display-container">
                <div className={`temp-dispaly ${tempColor}`}>{tempValue}°C</div>
            </div>
            <div className="btn-container">
                <button onClick={() => incrTemp()}>+</button>
                <button onClick={() => decrTemp()}>-</button>
            </div>
        </div>
    )
}

export default Temperatrue