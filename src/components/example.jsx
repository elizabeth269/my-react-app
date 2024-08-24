import { useEffect, useState } from "react";

function Example() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `you clicked ${count} times`;
        return () => {
            document.title = `React App`;
        };
    }, [count]);

    return (
        <> <p>you clicked {count} times</p>
            <button onClick={() => setCount(countount + 1)}>click me</button>
        </>
    )

}

export default Example;