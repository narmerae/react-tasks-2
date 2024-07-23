import React, {useEffect} from 'react';

function DocumentTitleUpdater() {
    const [count, setCount] = React.useState(0);
    useEffect(() => {
        document.title = count.toString()
    },[count]);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>Increase</button>
        </div>
    );
}

export default DocumentTitleUpdater;