import React from 'react';

function ToggleText() {
    const [textVisibility, setTextVisibility] = React.useState(true);
    const textVisiblityHandler = () => {
        setTextVisibility(!textVisibility);
    }
    return (
        <div>
            <h1>Toggle Text</h1>
            <button onClick={textVisiblityHandler}>Click me</button>
            {textVisibility ? <p>Hello World</p> : null}
        </div>
    );
}

export default ToggleText;