import React, {useEffect} from 'react';

function IntervalComponent() {
    const [count, setCount] = React.useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);
    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
}

export default IntervalComponent;