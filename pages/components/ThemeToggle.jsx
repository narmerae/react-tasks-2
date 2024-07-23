import React from 'react';

function ThemeToggle() {
    const [darkMode, setDarkMode] = React.useState(true);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    return (
        <div>
            <h1>Theme Toggle</h1>
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
            <p style={{color: darkMode ? "white" : "black"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur dolorum, facilis hic illo labore obcaecati voluptates. Aut eos hic magnam natus quis unde voluptas. A aliquam beatae debitis ducimus laborum laudantium minima modi mollitia officia omnis optio perferendis perspiciatis placeat possimus provident, quam quibusdam sapiente soluta, totam veritatis voluptatem!</p>
        </div>
    );
}

export default ThemeToggle;