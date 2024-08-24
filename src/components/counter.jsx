import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);
    return (
        <>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </>
    );
}

export default Counter;