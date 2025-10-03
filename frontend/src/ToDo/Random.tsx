import { useState } from "react";

export default function Random() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [sum, setSum] = useState<number | null>(null);


    const handleAdd = () => {
        const result = Number(num1) + Number(num2);
        setSum(result);
    };

    return(
        <>
            <h1>Add Two Numbers</h1>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter first number"/>
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter second number"/>
            <button onClick={handleAdd}>Add</button>
            {sum !== null && <h3>Result: {sum}</h3>}
        </>
    )
}