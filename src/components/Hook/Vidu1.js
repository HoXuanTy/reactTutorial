import React, { useState } from 'react';

export default function Vidu1() {
    const [count, setCount] = useState(0);

    const onClicks = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={onClicks}>Increment</button>
        </div>
    )
}
