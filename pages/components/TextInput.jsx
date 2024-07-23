import React from 'react';

function TextInput() {
    const [text, setText] = React.useState('');
    const onChangeText = (event) => {
        setText(event.target.value);
    }
    return (
        <div>
            <h1>Input Text</h1>
            <input value={text} name="name" onChange={onChangeText}/>
            <p>{text}</p>
        </div>
    );
}

export default TextInput;