import React, {useEffect} from 'react';

function LogOnMount() {
    const loadData = () => {
        console.log('Load Data...');
    }
    React.useEffect(() => {
        loadData();
    },[]);
    return (
        <div>
            <h1>HIIII</h1>
        </div>
    );
}

export default LogOnMount;